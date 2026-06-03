<script setup lang="ts">
import { linkLabel } from '~/data/projects'

const props = defineProps<{ href: string; prefix?: string }>()
const label = computed(() => linkLabel(props.href))
</script>

<template>
  <a class="tl-link" :href="href" target="_blank" rel="noopener">
    {{ prefix ?? 'Visit' }} {{ label }} <AppIcon name="arrowUpRight" :size="14" :sw="2" />
  </a>
</template>
