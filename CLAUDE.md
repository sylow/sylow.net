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

## Case-study pages (`/work/<slug>`)
Each project can have its own server-rendered SEO landing page at `/work/<slug>`. This is opt-in per project, for intent-specific search coverage — do **not** publish a page for every project (thin pages hurt ranking).

- **Route:** `app/pages/work/[slug].vue` (file-based dynamic route). Looks up the project via `projectBySlug()`; unknown slugs `throw createError(404)`.
- **Opt-in:** a project is published only when it has a `slug?: string` in `app/data/projects.ts`. `PUBLISHED_PROJECTS` / `projectBySlug()` helpers live in the same file.
- **Rich content (optional):** the `caseStudy?: CaseStudy` field (`tagline`, `facts`, ordered `sections`) drives a facts panel + `<h2>` narrative sections. Without it the page falls back to the plain `body`. The homepage timeline (`SiteWork.vue`) reads only `body`/`summary`/`stack`, so adding a `caseStudy` never affects the homepage.
- **Per-page SEO:** unique title/description/canonical, `og:type=article`, plus JSON-LD (`CreativeWork` with `author`/`creator` → the site's `#person` `@id`, and a `BreadcrumbList`).
- **Sitemap:** each published page must be mirrored manually in the `sitemap.urls` array in `nuxt.config.ts` (the sitemap config runs in nitro context and can't import `app/data` cleanly). To publish: add a `slug`, add a `caseStudy` (optional), add the `/work/<slug>` line to the sitemap.

### Published / planned case studies
All three case studies are **published**. Each copy is grounded in the actual source repo (Rails API in `backend/`, Nuxt in `frontend/`, plus a rich `CLAUDE.md` in each) — re-verify against that codebase before editing any technical claim.
- **Wordy** (`slug: 'wordy'`, live at trywordy.com) — solo Rails 8 + Nuxt 4 vocabulary tool; Claude Sonnet 4.5 (tool-use JSON, prompt caching), ElevenLabs TTS, Stripe, JWT, Kamal 2 → DigitalOcean. Source: `../../wordy`.
- **YazbirDilekçe** (`slug: 'yazbirdilekce'`, live at yazbirdilekce.com) — Turkish petition writer; Claude Haiku 4.5 with strict JSON output, server-side Turkish formatting (Turkic uppercase + dative suffixes), PDF via pdfmake + Word via docx, hashed-IP audit trail. Source: `../../dilekce`.
- **JobsCraftman** (`slug: 'jobscraftman'`, **not yet live** — case study is framed as "coming soon", so the entry has no `link`) — AI job-search coach (interview practice, cover letters, CV/ATS); Claude Sonnet 4.6 + Haiku 4.5, append-only credit ledger, Prawn PDFs, Kamal 2 → DigitalOcean. Stripe is scaffolded but not yet wired — do not claim billing is live. Source: `../../jobscraftman`.

## Commands
- `npm run dev` — dev server (`localhost:3000`)
- `npm run build` — production build into `.vercel/output/` (ready for `vercel deploy --prebuilt`)
- `npm run typecheck` — vue-tsc
- `npm run generate` — fully static output if desired

## Conventions
- Components are SFCs with `<script setup lang="ts">`. Props/emits typed.
- Contact details in `SiteContact.vue` are intentionally base64-encoded and only assembled on click to avoid scraping. Don't simplify.
- The dark-mode toggle persists to `localStorage` under key `sylow-theme`.
