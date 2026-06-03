<script setup lang="ts">
import { PROJECTS } from '~/data/projects'

useSeoMeta({
  title: 'Sylow — Gökhan Arlı · Independent engineer & architect',
  description:
    'I take your project from zero to one hundred. Developer, system architect and troubleshooter for startups — Rails, Vue/Nuxt, APIs. Sylow, since 2003.',
  ogImage: 'https://sylow.net/og.png',
})

const { dark, toggle } = useTheme()
useReveal()
const onNav = (id: string) => scrollToId(id)
</script>

<template>
  <div>
    <SiteNav :dark="dark" @toggle-theme="toggle" @nav="onNav" />

    <main class="page" id="top">
      <div class="wrap">
        <SiteHero @nav="onNav" />
      </div>

      <section class="section reveal" id="services" style="scroll-margin-top: 72px;">
        <SiteServices />
      </section>

      <section class="section reveal" id="work" style="scroll-margin-top: 72px;">
        <div class="wrap">
          <SectionHead
            num="02"
            eyebrow="Selected work"
            lead="Twenty years of taking projects the rest of the distance — my own product, startup builds, and a lot of Rails brought back to life."
          >
            Things I've <em>shipped.</em>
          </SectionHead>
          <div class="work-toolbar">
            <span class="work-count">{{ PROJECTS.length }} selected projects · 2003 — now</span>
          </div>
          <SiteWork />
        </div>
      </section>

      <section class="section reveal" id="skills" style="scroll-margin-top: 72px;">
        <SiteSkills />
      </section>

      <section class="section reveal" id="ways" style="scroll-margin-top: 72px;">
        <SiteWays />
      </section>

      <section class="section reveal" id="about" style="scroll-margin-top: 72px;">
        <SiteAbout />
      </section>

      <section class="section reveal" id="contact" style="scroll-margin-top: 72px;">
        <SiteContact />
      </section>
    </main>

    <SiteFooter :dark="dark" @toggle-theme="toggle" @nav="onNav" />
  </div>
</template>
