<script setup lang="ts">
import { PROJECTS } from '~/data/projects'

const SITE_URL = 'https://www.sylow.net'
const OG_IMAGE = `${SITE_URL}/og.png`
const TITLE = 'Freelance engineer & system architect — Gökhan Arlı (Sylow)'
const DESCRIPTION =
  'Hand me your project spec — I build and ship it. Rails, Vue/Nuxt, APIs for startups, taking ideas the rest of the distance.'

useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  ogType: 'website',
  ogUrl: SITE_URL,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  ogSiteName: 'Sylow — Gökhan Arlı',
  ogLocale: 'en_US',
  ogImage: OG_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'Sylow — Gökhan Arlı, freelance engineer & system architect since 2003.',
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE,
  twitterDescription: DESCRIPTION,
  twitterImage: OG_IMAGE,
  twitterImageAlt: 'Sylow — Gökhan Arlı, freelance engineer & system architect since 2003.',
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${SITE_URL}/#person`,
            name: 'Gökhan Arlı',
            alternateName: 'Sylow',
            url: SITE_URL,
            image: OG_IMAGE,
            jobTitle: 'Freelance engineer & system architect',
            description: DESCRIPTION,
            knowsAbout: ['Ruby on Rails', 'Vue.js', 'Nuxt', 'API design', 'System architecture', 'Startup engineering'],
            sameAs: [
              'https://github.com/sylow',
              'https://www.linkedin.com/in/gokhanarli/',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'Sylow — Gökhan Arlı',
            description: DESCRIPTION,
            inLanguage: 'en',
            publisher: { '@id': `${SITE_URL}/#person` },
          },
        ],
      }),
    },
  ],
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
