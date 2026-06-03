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
    era: 'recent', client: 'Razor Scooters',
    role: 'Rails 3 → 6 upgrade · internal apps',
    summary: 'Modernised the internal web apps Razor uses to run its content and documents.',
    body: "Razor runs internal web apps to manage content and documents. I upgraded them from Rails 3 to Rails 6, modernised the PDF document creation pipeline using Prawn, updated the background-job system and added notifications, and refreshed the UI with Bulma — leaving a stack the next developer can actually work in.",
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
    summary: 'Rails rebuild on Trailblazer, with React widgets and multi-tenancy.',
    body: "Hired as a senior developer to build the foundation for the new version of PIT. I migrated the core to a new framework (Trailblazer), with React components running as widgets, and added multi-tenancy so one codebase could serve clients like Heineken, Vodafone and PostNL from a single deploy. Stack ran on Rails and PostgreSQL with AWS, S3, background workers and Elasticsearch underneath. The company was later acquired by KPMG Netherlands.",
    link: 'https://kpmg.com/nl/',
    stack: ['Rails', 'Trailblazer', 'React', 'Multi-tenancy', 'PostgreSQL', 'AWS', 'Elasticsearch'],
  },
  {
    era: 'earlier', client: 'Fitmo',
    role: 'API-first build for trainers & mobile',
    summary: 'Personal trainers, their clients, and the sessions between them.',
    body: "An online platform that connects personal trainers to their clients, lets them create training sessions and track progress. We ran on Heroku with Backbone.js on the responsive frontend, Resque + Redis behind the scenes, and an API powering both the web app and the mobile clients — so the business logic stayed clean of the frontend.",
    link: 'http://fitmo.com',
    stack: ['Rails', 'Backbone.js', 'Heroku', 'Resque', 'Redis', 'API'],
  },
  {
    era: 'earlier', client: 'Pierre Vacances · Center Parcs',
    role: 'Lead developer · booking integration',
    summary: 'Test suite for the web service P&V uses to handle Center Parcs bookings.',
    body: "A migration project where I led the work on a test suite for the web service Pierre & Vacances uses to handle Center Parcs bookings on their own site. Built on Rails 3 with MySQL, with SoapUI scripts complementing the test coverage.",
    stack: ['Rails 3', 'MySQL', 'SoapUI', 'Web services'],
  },
  {
    era: 'earlier', client: 'VisiWeb · Bakker Spees',
    role: 'ASP.NET full-stack',
    summary: 'A web version of a Windows app — kept feeling like the Windows app.',
    body: "Two versions of VisiWeb (1.0 and 2.0). The client already sold a Windows application to his customers and wanted a web version that still felt like the Windows one. Built with ASP.NET (C#) against a web service his team maintained for shared business logic, with heavy XML/XSLT and ExtJS giving the UI its Windows-like feel.",
    link: 'http://www.bakkerspees.nl',
    stack: ['ASP.NET', 'C#', 'XML/XSLT', 'ExtJS'],
  },
]

// Strip a URL to its display label (no protocol, no trailing slash).
export function linkLabel(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}
