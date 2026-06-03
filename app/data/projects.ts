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
    era: 'current', now: true, client: 'Canadian healthcare integration',
    role: 'Full-stack · Nuxt 3 + Rails 7 API',
    summary: 'A secure layer for healthcare orgs, built on top of a legacy system.',
    body: "Building a Nuxt 3 client and a Rails 7 API that sit on top of an existing system used by Canadian healthcare organisations. Sensitive fields are encrypted in the browser with the user's private key and only ever leave it as ciphertext — the server stores and routes them but never sees plaintext. Operational data still flows normally where it doesn't need protecting, so the legacy stack underneath keeps working. Live with users; I'm on the small team driving it forward.",
    stack: ['Nuxt 3', 'Rails 7 API', 'Client-side encryption', 'Healthcare'],
  },
  {
    era: 'current', now: true, client: 'Toptal · Legacy Rails rescue',
    role: 'Modernisation · Rails & Ruby upgrade',
    summary: "Heroku stopped building it, and nobody on the team knew the code.",
    body: "A classic legacy-rescue: Heroku had retired the Ruby version this project ran on, the original team had moved on, and the codebase wasn't deployable any more. I brought Rails and Ruby up to current, pulled unnecessary micro-services back into the monolith where they belonged, and dropped the fragile third-party dependencies that were doing more harm than good. Left it deployable, readable, and maintainable for whoever comes next.",
    stack: ['Rails', 'Ruby upgrade', 'Heroku', 'Micro-services', 'Refactors'],
  },
  {
    era: 'recent', client: 'Razor Scooters',
    role: 'Rails 3 → 6 upgrade · internal apps',
    summary: 'Brought the internal apps Razor runs on into the current decade.',
    body: "Razor's content and document workflows ran on internal Rails apps stuck on version 3. I took them to Rails 6, rebuilt the PDF document pipeline with Prawn, modernised the background-job layer and added the notifications that should have been there all along, and refreshed the UI with Bulma. The result is a stack the next developer can actually open, read, and ship from.",
    link: 'https://www.razor.com',
    stack: ['Rails 3 → 6', 'Prawn', 'Background jobs', 'Bulma'],
  },
  {
    era: 'recent', client: 'Surface Studio',
    role: 'Legacy Rails maintenance',
    summary: 'Picked up an existing Rails app and tightened its weak points.',
    body: "Came on board to maintain an existing Rails application. The work was specific and useful: refresh how PDF invoices were generated, update their Elasticsearch plugin to behave the way they expected, and build an anomaly alert system so the owners knew when something was off before a customer told them.",
    link: 'https://www.surfacestudio.com',
    stack: ['Rails', 'PDF', 'Elasticsearch', 'Alerting'],
  },
  {
    era: 'recent', client: 'Toptal · US education platform',
    role: 'Rails 3.2 → 5 upgrade · custom workflows',
    summary: 'A one-month upgrade that turned into a long-term build.',
    body: "A SaaS bridging US high-schools and universities so students can take courses early. I was brought in for a Rails 3.2 → 5 upgrade — meant to last a month. They liked the work and kept me on to build custom code for new clients whose needs didn't fit the platform's automation around sign-up, course registration, reporting and invoicing.",
    stack: ['Rails 3.2 → 5', 'Workflows', 'Custom client code'],
  },
  {
    era: 'recent', client: 'Toptal · Frontend migration',
    role: 'Rails & Vue',
    summary: 'Rails 3 → 5, then ExtJS → Vue. Two migrations, one project.',
    body: "First the backend: Rails 3 to Rails 5 — upgrades like these are becoming my speciality. Then the frontend: moving from ExtJS to Vue with Vuetify, one component at a time, without breaking the screens still on the old framework.",
    stack: ['Rails 3 → 5', 'Vue', 'Vuetify', 'Migration'],
  },
  {
    era: 'recent', client: 'AroundYou (via Toptal)',
    role: 'Troubleshooting across micro-services',
    summary: 'Cleared a JIRA backlog of bugs and time-outs, one by one.',
    body: "Several micro-services on different Rails and Postgres versions, with bugs and time-outs nobody had time to chase. I worked the JIRA board down ticket by ticket — SEO redirects, JavaScript calculation errors, server timeouts — fixed the APIs, and added a few new endpoints along the way.",
    stack: ['Rails', 'PostgreSQL', 'APIs', 'Debugging'],
  },
  {
    era: 'earlier', client: 'Innovation Factory · KPMG',
    role: 'Senior developer · base architecture',
    summary: 'Built the foundation for a multi-tenant platform serving Heineken, Vodafone, PostNL.',
    body: "Hired as a senior developer to lay the foundation for the next version of the platform. I rebuilt the core on Trailblazer, ran React components as widgets across the UI, and added multi-tenancy so one codebase could serve clients like Heineken, Vodafone and PostNL from a single deploy. Underneath: Rails and PostgreSQL with AWS, S3, background workers and Elasticsearch. The company was later acquired by KPMG Netherlands.",
    link: 'https://kpmg.com/nl/',
    stack: ['Rails', 'Trailblazer', 'React', 'Multi-tenancy', 'PostgreSQL', 'AWS', 'Elasticsearch'],
  },
  {
    era: 'earlier', client: 'Fitmo',
    role: 'API-first platform for trainers and mobile',
    summary: 'Personal trainers, their clients, and the sessions between them.',
    body: "A platform that connects personal trainers to their clients — sessions planned together, tracked over time, and accessed from either the web app or mobile. I built it as API-first from the start so the business logic stayed honest and shared, instead of getting smeared across two clients. Rails on Heroku, Backbone.js on the responsive frontend, Resque and Redis behind the scenes.",
    link: 'http://fitmo.com',
    stack: ['Rails', 'Backbone.js', 'Heroku', 'Resque', 'Redis', 'API-first'],
  },
  {
    era: 'earlier', client: 'Pierre Vacances · Center Parcs',
    role: 'Lead developer · booking integration',
    summary: 'Test suite for the web service that handles Center Parcs bookings on the P&V site.',
    body: "A migration project: Pierre & Vacances wanted to sell Center Parcs stays through their own booking flow, which meant a web service had to broker between the two systems reliably. I led the work on the test suite — Rails 3 with MySQL, plus SoapUI scripts for the integration cases — so the team had something to trust before each release.",
    stack: ['Rails 3', 'MySQL', 'SoapUI', 'Web services', 'Test suite'],
  },
  {
    era: 'earlier', client: 'VisiWeb · Bakker Spees',
    role: 'ASP.NET full-stack',
    summary: 'A web version of a Windows app — that still felt like a Windows app.',
    body: "The client already sold a Windows application to his customers and didn't want the web version to break the habit. Built with ASP.NET (C#) against a web service his team maintained, so the same business logic backed both the desktop and the browser. Heavy XML/XSLT in the pipeline; ExtJS up front gave the UI its Windows-like feel. I worked on both VisiWeb 1.0 and 2.0.",
    link: 'http://www.bakkerspees.nl',
    stack: ['ASP.NET', 'C#', 'XML/XSLT', 'ExtJS'],
  },
]

// Strip a URL to its display label (no protocol, no trailing slash).
export function linkLabel(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}
