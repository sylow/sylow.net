<script setup lang="ts">
type IconName =
  | 'arrowRight' | 'arrowUpRight' | 'chevronDown' | 'mail'
  | 'sun' | 'moon' | 'wrench' | 'layers' | 'search' | 'compass'
  | 'spark' | 'check' | 'package' | 'bolt' | 'whatsapp' | 'calendar'

const props = withDefaults(defineProps<{ name: IconName; size?: number; sw?: number }>(), {
  size: 18,
  sw: 1.75,
})
</script>

<template>
  <svg
    :width="size" :height="size" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" :stroke-width="sw" stroke-linecap="round" stroke-linejoin="round"
  >
    <template v-if="props.name === 'arrowRight'"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></template>
    <template v-else-if="props.name === 'arrowUpRight'"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></template>
    <template v-else-if="props.name === 'chevronDown'"><path d="M6 9l6 6 6-6" /></template>
    <template v-else-if="props.name === 'mail'"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></template>
    <template v-else-if="props.name === 'sun'"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></template>
    <template v-else-if="props.name === 'moon'"><path d="M21 12.8A8.5 8.5 0 1111.2 3a6.5 6.5 0 109.8 9.8z" /></template>
    <template v-else-if="props.name === 'wrench'"><path d="M14.7 6.3a4 4 0 00-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 005.2-5.4l-2.4 2.4-2.3-.6-.6-2.3 2.3-2.5z" /></template>
    <template v-else-if="props.name === 'layers'"><path d="M12 3l8 4-8 4-8-4 8-4z" /><path d="M4 12l8 4 8-4" /><path d="M4 16.5l8 4 8-4" /></template>
    <template v-else-if="props.name === 'search'"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.2-3.2" /></template>
    <template v-else-if="props.name === 'compass'"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></template>
    <template v-else-if="props.name === 'spark'"><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" /></template>
    <template v-else-if="props.name === 'check'"><path d="M20 6L9 17l-5-5" /></template>
    <template v-else-if="props.name === 'package'"><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></template>
    <template v-else-if="props.name === 'calendar'"><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></template>
    <template v-else-if="props.name === 'bolt'"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></template>
    <template v-else-if="props.name === 'whatsapp'">
      <path d="M4 20l1.3-3.9A7.5 7.5 0 1112 19.5a7.4 7.4 0 01-3.8-1L4 20z" />
      <path d="M9 9.2c.2-.6.4-.6.7-.6h.5c.2 0 .4 0 .6.5l.6 1.4c0 .2 0 .3-.1.5l-.4.5c-.1.1-.2.3 0 .5a5 5 0 002.5 2.1c.2.1.4.1.5 0l.5-.6c.2-.2.3-.1.5-.1l1.4.7c.2.1.3.2.3.3.1.5-.2 1.2-.5 1.4a2.6 2.6 0 01-2.4.4 8 8 0 01-4.6-4.3 3 3 0 01-.6-1.6c0-.7.3-1.1.5-1.3z" fill="currentColor" stroke="none" />
    </template>
  </svg>
</template>
