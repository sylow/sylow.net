<script setup lang="ts">
const fun = ['Pickleball', 'Swimming', 'Bridge', 'Hiking', 'Thailand']
</script>

<template>
  <div class="wrap">
    <SectionHead num="05" eyebrow="About me">
      A developer who likes playing <em>detective.</em>
    </SectionHead>
    <div class="about-grid">
      <div class="about-prose">
        <p>
          I'm a developer, system architect and troubleshooter — and it's the last role I
          love most. Tracking down what's really wrong makes me feel like a <em>detective.</em>
        </p>
        <p>
          I do my best work on projects with passionate teams that meet daily and talk openly.
          My speciality is startups that want one technical person who speaks their language
          and isn't afraid to be honest with them.
        </p>
        <p>
          I'm grateful that remote work lets me live between Thailand, the Netherlands and
          Türkiye — and still ship with teams anywhere.
        </p>
      </div>
      <aside class="about-side">
        <div class="about-card">
          <div class="about-card-label">Based between</div>
          <div class="places">
            <div class="place"><span class="place-name">Thailand</span><span class="place-note">Base</span></div>
            <div class="place"><span class="place-name">Netherlands</span><span class="place-note">Roots</span></div>
            <div class="place"><span class="place-name">Türkiye</span><span class="place-note">Home</span></div>
          </div>
        </div>
        <div class="about-card">
          <div class="about-card-label">Away from the keyboard</div>
          <div class="fun-chips">
            <span v-for="f in fun" :key="f" class="fun-chip">
              <span class="fun-chip-dot" />{{ f }}
            </span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
