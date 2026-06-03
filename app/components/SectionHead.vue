<script setup lang="ts">
defineProps<{ num: string; eyebrow: string; lead?: string }>()
</script>

<template>
  <header class="sec-head">
    <div class="sec-head-rule">
      <span class="sec-num">{{ num }}</span>
      <span class="sec-eyebrow">{{ eyebrow }}</span>
    </div>
    <h2 class="sec-title"><slot /></h2>
    <p v-if="lead" class="sec-lead">{{ lead }}</p>
  </header>
</template>
