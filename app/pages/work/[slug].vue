<script setup lang="ts">
import { projectBySlug, linkLabel } from '~/data/projects'

const SITE_URL = 'https://www.sylow.net'
const OG_IMAGE = `${SITE_URL}/og.png`

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const project = computed(() => projectBySlug(slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

const p = project.value!
const canonical = `${SITE_URL}/work/${p.slug}`
const title = `${p.client} — case study · Gökhan Arlı (Sylow)`
const metaDescription = p.caseStudy?.tagline ?? p.summary
const paras = (body: string) => body.split('\n\n')

useSeoMeta({
  title,
  description: metaDescription,
  ogType: 'article',
  ogUrl: canonical,
  ogTitle: title,
  ogDescription: metaDescription,
  ogSiteName: 'Sylow — Gökhan Arlı',
  ogLocale: 'en_US',
  ogImage: OG_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: 'Sylow — Gökhan Arlı, freelance engineer & system architect since 2003.',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: metaDescription,
  twitterImage: OG_IMAGE,
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CreativeWork',
            '@id': `${canonical}#work`,
            name: p.client,
            headline: p.summary,
            description: metaDescription,
            url: canonical,
            image: OG_IMAGE,
            keywords: p.stack,
            inLanguage: 'en',
            author: { '@id': `${SITE_URL}/#person` },
            creator: { '@id': `${SITE_URL}/#person` },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/#work` },
              { '@type': 'ListItem', position: 3, name: p.client, item: canonical },
            ],
          },
        ],
      }),
    },
  ],
})

const { dark, toggle } = useTheme()
const onNav = (id: string) => navigateTo(id === 'top' ? '/' : `/#${id}`)
</script>

<template>
  <div>
    <SiteNav :dark="dark" @toggle-theme="toggle" @nav="onNav" />

    <main class="page">
      <article class="wrap case">
        <nav class="crumb" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span class="crumb-sep" aria-hidden="true">/</span>
          <NuxtLink to="/#work">Work</NuxtLink>
          <span class="crumb-sep" aria-hidden="true">/</span>
          <span class="crumb-current">{{ p.client }}</span>
        </nav>

        <header class="case-head">
          <h1 class="case-title">{{ p.client }}</h1>
          <div class="case-role">{{ p.role }}</div>
          <p class="case-summary">{{ p.caseStudy?.tagline ?? p.summary }}</p>
          <ProjLink v-if="p.link" :href="p.link" />
        </header>

        <template v-if="p.caseStudy">
          <dl class="case-facts">
            <div v-for="[label, value] in p.caseStudy.facts" :key="label" class="case-fact">
              <dt>{{ label }}</dt>
              <dd>{{ value }}</dd>
            </div>
          </dl>

          <section v-for="s in p.caseStudy.sections" :key="s.heading" class="case-section">
            <h2>{{ s.heading }}</h2>
            <p v-for="(para, i) in paras(s.body)" :key="i">{{ para }}</p>
          </section>
        </template>

        <p v-else class="case-body">{{ p.body }}</p>

        <h2 class="case-stack-head">Stack</h2>
        <ChipStack :items="p.stack" />

        <p class="case-back">
          <NuxtLink to="/#work">← All selected work</NuxtLink>
        </p>
      </article>
    </main>

    <SiteFooter :dark="dark" @toggle-theme="toggle" @nav="onNav" />
  </div>
</template>

<style scoped>
.case {
  max-width: 760px;
  padding-top: 96px;
  padding-bottom: 64px;
}
.crumb {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-3);
  margin-bottom: 32px;
}
.crumb a {
  color: var(--text-3);
  text-decoration: none;
}
.crumb a:hover {
  color: var(--text);
}
.crumb-sep {
  opacity: 0.5;
}
.crumb-current {
  color: var(--text);
}
.case-head {
  margin-bottom: 28px;
}
.case-title {
  margin: 0 0 8px;
}
.case-role {
  font-family: var(--font-mono, monospace);
  font-size: 0.9rem;
  color: var(--text-2);
  margin-bottom: 16px;
}
.case-summary {
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--text-2);
  margin-bottom: 20px;
}
.case-body {
  line-height: 1.7;
  margin-bottom: 28px;
}
.case-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px 28px;
  margin: 36px 0 8px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--r-md, 10px);
  background: var(--surface-sunk, var(--bg-elev));
}
.case-fact dt {
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 4px;
}
.case-fact dd {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
}
.case-section {
  margin-top: 36px;
}
.case-section h2 {
  font-size: 1.35rem;
  margin: 0 0 12px;
}
.case-section p {
  line-height: 1.7;
  margin: 0 0 14px;
}
.case-stack-head {
  font-size: 1.35rem;
  margin: 40px 0 14px;
}
.case-back {
  margin-top: 40px;
}
.case-back a {
  color: var(--text-3);
  text-decoration: none;
}
.case-back a:hover {
  color: var(--text);
}
</style>
