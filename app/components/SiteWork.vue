<script setup lang="ts">
import { PROJECTS, ERA_LABEL, linkLabel } from '~/data/projects'
</script>

<template>
  <div class="tl">
    <div
      v-for="(p, i) in PROJECTS"
      :key="i"
      class="tl-item"
      :class="{ 'tl-item--now': p.now, 'tl-item--feature': p.feature }"
    >
      <article v-if="p.feature" class="tl-feature">
        <div class="tl-feature-glow" />
        <div class="tl-feature-top">
          <span class="tagline-now">{{ p.badge ?? 'Now · my product' }}</span>
          <a v-if="p.link" class="tl-feature-visit" :href="p.link" target="_blank" rel="noopener">
            {{ linkLabel(p.link) }} <AppIcon name="arrowUpRight" :size="14" :sw="2" />
          </a>
        </div>
        <h3 class="tl-feature-client">{{ p.client }}</h3>
        <div class="tl-feature-role">{{ p.role }}</div>
        <p class="tl-feature-body">{{ p.body }}</p>
        <ChipStack :items="p.stack" />
      </article>
      <template v-else>
        <div class="tl-year">{{ ERA_LABEL[p.era] }}</div>
        <div class="tl-head">
          <span class="tl-client">{{ p.client }}</span>
          <span class="tl-role">{{ p.role }}</span>
        </div>
        <p class="tl-body">{{ p.body }}</p>
        <ProjLink v-if="p.link" :href="p.link" />
        <ChipStack :items="p.stack" />
      </template>
    </div>
  </div>
</template>
