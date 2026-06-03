<script setup lang="ts">
import { PROJECTS } from '~/data/projects'

const emit = defineEmits<{ nav: [id: string] }>()

const projectsShipped = PROJECTS.length
const industriesServed = '8+'
const railsRange = (() => {
  const versions = PROJECTS.flatMap((p) => p.stack)
    .map((s) => /Rails\s*(\d+(?:\.\d+)?)/.exec(s)?.[1])
    .filter((v): v is string => Boolean(v))
    .map((v) => Number.parseFloat(v))
  if (versions.length === 0) return null
  const lo = Math.floor(Math.min(...versions))
  const hi = Math.ceil(Math.max(...versions))
  return lo === hi ? `Rails ${lo}` : `Rails ${lo} → ${hi}`
})()
</script>

<template>
  <section class="hero hero-b">
    <div class="hero-glow" />
    <div class="hero-eyebrow">
      <span class="hero-status-dot" />
      <span class="hero-eyebrow-text">Available for new projects · Remote</span>
    </div>

    <div class="hero-counter" aria-hidden="true">
      <span class="hc-num">0</span>
      <span class="hc-arrow" />
      <span class="hc-num hc-num--to">100</span>
    </div>

    <h1 class="hero-title">Idea to shipped. I run the <em>whole distance.</em></h1>
    <p class="hero-sub">
      Hand me your specifications and a deadline. One person, the whole stack —
      architecture, backend, frontend, the AI, and hosting set up for you — delivered as
      one working package, not a pile of parts.
    </p>

    <div class="hero-actions">
      <a class="wordy-btn wordy-btn--primary wordy-btn--lg" style="cursor: pointer" @click="emit('nav', 'contact')">
        Start a project<AppIcon name="arrowRight" :size="18" style="margin-left: 2px" />
      </a>
      <a class="wordy-btn wordy-btn--secondary wordy-btn--lg" style="cursor: pointer" @click="emit('nav', 'work')">
        See the work
      </a>
    </div>

    <dl class="hero-stats" aria-label="At a glance">
      <div class="hero-stat">
        <dt class="hero-stat-num">{{ projectsShipped }}</dt>
        <dd class="hero-stat-label">Projects shipped</dd>
      </div>
      <div class="hero-stat">
        <dt class="hero-stat-num">20+</dt>
        <dd class="hero-stat-label">Years indie</dd>
      </div>
      <div v-if="railsRange" class="hero-stat">
        <dt class="hero-stat-num">{{ railsRange }}</dt>
        <dd class="hero-stat-label">Rescued &amp; upgraded</dd>
      </div>
      <div class="hero-stat">
        <dt class="hero-stat-num">{{ industriesServed }}</dt>
        <dd class="hero-stat-label">Industries served</dd>
      </div>
    </dl>

    <div class="hero-meta">
      <span>Rails + Vue/Nuxt</span>
      <span>One-person team</span>
      <span>Türkiye · Netherlands · Thailand</span>
    </div>
  </section>
</template>
