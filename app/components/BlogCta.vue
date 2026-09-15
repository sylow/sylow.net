<script setup lang="ts">
const { calUrl } = useRuntimeConfig().public
</script>

<template>
  <aside class="cta wordy-card">
    <h2 class="cta-head">Have a web idea you want built?</h2>
    <p class="cta-body">
      I take products from idea to shipped — one developer, the whole distance. Every feature has
      a price up front, and you pay when it works.
    </p>
    <div class="cta-actions">
      <NuxtLink class="wordy-btn wordy-btn--primary" to="/#contact">Start a project</NuxtLink>
      <a class="wordy-btn wordy-btn--secondary" :href="calUrl" target="_blank" rel="noopener">
        Book a 30-min call
      </a>
    </div>
  </aside>
</template>

<style scoped>
.cta {
  margin-top: 48px;
  padding: 28px;
}
.cta-head {
  font-size: 1.25rem;
  margin: 0 0 10px;
}
.cta-body {
  line-height: 1.6;
  color: var(--text-2);
  margin: 0 0 18px;
}
.cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
