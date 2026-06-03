# sylow.net — v4 (Nuxt 4)

Personal consulting/portfolio site for Gökhan Arlı. Single-page Nuxt 4 app deployed on Vercel.

## Project layout
- This repo (`v4/`) is the **current/active** version. Edit here.
- `../v3/` is the previous production site — a single 1.5MB `index.html` that is actually a self-extracting React bundle (24 base64+gzipped assets loaded at runtime). Not human-editable; do not grep it for content. Kept for reference only.
- `../v2/` is the legacy static site, untouched.

The Vercel project (`sylow.net`, projectId `prj_hPyz4Tt65xZUUOk4YYEb0vrMVd9A`, orgId `team_MjD4GpMWezfdjD4GUfQNFS7e`) is currently linked from `../v3/.vercel/`. To deploy v4, run `vercel link` in this directory and pick the same project, or copy `../v3/.vercel/project.json` into `./.vercel/`.

## Stack
- Nuxt 4 (`future.compatibilityVersion: 4`), Vue 3, TypeScript strict
- Nitro preset: `vercel`
- Modules: `@nuxt/fonts` (Google Fonts: Instrument Serif, Space Grotesk, JetBrains Mono), `@nuxt/image`, `@nuxtjs/sitemap`, `@nuxtjs/robots`
- No `@nuxtjs/seo` umbrella — its `nuxt-og-image` dep doesn't build cleanly on Nuxt 4 yet. Sitemap + robots are wired individually.

## Where things live
- `app/pages/index.vue` — the single page. Composes all sections.
- `app/components/Site*.vue` — page sections (`SiteNav`, `SiteHero`, `SiteServices`, `SiteSkills`, `SiteWork`, `SiteAbout`, `SiteStory`, `SiteWays`, `SiteContact`, `SiteFooter`)
- `app/components/{AppIcon,Wordmark,SectionHead,ChipStack,ProjLink}.vue` — shared primitives
- `app/composables/{useTheme,useReveal,useScrollNav}.ts` — theme toggle, scroll-reveal IntersectionObserver, smooth scroll
- `app/data/{services,skills,projects}.ts` — content. To edit copy, edit these.
- `app/assets/css/{tokens,components,site}.css` — design tokens, primitives, page styles. CSS extracted from v3; `@font-face` blocks stripped (fonts now via `@nuxt/fonts`).

## Content editing
**Project list** is `app/data/projects.ts`. Each entry has `link?: string` for the "Visit" CTA. The visible link label is derived from the href via `linkLabel(url)` — do **not** hardcode the display URL anywhere. (This was a bug in v3 where every project's link said "trywordy.com" regardless of href.)

## Commands
- `npm run dev` — dev server (`localhost:3000`)
- `npm run build` — production build into `.vercel/output/` (ready for `vercel deploy --prebuilt`)
- `npm run typecheck` — vue-tsc
- `npm run generate` — fully static output if desired

## Conventions
- Components are SFCs with `<script setup lang="ts">`. Props/emits typed.
- Contact details in `SiteContact.vue` are intentionally base64-encoded and only assembled on click to avoid scraping. Don't simplify.
- The dark-mode toggle persists to `localStorage` under key `sylow-theme`.
