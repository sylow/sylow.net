<script setup lang="ts">
const SITE_URL = 'https://www.sylow.net'
const OG_IMAGE = `${SITE_URL}/og.png`

const canonical = `${SITE_URL}/blog`
const title = 'Writing · Gökhan Arlı (Sylow)'
const metaDescription =
  'Articles on building and shipping web products with AI-augmented workflows — costs, pricing, and lessons from twenty years of development.'

// Drafts stay visible in dev so they can be previewed, hidden in production.
const { data: posts } = await useAsyncData('blog-index', () => {
  let q = queryCollection('blog').order('date', 'DESC')
  if (!import.meta.dev) q = q.where('draft', '=', false)
  return q.all()
})

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

useSeoMeta({
  title,
  description: metaDescription,
  ogType: 'website',
  ogUrl: canonical,
  ogTitle: title,
  ogDescription: metaDescription,
  ogSiteName: 'Sylow — Gökhan Arlı',
  ogLocale: 'en_US',
  ogImage: OG_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 630,
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
            '@type': 'Blog',
            '@id': `${canonical}#blog`,
            name: 'Writing — Gökhan Arlı',
            description: metaDescription,
            url: canonical,
            inLanguage: 'en',
            author: { '@id': `${SITE_URL}/#person` },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Writing', item: canonical },
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
      <div class="wrap blog-index">
        <header class="blog-head">
          <h1 class="blog-title">Writing</h1>
          <p class="blog-sub">
            Building and shipping web products with AI-augmented workflows — real costs, real
            pricing, real lessons.
          </p>
        </header>

        <ul v-if="posts?.length" class="post-list">
          <li v-for="post in posts" :key="post.path" class="post-item">
            <NuxtLink :to="post.path" class="post-link">
              <time class="post-date" :datetime="post.date">{{ formatDate(post.date) }}</time>
              <h2 class="post-title">
                {{ post.title }}
                <span v-if="post.draft" class="wordy-badge">draft</span>
              </h2>
              <p class="post-desc">{{ post.description }}</p>
            </NuxtLink>
          </li>
        </ul>

        <p v-else class="post-empty">First article is on its way.</p>
      </div>
    </main>

    <SiteFooter :dark="dark" @toggle-theme="toggle" @nav="onNav" />
  </div>
</template>

<style scoped>
.blog-index {
  max-width: 760px;
  padding-top: 96px;
  padding-bottom: 64px;
}
.blog-head {
  margin-bottom: 40px;
}
.blog-title {
  margin: 0 0 10px;
}
.blog-sub {
  font-size: 1.15rem;
  line-height: 1.5;
  color: var(--text-2);
  margin: 0;
}
.post-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.post-item {
  border-top: 1px solid var(--border);
}
.post-item:last-child {
  border-bottom: 1px solid var(--border);
}
.post-link {
  display: block;
  padding: 24px 0;
  text-decoration: none;
  color: inherit;
}
.post-date {
  font-family: var(--font-mono, monospace);
  font-size: 0.8rem;
  color: var(--text-3);
}
.post-title {
  font-size: 1.3rem;
  margin: 6px 0 8px;
  transition: color 0.15s ease;
}
.post-link:hover .post-title {
  color: var(--accent);
}
.post-desc {
  line-height: 1.6;
  color: var(--text-2);
  margin: 0;
}
.post-empty {
  color: var(--text-3);
  border-top: 1px solid var(--border);
  padding-top: 24px;
}
</style>
