<script setup lang="ts">
const SITE_URL = 'https://www.sylow.net'
const OG_IMAGE = `${SITE_URL}/og.png`

const route = useRoute()
const path = computed(() => `/blog/${String(route.params.slug)}`)

const { data: post } = await useAsyncData(`blog-${path.value}`, () =>
  queryCollection('blog').path(path.value).first(),
)

// Drafts are previewable in dev, 404 in production.
if (!post.value || (post.value.draft && !import.meta.dev)) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const p = post.value!
const canonical = `${SITE_URL}${p.path}`
const title = `${p.title} · Gökhan Arlı (Sylow)`
const ogImage = p.image ? `${SITE_URL}${p.image}` : OG_IMAGE

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

useSeoMeta({
  title,
  description: p.description,
  ogType: 'article',
  ogUrl: canonical,
  ogTitle: title,
  ogDescription: p.description,
  ogSiteName: 'Sylow — Gökhan Arlı',
  ogLocale: 'en_US',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: p.description,
  twitterImage: ogImage,
  articlePublishedTime: p.date,
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
            '@type': 'BlogPosting',
            '@id': `${canonical}#post`,
            headline: p.title,
            description: p.description,
            url: canonical,
            image: ogImage,
            datePublished: p.date,
            keywords: p.tags,
            inLanguage: 'en',
            author: { '@id': `${SITE_URL}/#person` },
            publisher: { '@id': `${SITE_URL}/#person` },
            mainEntityOfPage: canonical,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Writing', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: p.title, item: canonical },
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
      <article class="wrap post">
        <nav class="crumb" aria-label="Breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span class="crumb-sep" aria-hidden="true">/</span>
          <NuxtLink to="/blog">Writing</NuxtLink>
          <span class="crumb-sep" aria-hidden="true">/</span>
          <span class="crumb-current">{{ p.title }}</span>
        </nav>

        <header class="post-head">
          <time class="post-date" :datetime="p.date">{{ formatDate(p.date) }}</time>
          <h1 class="post-title">
            {{ p.title }}
            <span v-if="p.draft" class="wordy-badge">draft</span>
          </h1>
          <p class="post-lede">{{ p.description }}</p>
        </header>

        <img v-if="p.image" :src="p.image" :alt="p.title" class="post-cover" width="1280" height="720" />

        <ContentRenderer :value="p" class="post-body" />

        <BlogCta />

        <p class="post-back">
          <NuxtLink to="/blog">← All writing</NuxtLink>
        </p>
      </article>
    </main>

    <SiteFooter :dark="dark" @toggle-theme="toggle" @nav="onNav" />
  </div>
</template>

<style>
/* Shiki emits dark-theme variables gated on `html.dark`; this site toggles
   `data-theme="dark"` instead, so mirror the mapping here (unscoped). */
[data-theme='dark'] .post-body .shiki,
[data-theme='dark'] .post-body .shiki span {
  color: var(--shiki-dark);
  background-color: transparent;
  font-style: var(--shiki-dark-font-style);
  font-weight: var(--shiki-dark-font-weight);
}
</style>

<style scoped>
.post {
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-head {
  margin-bottom: 32px;
}
.post-date {
  font-family: var(--font-mono, monospace);
  font-size: 0.85rem;
  color: var(--text-3);
}
.post-title {
  margin: 8px 0 12px;
}
.post-lede {
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--text-2);
  margin: 0;
}

.post-cover {
  width: 100%;
  height: auto;
  border: 1px solid var(--border);
  border-radius: var(--r-md, 10px);
  margin-bottom: 32px;
}

/* Prose — rendered markdown lands here via ContentRenderer. */
.post-body {
  line-height: 1.7;
}
.post-body :deep(h2) {
  font-size: 1.35rem;
  margin: 36px 0 12px;
}
.post-body :deep(h3) {
  font-size: 1.1rem;
  margin: 28px 0 10px;
}
.post-body :deep(p) {
  margin: 0 0 16px;
}
.post-body :deep(a) {
  color: var(--accent);
}
.post-body :deep(ul),
.post-body :deep(ol) {
  margin: 0 0 16px;
  padding-left: 1.3em;
}
.post-body :deep(li) {
  margin-bottom: 6px;
}
.post-body :deep(blockquote) {
  margin: 20px 0;
  padding: 4px 0 4px 18px;
  border-left: 3px solid var(--accent-soft);
  color: var(--text-2);
}
.post-body :deep(blockquote p:last-child) {
  margin-bottom: 0;
}
.post-body :deep(code) {
  font-family: var(--font-mono, monospace);
  font-size: 0.88em;
  background: var(--surface-sunk, var(--bg-elev));
  border: 1px solid var(--border);
  border-radius: var(--r-sm, 6px);
  padding: 0.1em 0.35em;
}
.post-body :deep(pre) {
  margin: 20px 0;
  padding: 18px 20px;
  background: var(--surface-sunk, var(--bg-elev));
  border: 1px solid var(--border);
  border-radius: var(--r-md, 10px);
  overflow-x: auto;
}
.post-body :deep(pre code) {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.85rem;
  line-height: 1.6;
}
.post-body :deep(img) {
  max-width: 100%;
  border-radius: var(--r-md, 10px);
}
.post-body :deep(hr) {
  border: none;
  border-top: 1px solid var(--border);
  margin: 32px 0;
}

.post-back {
  margin-top: 40px;
}
.post-back a {
  color: var(--text-3);
  text-decoration: none;
}
.post-back a:hover {
  color: var(--text);
}
</style>
