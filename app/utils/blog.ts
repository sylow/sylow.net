// Display labels for the blog `category` frontmatter field (see content.config.ts).
export const BLOG_CATEGORY_LABELS = {
  business: 'For founders',
  development: 'For developers',
  fun: 'For fun',
} as const

export type BlogCategory = keyof typeof BLOG_CATEGORY_LABELS
