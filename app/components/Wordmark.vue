<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: number }>(), { size: 18 })
const dotSize = computed(() => props.size * 0.28)
const dotShift = computed(() => -props.size * 0.46)
</script>

<template>
  <span class="wm">
    <span class="wm-text" :style="{ fontSize: `${size}px` }">SYLOW</span>
    <span
      class="wm-dot"
      :style="{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        transform: `translateY(${dotShift}px)`,
      }"
    />
  </span>
</template>
