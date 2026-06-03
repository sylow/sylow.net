<script setup lang="ts">
// Direct contact details are split and only assembled on user interaction so they
// aren't scrapable strings in the static bundle or initial DOM.
const revealed = ref(false)
const parts = computed(() => {
  const u = ['Z29raGFu', 'c3lsb3c=', 'bmV0'].map((s) => atob(s))
  const digits = [54, 54, 57, 50, 55, 55, 53, 53, 57, 52, 56]
    .map((c) => String.fromCharCode(c)).join('')
  return {
    email: `${u[0]}@${u[1]}.${u[2]}`,
    phone: `+${digits}`,
    wa: `https://wa.me/${digits}`,
  }
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeozgwz'
const MIN_NAME = 2
const MIN_MESSAGE = 20
const MIN_SECONDS_ON_PAGE = 3
const COOLDOWN_MS = 60_000           // 60s between sends
const HOURLY_CAP = 3                 // max 3 sends per hour from same browser
const STORAGE_KEY = 'sylow-contact-state'
// Same as the browser's built-in email regex (HTML5 input[type=email])
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

const form = reactive({ name: '', email: '', message: '', website: '' /* honeypot */ })
const touched = reactive({ name: false, email: false, message: false })
const submitAttempted = ref(false)
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMsg = ref('')
const mountedAt = Date.now()

type StoredState = { sentAt: number[]; lastHashes: string[] }
function readState(): StoredState {
  if (typeof localStorage === 'undefined') return { sentAt: [], lastHashes: [] }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { sentAt: [], lastHashes: [] }
    const parsed = JSON.parse(raw) as StoredState
    return { sentAt: parsed.sentAt ?? [], lastHashes: parsed.lastHashes ?? [] }
  } catch {
    return { sentAt: [], lastHashes: [] }
  }
}
function writeState(s: StoredState) {
  if (typeof localStorage === 'undefined') return
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)) } catch { /* ignore */ }
}
function hashMessage(s: string): string {
  // small djb2 — enough to detect near-identical resends, not a security hash
  let h = 5381
  const norm = s.toLowerCase().replace(/\s+/g, ' ').trim()
  for (let i = 0; i < norm.length; i++) h = ((h << 5) + h + norm.charCodeAt(i)) | 0
  return String(h)
}

const errors = computed(() => {
  const e: { name?: string; email?: string; message?: string } = {}
  if (form.name.trim().length < MIN_NAME) e.name = `Please enter your name (min ${MIN_NAME} characters).`
  if (!EMAIL_RE.test(form.email.trim())) e.email = 'Please enter a valid email address.'
  if (form.message.trim().length < MIN_MESSAGE) e.message = `A few more words please — at least ${MIN_MESSAGE} characters so I can reply usefully.`
  return e
})
const isValid = computed(() => Object.keys(errors.value).length === 0)
const showError = (field: 'name' | 'email' | 'message') =>
  (touched[field] || submitAttempted.value) && Boolean(errors.value[field])

function rateLimitReason(): string | null {
  const now = Date.now()
  const { sentAt } = readState()
  const recent = sentAt.filter((t) => now - t < 60 * 60 * 1000)
  if (recent.length >= HOURLY_CAP) return "You've sent a few messages already — I've got them. I'll reply soon."
  const last = recent[recent.length - 1]
  if (last && now - last < COOLDOWN_MS) {
    const wait = Math.ceil((COOLDOWN_MS - (now - last)) / 1000)
    return `Just a sec — please wait ${wait}s before sending another message.`
  }
  return null
}

async function submit() {
  submitAttempted.value = true
  if (status.value === 'submitting') return

  if (!isValid.value) return // inline errors will render

  // Honeypot: if a bot filled the hidden field, pretend success and bail.
  if (form.website.trim() !== '') {
    status.value = 'success'
    return
  }
  // Bots usually post within milliseconds.
  if (Date.now() - mountedAt < MIN_SECONDS_ON_PAGE * 1000) {
    errorMsg.value = 'Please take a moment to review your message.'
    status.value = 'error'
    return
  }

  const limited = rateLimitReason()
  if (limited) {
    errorMsg.value = limited
    status.value = 'error'
    return
  }

  // Near-duplicate guard: refuse to re-send the same message.
  const hash = hashMessage(`${form.email}|${form.message}`)
  const state = readState()
  if (state.lastHashes.includes(hash)) {
    errorMsg.value = "Looks like you've already sent this. I got it — no need to resend."
    status.value = 'error'
    return
  }

  status.value = 'submitting'
  errorMsg.value = ''
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        _subject: `sylow.net — new enquiry from ${form.name.trim() || form.email.trim()}`,
      }),
    })
    if (res.ok) {
      const now = Date.now()
      const next: StoredState = {
        sentAt: [...state.sentAt.filter((t) => now - t < 60 * 60 * 1000), now],
        lastHashes: [...state.lastHashes, hash].slice(-5),
      }
      writeState(next)
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
      touched.name = touched.email = touched.message = false
      submitAttempted.value = false
      return
    }
    const data = await res.json().catch(() => null)
    errorMsg.value = data?.errors?.[0]?.message || 'Something went wrong. Please email me directly.'
    status.value = 'error'
  } catch {
    errorMsg.value = 'Network error. Please email me directly.'
    status.value = 'error'
  }
}
</script>

