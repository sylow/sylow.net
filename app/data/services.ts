export type Service = {
  num: string
  tag: string
  icon: string
  title: [string, string]
  lead: string
  points: string[]
  tools: string[]
}

export const SERVICES: Service[] = [
  {
    num: '01', tag: '0 → 100', icon: 'spark',
    title: ['A team of ', 'one'],
    lead: "You bring the idea and the deadline — I'm the rest of the team.",
    points: [
      'From your specs to a running product.',
      'Architecture, backend, frontend, and AI where it earns its place.',
      'Hosting set up and the whole thing handed over as one working package.',
    ],
    tools: ['Rails', 'Nuxt', 'PostgreSQL', 'DigitalOcean', 'Amazon SES', 'AI / LLMs'],
  },
  {
    num: '02', tag: 'APIs', icon: 'layers',
    title: ['API-first ', 'backends'],
    lead: 'Where most of my focus goes lately.',
    points: [
      'Business logic and workflows live in a clean API, separate from the visuals.',
      'So I get to think about what the product does, not how it looks.',
      'Web and mobile clients share one honest source of truth — encrypted where it counts.',
    ],
    tools: ['REST', 'Rails API', 'Auth'],
  },
  {
    num: '03', tag: 'Rescue', icon: 'wrench',
    title: ['Legacy ', 'rescue & upgrades'],
    lead: 'A lot of old Rails out there has nobody left who knows it.',
    points: [
      'I upgrade it and untangle needless micro-services.',
      'Drop fragile dependencies and restore what broke.',
      'Left clean and maintainable for the next developer.',
    ],
    tools: ['Rails 3 → 8', 'Migrations', 'Refactors'],
  },
  {
    num: '04', tag: 'Detective', icon: 'search',
    title: ['Architecture & ', 'troubleshooting'],
    lead: 'My favourite role — the detective.',
    points: [
      'Bugs, timeouts, a JIRA board nobody wants? I clear them one by one.',
      'I find the real cause, not just the symptom.',
      "And I'll tell you what you don't want to hear.",
    ],
    tools: ['Debugging', 'Performance', 'Architecture'],
  },
]
