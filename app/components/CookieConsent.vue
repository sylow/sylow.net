<script setup lang="ts">
const { choice, accept, decline } = useConsent()
</script>

<template>
  <Transition name="consent">
    <div
      v-if="choice === null"
      class="consent"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <p class="consent-text">
        I use Google Analytics to understand how this site is used. Nothing is
        stored until you accept.
      </p>
      <div class="consent-actions">
        <button class="consent-btn consent-btn-ghost" @click="decline">Decline</button>
        <button class="consent-btn consent-btn-solid" @click="accept">Accept</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.consent {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 100;
  margin: 0 auto;
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 18px;
  padding: 16px 18px;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 14px;
  box-shadow: var(--shadow-md);
}

.consent-text {
  flex: 1 1 240px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--text-2);
}

.consent-actions {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.consent-btn {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 9px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.consent-btn-ghost {
  background: transparent;
  border-color: var(--border-strong);
  color: var(--text-2);
}
.consent-btn-ghost:hover {
  color: var(--text);
  border-color: var(--text-3);
}

.consent-btn-solid {
  background: var(--accent);
  color: var(--text-on-accent);
}
.consent-btn-solid:hover { background: var(--accent-hover); }
.consent-btn-solid:active { background: var(--accent-press); }

.consent-btn:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 1px;
}

.consent-enter-active,
.consent-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.consent-enter-from,
.consent-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
  .consent-enter-active,
  .consent-leave-active { transition: none; }
}
</style>