<template>
  <div class="wrap">
    <div class="cta">
      <div class="cta-glow" />
      <div class="cta-eyebrow label-mono">Contact</div>
      <h2 class="cta-title">Ready when <em>you are.</em></h2>
      <p class="cta-body">
        Tell me about your project — what you're building, what's stuck, or what you want
        to take from zero to one hundred. I read every message and reply within a day.
      </p>

      <form v-if="status !== 'success'" class="cta-form" novalidate @submit.prevent="submit">
        <div class="cta-field-row">
          <label class="cta-field">
            <span class="cta-label">Your name</span>
            <input
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              maxlength="100"
              required
              :disabled="status === 'submitting'"
              :aria-invalid="showError('name') || undefined"
              placeholder="Jane Doe"
              @blur="touched.name = true"
            >
            <span v-if="showError('name')" class="cta-field-error">{{ errors.name }}</span>
          </label>
          <label class="cta-field">
            <span class="cta-label">Email</span>
            <input
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              maxlength="200"
              required
              :disabled="status === 'submitting'"
              :aria-invalid="showError('email') || undefined"
              placeholder="you@company.com"
              @blur="touched.email = true"
            >
            <span v-if="showError('email')" class="cta-field-error">{{ errors.email }}</span>
          </label>
        </div>
        <label class="cta-field">
          <span class="cta-label">About the project</span>
          <textarea
            v-model="form.message"
            name="message"
            rows="5"
            maxlength="4000"
            required
            :disabled="status === 'submitting'"
            :aria-invalid="showError('message') || undefined"
            placeholder="What are you building? Where is it stuck? Roughly when do you need it?"
            @blur="touched.message = true"
          />
          <span v-if="showError('message')" class="cta-field-error">{{ errors.message }}</span>
        </label>

        <!-- Honeypot — invisible to humans, irresistible to naive bots. -->
        <div class="cta-honeypot" aria-hidden="true">
          <label>
            Website
            <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off">
          </label>
        </div>

        <div class="cta-actions">
          <button
            type="submit"
            class="wordy-btn wordy-btn--primary wordy-btn--lg"
            :disabled="status === 'submitting' || (submitAttempted && !isValid)"
          >
            <AppIcon name="mail" :size="17" />
            {{ status === 'submitting' ? 'Sending…' : 'Send message' }}
          </button>
          <span class="cta-form-hint">Replies within ~1 business day.</span>
        </div>

        <p v-if="status === 'error'" class="cta-form-error" role="alert">{{ errorMsg }}</p>
      </form>

      <div v-else class="cta-success" role="status">
        <AppIcon name="check" :size="18" :sw="2" />
        <span><em>Got it.</em> I'll be in touch within a day.</span>
      </div>

      <div class="cta-divider"><span>or reach me directly</span></div>

      <div v-if="!revealed" class="cta-actions">
        <button
          type="button"
          class="wordy-btn wordy-btn--secondary"
          @click="revealed = true"
        >
          Show direct contact
        </button>
      </div>
      <template v-else>
        <div class="cta-actions">
          <a class="wordy-btn wordy-btn--secondary" :href="parts.wa" target="_blank" rel="noopener noreferrer">
            <AppIcon name="whatsapp" :size="18" /> WhatsApp
          </a>
          <a class="wordy-btn wordy-btn--secondary" :href="`mailto:${parts.email}`">
            <AppIcon name="mail" :size="17" /> Email
          </a>
        </div>
        <p class="cta-mail label-mono" style="margin-top: 18px; color: var(--text-3);">
          <a :href="`tel:${parts.phone}`" style="color: var(--text-2);">{{ parts.phone }}</a>
          <span style="margin: 0 10px; color: var(--border-strong);">·</span>
          <a :href="`mailto:${parts.email}`" style="color: var(--text-2);">{{ parts.email }}</a>
        </p>
      </template>
    </div>
  </div>
</template>
