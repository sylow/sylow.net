export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  future: { compatibilityVersion: 4 },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots', '@vercel/analytics/nuxt'],

  css: ['~/assets/css/tokens.css', '~/assets/css/components.css', '~/assets/css/site.css'],

  site: {
    url: 'https://www.sylow.net',
    name: 'Sylow — Gökhan Arlı',
    description:
      'I take your project from zero to one hundred. Developer, system architect and troubleshooter for startups — Rails, Vue/Nuxt, APIs. Sylow, since 2003.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      bodyAttrs: { class: 'wordy' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  fonts: {
    families: [
      { name: 'Instrument Serif', provider: 'google', weights: [400], styles: ['normal', 'italic'] },
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  nitro: {
    preset: 'vercel',
  },

  typescript: {
    strict: true,
  },
});
