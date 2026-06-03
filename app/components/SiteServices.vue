<script setup lang="ts">
import { SERVICES } from '~/data/services'
</script>

<template>
  <div class="wrap">
    <SectionHead num="01" eyebrow="What I do">
      Four ways I earn my keep on a <em>team.</em>
    </SectionHead>
    <div class="svc-grid">
      <article v-for="s in SERVICES" :key="s.num" class="svc">
        <div class="svc-glow" />
        <div class="svc-top">
          <span class="svc-icon"><AppIcon :name="s.icon as any" :size="20" /></span>
          <span class="svc-tag">{{ s.tag }}</span>
        </div>
        <h3 class="svc-title">{{ s.title[0] }}<em>{{ s.title[1] }}</em></h3>
        <p class="svc-lead">{{ s.lead }}</p>
        <ul class="svc-points">
          <li v-for="pt in s.points" :key="pt" class="svc-point">{{ pt }}</li>
        </ul>
        <div class="svc-foot">
          <ChipStack :items="s.tools" class-name="svc-tools" />
        </div>
      </article>
    </div>
  </div>
</template>
