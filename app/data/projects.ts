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
  // Featured-card badge text. Defaults to 'Now · my product' when unset; set
  // it to e.g. 'In progress · my product' for work that isn't live yet.
  badge?: string
  // Set a slug to publish a dedicated /work/<slug> case-study page for this
  // project. Projects without a slug stay on the homepage timeline only.
  slug?: string
  // Optional richer content, used only on the /work/<slug> case-study page.
  caseStudy?: CaseStudy
}

export type CaseStudy = {
  // Short tagline shown under the title and used as the page meta description.
  tagline: string
  // One line per fact in an at-a-glance panel, e.g. ['Role', 'Solo — design to deploy'].
  facts: Array<[label: string, value: string]>
  // Narrative sections rendered in order. `body` paragraphs split on blank lines.
  // Optional `bullets` render as an unordered list after the body.
  sections: Array<{ heading: string; body: string; bullets?: string[] }>
}

// Selected work — newest first. `now` flags current/featured work.
export const PROJECTS: Project[] = [
  {
    era: 'current', now: true, feature: true, client: 'TryWordy', slug: 'wordy',
    badge: 'Closed beta · my product',
    role: 'Rails 8 + Nuxt 4 · Claude · ElevenLabs · Telegram',
    summary: 'English exam & interview prep for Turkish cabin-crew candidates.',
    body: "Designed and built end-to-end. A structured English-prep platform for Turkish job candidates — launched first for cabin-crew applicants preparing for airline English exams and interviews. A guided study plan chains vocabulary drilling, bilingual readings, interactive dialogs, listening and mock exams into konular you work through, with graded flashcards, spaced repetition and per-word mastery tracking. A Telegram Daily Coach sends review cards graded in-chat, and an AI content pipeline — Claude-generated lessons, stories and test items with ElevenLabs audio — flows through a human review queue before anything goes live. It began as \"Wordy,\" a vocabulary-lookup tool, and pivoted into a profession-focused study product. Currently in invite-only closed beta.",
    link: 'https://trywordy.com',
    stack: ['Rails 8', 'Nuxt 4', 'PostgreSQL', 'Claude API', 'ElevenLabs TTS', 'Telegram Bot API'],
    caseStudy: {
      tagline:
        'An English exam and interview prep platform for Turkish cabin-crew candidates, built solo from design to deploy — Claude generates the lessons, stories and tests, ElevenLabs speaks them, a human review queue guards quality, and a Telegram coach grades daily reviews in-chat.',
      facts: [
        ['Role', 'Solo — product, design, frontend, backend, ops'],
        ['For', 'Turkish cabin-crew candidates · airline English exams & interviews'],
        ['Status', 'Invite-only closed beta · free full-access membership'],
        ['Frontend', 'Nuxt 4 · Vue 3 · TypeScript · Bulma on Vercel'],
        ['Backend', 'Rails 8 API-only · PostgreSQL (ULID) · Solid Queue + Solid Cache'],
        ['AI', 'Claude (schema-forced tool outputs) · ElevenLabs TTS'],
        ['Daily coach', 'Telegram bot · review cards graded in-chat'],
        ['Deploy', 'Kamal 2 to DigitalOcean · managed Postgres · GitHub Actions CI/CD'],
      ],
      sections: [
        {
          heading: 'What it is',
          body:
            "TryWordy is an English-preparation platform for Turkish-speaking job candidates, launched first for cabin-crew applicants preparing for airline English exams and interviews — THY-style sınav formats and mülakat questions. It began life as \"Wordy,\" a general vocabulary-lookup tool, and pivoted into a structured, profession-focused study product.\n\nIt's currently in invite-only closed beta with a free full-access membership. The whole thing is built to feel like a well-made study tool: a clear plan, a dashboard that always tells you where you left off, and one \"Çalış\" button to continue.",
        },
        {
          heading: 'A guided study plan',
          body:
            "Members work through a plan organised as stages → categories → konular (lessons). Each lesson chains Kelimeler → Metin → Diyalog → tests, so vocabulary, reading, dialog and assessment reinforce the same material in sequence. The dashboard always spotlights where you left off, and a one-click continue button drops you back in.\n\nVocabulary drilling uses graded flashcards (Zor / Bildim / Kolay) with per-word audio, spaced repetition and per-word mastery tracking that surfaces the words a member keeps struggling with.",
          bullets: [
            'Bilingual readings — short CEFR-levelled aviation stories that weave in each lesson\'s vocabulary, with tap-any-word dictionary popovers',
            'Interactive dialogs and choice-based dialog tests',
            'Listening questions with server-side TTS, plus cloze and recognition tests',
            'Mock exam papers and LLM-graded written interview answers',
          ],
        },
        {
          heading: 'A daily coach that lives in Telegram',
          body:
            "Coming back to review is the hard part, so members can opt into a Telegram Daily Coach that sends review cards straight to their chat. The whole review happens in-chat — each card is graded right there, and the grade advances that word's spaced-repetition schedule exactly as if it happened in the app.\n\nA Telegram bot can't message someone first, so opting in is a deliberate handshake: the app mints a single-use link token and hands back a deep link; only the verified webhook is ever allowed to bind a chat to an account, and the connection is never exposed to the browser.",
        },
        {
          heading: 'An AI content pipeline with a human gate',
          body:
            "Behind an admin panel is an AI content pipeline that generates the material: Claude drafts dialogs, vocabulary, test items and readings — the story catalog alone spans a weighted set of twenty formats — and everything flows through a human review and approval queue before it can go live. Nothing an LLM writes reaches a member unreviewed.\n\nAround it sit operational dashboards, content-gap digests and audit tooling. The content catalog is treated as source of truth in git: YAML packs of human-approved LLM drafts that are exportable and re-syncable, so the study material is versioned like code.",
        },
        {
          heading: 'The stack',
          body:
            "The frontend is Nuxt 4 (Vue 3, TypeScript) with Bulma and a custom design-token system, light/dark theming, and SSR with per-route SEO control — a module-generated sitemap and JSON-LD structured data — deployed on Vercel.\n\nThe backend is Ruby on Rails 8, API-only, on PostgreSQL with ULID primary keys. Background jobs and cache both run on the database via Solid Queue and Solid Cache — no Redis. Auth is JWT with multi-device sessions and key rotation, with Rack::Attack rate limiting. It deploys with Kamal 2 to a DigitalOcean droplet via GitHub Actions CI/CD, backed by DO Managed Postgres and Spaces (S3-compatible) object storage behind Cloudflare TLS.",
        },
        {
          heading: 'AI and integrations',
          body:
            "The Claude API drives content generation, dictionary lookups and written-answer grading, always through schema-forced tool outputs so every response has a known shape. ElevenLabs provides TTS with per-language voices and cached audio. Resend handles transactional email with bounce and complaint webhooks, and Telegram Bot API powers the coach. Sentry and structured JSON logging cover observability. Stripe subscriptions are wired in but dormant during the free beta.",
        },
        {
          heading: 'Practices worth naming',
          body:
            "A few decisions define how the product is run rather than what it does: the content catalog is git-as-source-of-truth (YAML packs of human-approved LLM drafts, exportable and re-syncable); the suite carries 1,400+ Minitest tests; admin operations run through whitelisted, server-defined tasks instead of production shells; and GDPR export and delete flows are built in.\n\nIt's the same zero-to-one-hundred pattern as my other products: I own the product decisions, the design, both halves of the codebase, and the operational details that decide whether an AI product is sustainable or just a demo.",
        },
      ],
    },
  },
  {
    era: 'current', now: true, feature: true, client: 'YazbirDilekçe', slug: 'yazbirdilekce',
    role: 'Rails · Claude · PDF export',
    summary: 'AI-powered Turkish petition writer — describe it casually, get a formal letter.',
    body: "An everyday problem turned into a product: Turkish bureaucracy expects a very specific tone and format that almost nobody learns properly. Users describe their situation in plain language — a consumer complaint, a resignation, a municipal issue — and get back a properly formatted official petition with the right address and institutional tone, ready to export as PDF. Claude does the language; the rest is mine.",
    link: 'https://www.yazbirdilekce.com',
    stack: ['Rails 8', 'Nuxt 4', 'Claude Haiku 4.5', 'pdfmake', 'docx'],
    caseStudy: {
      tagline:
        'A Turkish petition writer that turns a few plain sentences into a correctly formatted official letter — Claude writes the prose, and a Rails API enforces the bureaucratic form Turkish offices expect.',
      facts: [
        ['Role', 'Solo — product, design, frontend, backend, ops'],
        ['Frontend', 'Nuxt 4 · Vue 3 · TypeScript · Bulma on Vercel'],
        ['Backend', 'Rails 8 API-only · PostgreSQL · Puma'],
        ['AI', 'Claude Haiku 4.5 with strict JSON output'],
        ['Export', 'PDF (pdfmake, embedded fonts) · Word (docx)'],
        ['Deploy', 'Kamal 2 to DigitalOcean · managed Postgres'],
      ],
      sections: [
        {
          heading: 'The problem',
          body:
            "Turkish officialdom expects a very specific register and layout for a \"resmî dilekçe\" — a formal petition — and almost nobody is taught how to write one. People know what they want to say; they don't know how to say it so an institution will take it seriously.\n\nYazbirDilekçe closes that gap. You pick a category — municipal, rent, resignation, consumer complaint, school, objection — describe your situation in everyday Turkish, and get back a respectful, correctly structured petition you can edit, copy, or download.",
        },
        {
          heading: 'Claude writes the prose; the server owns the form',
          body:
            "The language generation runs on Claude Haiku 4.5, but the model deliberately does not get the last word on structure. It returns strict JSON — two to four body paragraphs plus a closing line — and is told never to invent facts, dates, names or addresses, and never to rename the institution the petition is addressed to.\n\nEverything that has a single correct form, the server computes deterministically rather than trusting the model: the date, the addressee block, and the closing salutation (the petition picks the right honorific depending on whether it's addressed to a government body or a private company). The JSON parser is intentionally forgiving — it copes with code fences and stray prose and falls back gracefully — so a slightly off response still produces a usable letter.",
        },
        {
          heading: 'Getting Turkish right',
          body:
            "Turkish has rules that trip up naive code. Uppercasing is locale-sensitive — a lowercase \"i\" must become \"İ\", not \"I\" — so the addressee line is upper-cased with Turkic casing rather than the default. The address block also needs the correct dative suffix grammatically attached to the institution name, which the server adds based on how the name ends.\n\nThe app also tells the user what's missing. When the description lacks a fact the petition needs — a street name, a date, an order number — the model flags it, and a short checklist of documents to attach is suggested per category. The petition is only as good as the facts behind it, and the tool nudges the user toward a complete one.",
        },
        {
          heading: 'Export and the rest of the stack',
          body:
            "The finished petition exports as a print-ready PDF (built with pdfmake, with the display fonts embedded so it looks identical everywhere) or as a Word document (built with docx, referencing system fonts so Turkish characters always render). Anonymous users keep their history in the browser; signed-in users get it stored server-side.\n\nUnder the hood: a Rails 8 API on PostgreSQL, JWT auth, IP-based rate limiting, and a per-user monthly quota plus a hard daily spend ceiling on the AI. Every generation — anonymous or not, success or failure — is logged with a hashed IP (never the raw address), token counts and latency, so cost and abuse can be reviewed without storing anyone's personal data. It ships to DigitalOcean with Kamal 2.",
        },
      ],
    },
  },
  {
    era: 'current', now: true, feature: true, client: 'JobCraftsMan', slug: 'jobcraftsman',
    badge: 'In progress · my product',
    role: 'Rails 8 + Nuxt 4 · Claude · coming soon',
    summary: 'An AI job-search coach — interview practice, cover letters and CV building in one place.',
    body: "In active development: a single tool for the whole job hunt. Practice interviews at the difficulty you choose and get scored, per-question feedback; generate and refine tailored cover letters; build an ATS-friendly CV and score it against a real job description. Claude powers the coaching; a Rails 8 API and a credit ledger keep the cost of all that AI honest. Built solo, launching soon.",
    link: 'https://jobcraftsman.com',
    stack: ['Rails 8', 'Nuxt 4', 'Claude Sonnet 4.6', 'Claude Haiku 4.5', 'Prawn'],
    caseStudy: {
      tagline:
        'An AI coach for the whole job hunt — interview practice, cover letters and CV building in one place. Built solo on Rails 8 and Nuxt 4, launching soon.',
      facts: [
        ['Status', 'In active development — launching soon'],
        ['Role', 'Solo — product, design, frontend, backend, ops'],
        ['Frontend', 'Nuxt 4 · Vue 3 · TypeScript on Vercel'],
        ['Backend', 'Rails 8 API-only · PostgreSQL · Puma'],
        ['AI', 'Claude Sonnet 4.6 (generation) · Haiku 4.5 (refinements)'],
        ['Deploy', 'Kamal 2 to DigitalOcean · managed Postgres'],
      ],
      sections: [
        {
          heading: 'What it does',
          body:
            "JobCraftsMan puts the three things a job seeker actually needs into one tool. You can practice an interview — preset questions at easy, medium or hard, or tailored to a role or a pasted job description — and get a score and specific feedback on each answer. You can write a cover letter and refine it with plain-language instructions. And you can build a CV from a reusable profile, get AI suggestions to sharpen it, and score it against a job description for ATS fit.\n\nIt's aimed at active job seekers — early-career, career changers, returners — and it's English at launch, built to add more languages.",
        },
        {
          heading: 'Two models, picked per job',
          body:
            "The coaching runs on Claude, but not one model for everything. The expensive, high-quality work — generating an interview with model answers, scoring a CV against a job description — uses Sonnet 4.6. The cheaper, high-frequency work — rewriting a cover-letter line, polishing a CV bullet — uses Haiku 4.5. Matching the model to the job is the difference between a tool that's pleasant to use and one that's too expensive to run.\n\nA whole interview — the question list and a strong answer for each — is generated in a single call and stored, so the user can work through it without burning a request per question. Per-answer feedback is then a small, focused call rather than re-sending the entire transcript.",
        },
        {
          heading: 'Credits, not surprises',
          body:
            "AI features cost money on every use, so JobCraftsMan runs on an append-only credit ledger rather than ad-hoc metering. Each paid action — generate an interview, improve a CV, score it against a JD — costs a credit; the balance is always the sum of the ledger, never a counter that can drift. Free accounts start with a few credits; the paid tier tops up monthly.\n\nEvery credit spend is wrapped in a transaction with the AI call, so a failed generation rolls the credit back instead of charging for nothing. A per-user daily spend ceiling sits on top as a hard stop, and an ATS score is cached against a hash of the CV and the job description so re-viewing an unchanged result never costs a second credit.",
        },
        {
          heading: 'The foundations',
          body:
            "Underneath the AI is the unglamorous work that makes a product trustworthy: JWT auth with per-device sessions, email verification before anything can be spent, rate limiting, a full audit log of every meaningful action, GDPR export and soft-delete, and error tracking wired in from the start. Cover letters and CVs render to PDF server-side with Prawn — pure Ruby, no headless browser.\n\nIt deploys to DigitalOcean with Kamal 2 and a managed Postgres instance, with background jobs and caching both running on Postgres rather than a separate Redis. It's the same zero-to-one-hundred pattern as my other products: I own the product decisions, both halves of the code, and the operational details — here, before the public launch rather than after.",
        },
      ],
    },
  },
  {
    era: 'current', now: true, client: 'Canadian healthcare integration',
    role: 'Full-stack · Nuxt 3 + Rails 7 API',
    summary: 'A secure layer for healthcare orgs, built on top of a legacy system.',
    body: "Building a Nuxt 3 client and a Rails 7 API that sit on top of an existing system used by Canadian healthcare organisations. Sensitive fields are encrypted in the browser with the user's private key and only ever leave it as ciphertext — the server stores and routes them but never sees plaintext. Operational data still flows normally where it doesn't need protecting, so the legacy stack underneath keeps working. Live with users; I'm on the small team driving it forward.",
    stack: ['Nuxt 3', 'Rails 7 API', 'Client-side encryption', 'Healthcare'],
  },
  {
    era: 'current', now: true, client: 'Sylow Redesign',
    role: 'Nuxt 4 · Rails 8 API · Vercel · DigitalOcean',
    summary: 'Rebuilt my own site on Nuxt 4, with a small Rails API powering its contact form.',
    body: "Rebuilt sylow.net from scratch on Nuxt 4 with TypeScript and Vercel, then stood up a separate Rails 8 API to receive contact-form submissions from all my web sites. The API stores each submission as a generic JSON document and has spam protection in place. Every real submission pings me on Telegram within a second so I can reply quickly without checking a dashboard. Kamal handles zero-downtime deploys.",
    link: 'https://www.sylow.net',
    stack: ['Nuxt 4', 'Rails 8', 'PostgreSQL', 'Kamal', 'DigitalOcean', 'Vercel', 'Telegram Bot API'],
  },
  {
    era: 'earlier', client: 'Toptal · Legacy Rails rescue',
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

// Projects that have a dedicated case-study page.
export const PUBLISHED_PROJECTS = PROJECTS.filter((p): p is Project & { slug: string } => !!p.slug)

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
