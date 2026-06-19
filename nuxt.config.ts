export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  future: { compatibilityVersion: 4 },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots'],

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
      script: [
        // Google Consent Mode v2 — deny everything by default. gtag.js loads,
        // but stores no cookies and sends no measurement until the visitor
        // grants consent (see useConsent / CookieConsent.vue). A previously
        // saved 'granted' choice is replayed before config so accepted
        // visitors are measured on first paint.
        {
          innerHTML:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}" +
            "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});" +
            "try{if(localStorage.getItem('sylow-consent')==='granted')gtag('consent','update',{analytics_storage:'granted'});}catch(e){}" +
            "gtag('js',new Date());gtag('config','G-62EX0EKMH1');",
        },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-62EX0EKMH1', async: true },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Instrument Serif', provider: 'google', weights: [400], styles: ['normal', 'italic'] },
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  sitemap: {
    // Homepage + published case studies. Add a `slug` in app/data/projects.ts
    // to publish a /work/<slug> page; mirror it here so it enters the sitemap.
    urls: [
      { loc: '/', changefreq: 'monthly', priority: 1.0 },
      { loc: '/work/wordy', changefreq: 'monthly', priority: 0.8 },
      { loc: '/work/yazbirdilekce', changefreq: 'monthly', priority: 0.8 },
      { loc: '/work/jobcraftsman', changefreq: 'monthly', priority: 0.8 },
    ],
  },

  robots: {
    allow: '/',
    sitemap: 'https://www.sylow.net/sitemap.xml',
  },

  nitro: {
    preset: 'vercel',
  },

  runtimeConfig: {
    public: {
      // Contact form endpoint. Override locally with NUXT_PUBLIC_FORMS_ENDPOINT
      // (e.g. http://localhost:3013/api/v1/forms/sylow.net/contact when
      // running the Rails API on your laptop).
      formsEndpoint: 'https://api.sylow.net/api/v1/forms/sylow.net/contact',
      // Cal.com booking link for the "Book a call" button. Override with
      // NUXT_PUBLIC_CAL_URL. The Cal embed needs just the "<user>/<event>" slug,
      // which is derived from this URL in SiteContact.vue.
      calUrl: 'https://cal.com/gokhan-arli/30min',
    },
  },

  typescript: {
    strict: true,
  },
});
