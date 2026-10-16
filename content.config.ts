import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    // asSitemapCollection registers every published (non-draft) post in
    // sitemap.xml; per-post overrides go in a `sitemap:` frontmatter block.
    blog: defineCollection(
      asSitemapCollection(
        {
          type: 'page',
          source: 'blog/*.md',
          schema: z.object({
            title: z.string(),
            description: z.string(),
            // ISO date (YYYY-MM-DD). Drives ordering and the visible publish date.
            date: z.string(),
            // Who the post is for. Shown on /blog and the post header so a
            // reader knows what to expect; display labels in app/utils/blog.ts.
            category: z.enum(['business', 'development', 'fun']),
            // SEO keywords only (JSON-LD, article:tag) — not rendered.
            tags: z.array(z.string()).optional(),
            // Minutes; computed at build by the content:file:afterParse hook in
            // nuxt.config.ts. Never set it in frontmatter.
            readingTime: z.number().optional(),
            // Social/OG image path under public/ (e.g. /blog/my-slug.png,
            // 1200×630). Falls back to the site-wide /og.png.
            image: z.string().optional(),
            draft: z.boolean().default(false),
          }),
        },
        {
          name: 'blog',
          filter: (entry: { draft?: boolean }) => !entry.draft,
        },
      ),
    ),
  },
})
