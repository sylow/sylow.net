---
title: "Pay by feature, not by hour"
description: "After twenty years of hourly billing, I dropped the hour. A feature has a price, you pay when it works — and the same price now buys tests, documentation, a real UI, and delivery in days."
date: "2026-09-10"
tags: ["pricing", "clients"]
---

That's the whole model. A feature has a price. You pay it when the feature works. In between, you see it grow in iterations and you change it as you go.

I charged by the hour for twenty years. It was fine while a feature took weeks of hours. Now it takes days, and charging for time makes no sense in either direction: I earn less for the same work, or I ask for a rate no one signs. So I dropped the hour. The feature costs what it always cost. What changed is what that price buys, and that I'm now paid for delivering the feature you want, not for the time I spent near it.

## What an hour actually bought

Everything in it, including the parts nobody wanted to pay for. My bugs. My second attempt. The tests that got cut because "we'll add them later." The documentation that became a Slack thread. A UI that worked and looked like a backend developer built it. All of it was in the hours, and the hours were on the invoice. Clients didn't complain, because they couldn't see it.

## How it works

**Spec.** We list the features. Before anything is priced, I ask questions until neither of us has any left. No spec, no price. This is where most of the human work now lives: deciding what to build and why is still slow and still mine. Building it got fast.

**Price.** Each feature gets a fixed price and a delivery date. The price is what it would have cost in hours before. I have twenty years of that data. I don't price on your revenue or your business case; I price the feature, at what it always cost.

**Iterate.** A feature is built in iterations. You see the first one in days, react, and the next one is cut from what you learned. Change it, shrink it, drop it. Nothing is wasted because nothing is built blind.

**Pay.** When the feature works on staging and you've clicked through it. Nobody argues about an invoice for something they used yesterday.

**Warranty.** I fix my own mistakes for free for 20% of the project length after delivery, minimum two weeks.

**Maintenance.** Once live, a flat monthly fee covers upkeep, small changes, and support.

## What the same price now includes

**Delivery in days.** The first working iteration lands in the first week, not the first month. Yes, I use AI heavily; that's how iterations arrive in days. It isn't free, and its monthly cost is in the price, not on the invoice.

**Tests and documentation.** They used to be the first things cut to save time. Now they're not line items.

**Fewer bugs.** Before, one pair of tired eyes checked the code: mine, at the end of the day. Now a planner, a coder, a separate test writer, and a reviewer all go before I read the final diff. In [an earlier article](/blog/ai-agent-over-junior-developer) I planted ten bugs in a live codebase to test that review. It found every one that would have cost money or leaked data.

**A UI you'd actually ship.** I've been full-stack for two decades, but never a front-end designer. That's no longer a limit. The frontend is included, not quoted separately.

**Cheap pivots.** Changing direction after a three-month build cost three months of hours. Now it costs one iteration. The client reacts to something real in week one, and wrong features die before they're built.

## On a real project

Illustrative, but the shape is right. A subscription product: onboarding, billing, dashboard, core workflows, admin tools. Twenty features. By the hour, a four-month build with the first real screen around month two.

By feature, onboarding and billing are demoed in week one. In week two the client uses the dashboard and sees two workflows don't match how their customers work; they're replaced before they're built. Two admin features are dropped because the dashboard already covers them. Sixteen features ship in six weeks, tested and documented, and the product takes its first payment a quarter earlier.

Each feature cost the same. The product cost less. It was live months sooner.

## "If it takes you a day, why am I paying for a week of hours?"

Because you're paying for the feature, and it's the same feature. What you've stopped paying for is my bugs, my untested code, my ugly UI, and a feedback loop so slow you learned you were wrong in month three.

And there's a second answer. You see progress in days, it works, and it looks right. That makes you happy, and a happy client is what keeps a developer going. I'm a developer, not a machine. When a screen took three weeks and still looked wrong, it wore me down, and every change request became a small fight about hours and money. Now a change request is the cheapest way to make a client happy, and I want to take it. That changes how a project feels on both sides, and you couldn't buy it by the hour at any price.

## Who this is for

Clients building something they need to get right, who want to see it early and change their mind cheaply. Not "build exactly what's in this PDF and invoice me," and not "AI does the work, so give me a discount." There are cheaper ways to get that now, and they'll keep getting cheaper. I'm not competing there. Speed is what you get for the price. It's not a reason to lower it.
