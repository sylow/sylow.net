<script setup lang="ts">
import { SKILLS } from '~/data/skills'
</script>

<template>
  <div class="wrap">
    <SectionHead
      eyebrow="Toolbox"
      lead="The stack I reach for. Backend is home; I cross the full stack when a project needs one person who can."
    >
      What I build <em>with.</em>
    </SectionHead>
    <div class="skills-grid">
      <div v-for="s in SKILLS" :key="s.name" class="skill-row">
        <span class="skill-name">{{ s.name }}</span>
        <span class="skill-meta">
          <span class="skill-pips">
            <span
              v-for="n in 4" :key="n"
              class="skill-pip"
              :class="{ on: n <= s.pips }"
            />
          </span>
          <span class="skill-level">{{ s.level }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
