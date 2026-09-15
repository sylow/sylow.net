---
title: "What an MVP actually costs in 2026"
description: "Eight weeks, $128 a month, and 320 hours of my time. I built a real subscription product with AI and kept the receipts — including my own estimate of what it would have cost the old way."
date: "2026-09-15"
image: /blog/what-an-mvp-actually-costs.png
tags: ["pricing", "clients", "mvp"]
---

Eight weeks. $128 a month in tooling and infrastructure. Roughly 320 hours of my time.

That's what it cost to take TryWordy — a Turkish-language exam-prep product for aviation professionals — from an empty repository to a live open beta with paying-customer infrastructure: Stripe billing, AI-generated study content, spaced repetition, mock exams, a Telegram coach, and an admin console to run it all. I kept building after the doors opened; these numbers are for getting there.

I've been a developer for twenty years. I know what this used to cost. I'm going to show you both numbers, because if you're a founder with an idea, the gap between them is the most useful thing I can tell you.

## What the eight weeks bought

Not a prototype. Not a demo that falls over when a second user signs up. As a founder would list it:

- Accounts: signup, login, email verification, password reset, GDPR export and delete
- AI vocabulary cards in seven native languages, with pronunciation audio
- Seven practice modes with spaced repetition underneath
- A full exam system: question banks, AI mock exams, AI-graded writing
- Study plans and an onboarding readiness assessment
- Stripe subscriptions — checkout, customer portal, upgrades, webhooks
- A Telegram bot that coaches you daily in the chat you already open
- Transactional email with bounce handling
- A public SEO catalog: profession pages, word lists, guides
- An admin console with an AI content pipeline and social automation

Under it: 1,893 backend tests and 218 frontend specs. There is more test code in the repository than application code. That's not a vanity stat — it's the difference between an MVP and a liability.

## The old-way number, from my own hand

On day three of the build I wrote a private page, not linked from anywhere, estimating what this project would cost if a client brought it to me or to an agency. My honest numbers, with twenty years of hourly data behind them:

- Solo senior developer: $45–60K
- Small US boutique shop: $60–110K
- Larger agency: $120–200K

Fair fixed price from a scratch start: somewhere in $55–80K.

Here's the part that still gets me. That estimate priced the product as it existed in the first week. The exam system, the mock exams, the AI grading, the Telegram coach, the SEO catalog, the admin content pipeline — none of it existed yet and none of it was in that number. By the old math, the thing that's live today is well past the top of those bands.

## Where the money actually went

$128 a month while building:

- Claude Code: $100
- Claude API, for manual testing and seeding data: ~$5
- Infrastructure — DigitalOcean droplet, managed Postgres, object storage, Cloudflare: ~$23

Two months of building: call it $250 in total spend. Take Claude out and the entire company runs on about $28 a month. The services that would have been line items on an agency invoice — CI, error tracking, analytics, email — are free at MVP scale in 2026. There were no one-time costs that surprised me. The Stripe integration took longer than the public-facing screens, which nobody ever believes until they build one.

## The real cost

The $250 is not the cost. The cost is the 320 hours, and what they were spent on has inverted.

The hours that used to go into typing code now go into deciding. What to build, in what order, what "done" means, which edge cases matter — the webhook firing twice, the payment succeeding after the response times out. AI made building cheap. It made *knowing what to build* the entire job. Twenty years of shipping products is what those 320 hours were actually made of; the typing was the small part.

That's also why "AI makes it cheap, so anyone can do it" hasn't matched what I see. The floor dropped. The ceiling didn't move.

## What the money doesn't buy

Honesty section. Launch is not the finish line — it's the point where the work changes shape and stays mine. Distribution, iteration, support, watching what real users do and cutting features that looked smart on paper: none of that came with the $128 a month, and the meter keeps running while revenue ramps. Anyone who sells you an MVP as the end of the story is selling you the cheap half.

## What this means if you have an idea

The build is no longer the reason to wait. Eight weeks and a couple hundred dollars in running costs gets you a real product in front of real users — if the hours behind it know where they're going.

That's the part I sell. Every feature has a price, you see it working in days, and you pay when it works. The math above is why that model exists.
