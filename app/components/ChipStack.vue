<script setup lang="ts">
withDefaults(defineProps<{ items: string[]; className?: string }>(), {
  className: 'proj-stack',
})
</script>

<template>
  <div :class="className">
    <span v-for="t in items" :key="t" class="wordy-chip wordy-chip--muted">{{ t }}</span>
  </div>
</template>
