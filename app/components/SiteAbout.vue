<script setup lang="ts">
const fun: Array<{ name: string; note: string }> = [
  { name: 'Family / Friends', note: 'My heart' },
  { name: 'Pickleball', note: 'Obsession' },
  { name: 'Swimming', note: 'Mental health' },
  { name: 'Camping', note: 'Grounding' },
]
</script>

<template>
  <div class="wrap">
    <SectionHead eyebrow="About me">
      One person, whole project — or the <em>fix</em> when it breaks.
    </SectionHead>
    <div class="about-grid">
      <div class="about-prose">
        <p>
          I'm happiest building what a client dreams up — turning an idea into something that
          ships. When things break, I like the second role too: tracking down what's really
          wrong makes me feel like a <em>detective.</em>
        </p>
        <p>
          I do my best work on projects with passionate teams that meet daily and talk openly.
          My speciality is startups that want one technical person who speaks their language
          and isn't afraid to be honest with them.
        </p>
        <p>
          I'm grateful that remote work lets me move between Türkiye, the Netherlands and
          Thailand — and still ship with teams anywhere.
        </p>
      </div>
      <aside class="about-side">
        <div class="about-card">
          <div class="about-card-label">On the move</div>
          <div class="places">
            <div class="place"><span class="place-name">Türkiye</span><span class="place-note">Origin</span></div>
            <div class="place"><span class="place-name">Netherlands</span><span class="place-note">Career</span></div>
            <div class="place"><span class="place-name">Thailand</span><span class="place-note">Home</span></div>
          </div>
        </div>
        <div class="about-card">
          <div class="about-card-label">Away from the keyboard</div>
          <div class="places">
            <div v-for="f in fun" :key="f.name" class="place">
              <span class="place-name">{{ f.name }}</span>
              <span class="place-note">{{ f.note }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
