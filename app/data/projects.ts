export type Era = 'current' | 'recent' | 'earlier'

export const ERA_LABEL: Record<Era, string> = {
  current: 'Current',
  recent: 'Recent',
  earlier: 'Earlier',
}

export type Project = {
  era: Era
  now?: boolean
  feature?: boolean
  client: string
  role: string
  summary: string
  body: string
  link?: string
  stack: string[]
}

// Selected work — newest first. `now` flags current/featured work.
export const PROJECTS: Project[] = [
  {
    era: 'current', now: true, feature: true, client: 'Wordy',
    role: 'Rails 8 + Nuxt 4 · Claude · ElevenLabs',
    summary: 'A calm vocabulary lookup & learning tool, built solo.',
    body: "Designed and built end-to-end. Paste a batch of words and get clean cards — definitions, real examples, synonyms you'd actually use, and natural text-to-speech pronunciation. Rails 8 API with a Nuxt 4 frontend; definitions powered by Claude, text-to-speech audio by ElevenLabs. Proof of what 0-to-100 looks like when I run the whole thing.",
    link: 'https://trywordy.com',
    stack: ['Rails 8', 'Nuxt 4', 'PostgreSQL', 'Claude API', 'ElevenLabs TTS'],
  },
  {
    era: 'current', now: true, feature: true, client: 'YazbirDilekçe',
    role: 'Rails · Claude · PDF export',
    summary: 'AI-powered Turkish petition writer — describe it casually, get a formal letter.',
    body: "An everyday problem turned into a product: Turkish bureaucracy expects a very specific tone and format that almost nobody learns properly. Users describe their situation in plain language — a consumer complaint, a resignation, a municipal issue — and get back a properly formatted official petition with the right address and institutional tone, ready to export as PDF. Claude does the language; the rest is mine.",
    link: 'https://www.yazbirdilekce.com',
    stack: ['Rails', 'Claude API', 'PDF'],
  },
  {
    era: 'current', now: true, client: 'Encrypted client integration',
    role: 'Nuxt 3 + Rails API',
    summary: 'Browser-side encryption layered over a legacy system, via a clean API.',
    body: "A Nuxt 3 client talking to a legacy system through a Rails API I built between them. Sensitive data is encrypted in the browser before transmission, and the backend handles those encrypted payloads cleanly — privacy and integrity without rewriting the system underneath.",
    stack: ['Nuxt 3', 'Rails API', 'Browser encryption'],
  },
  {
    era: 'current', now: true, client: 'Toptal · Legacy Rails rescue',
    role: 'Modernisation',
    summary: 'Untangled micro-services Heroku could no longer build.',
    body: "Heroku had retired the Ruby version this project ran on — and nobody on the team knew the codebase. I upgraded Rails and Ruby, pulled unnecessary micro-services back into the monolith, dropped fragile third-party dependencies, and left it deployable and maintainable for whoever comes next.",
    stack: ['Rails', 'Ruby upgrade', 'Heroku', 'Micro-services'],
  },
  {
    era: 'recent', client: 'Toptal · Education platform',
    role: 'Workflows & stability',
    summary: 'High-schools → universities, so students get a head start.',
    body: "An education-space platform linking high-schools to universities so students can take courses early. I built new workflows and pushed up stability and code quality across the Rails codebase — the kind of steady work that doesn't make headlines but keeps a product on its feet.",
    stack: ['Rails', 'Workflows', 'Refactors'],
  },
  {
    era: 'recent', client: 'Toptal · Frontend migration',
    role: 'Rails & Vue',
    summary: 'Rails 3 → 5, then ExtJS → Vue. Two migrations, one project.',
    body: "First the backend: Rails 3 to Rails 5 — upgrades like these are becoming my speciality. Then the frontend: moving from ExtJS to Vue with Vuetify, one component at a time, without breaking the screens still on the old framework.",
    stack: ['Rails 3 → 5', 'Vue', 'Vuetify', 'Migration'],
  },
  {
    era: 'recent', client: 'Toptal · S3 uploads',
    role: 'Feature build on Rails 3.2',
    summary: 'Shipped S3 attachments for their messaging system.',
    body: "Their senior developer was tied up building a payment system, so I picked up S3 attachment uploads for the messaging product — using DropzoneJS, my go-to for that job. The codebase was on Rails 3.2, which turned out not to be an obstacle.",
    stack: ['Rails 3.2', 'S3', 'DropzoneJS'],
  },
  {
    era: 'recent', client: 'Toptal · Micro-services cleanup',
    role: 'Troubleshooting',
    summary: 'Cleared a JIRA backlog of bugs and time-outs, one by one.',
    body: "Several micro-services on different Rails and Postgres versions, with bugs and time-outs nobody had time to chase. I worked the JIRA board down ticket by ticket — SEO redirects, JavaScript calculation errors, server timeouts — fixed the APIs, and added a few new endpoints along the way.",
    stack: ['Rails', 'PostgreSQL', 'APIs', 'Debugging'],
  },
  {
    era: 'earlier', client: 'ReviewMaiden',
    role: 'Full application build',
    summary: 'Rebuilt the whole app rather than patch an unstable core.',
    body: "They asked for a Google My Business integration. The existing core was unstable, and building on it would have been wasted effort — so I told them straight, and instead rebuilt the web app from scratch with the GMB integration baked in. Final phase was theming work alongside their UI designer.",
    stack: ['Rails', 'GMB API', 'Theming'],
  },
  {
    era: 'earlier', client: '1bid1',
    role: 'Troubleshooter → features',
    summary: 'Brought in to troubleshoot, kept on for payments & invoicing.',
    body: "Hired first as a troubleshooter. They liked the work and kept me on to build the bigger pieces — payment systems for cryptocurrencies and credit cards, generating PDF invoices, and the reminder system around them.",
    stack: ['Rails', 'Payments', 'Crypto', 'PDF'],
  },
  {
    era: 'earlier', client: 'Innovation Factory',
    role: 'Senior web developer',
    summary: 'Rails rebuild on Trailblazer with React widgets and multi-tenancy.',
    body: "Rebuilt the Rails application from scratch on a new architecture (Trailblazer), with React components running as widgets. We added multi-tenancy so one codebase could serve clients like Heineken, Vodafone and PostNL from a single deploy. The company was later acquired by KPMG Netherlands.",
    link: 'https://kpmg.com/nl/',
    stack: ['Rails', 'Trailblazer', 'React', 'Multi-tenancy'],
  },
]

// Strip a URL to its display label (no protocol, no trailing slash).
export function linkLabel(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}
