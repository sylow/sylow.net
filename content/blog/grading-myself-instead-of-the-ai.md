---
title: "I graded myself instead of the AI for a week"
description: "I spent a week grading my own delegation instead of blaming the model. The AI passed. I didn't — and it changed how I write every request."
date: "2026-09-15"
tags: ["ai-workflow"]
---

I spent a week testing myself with AI.

The AI passed. I didn't.

Like a lot of us, I'd quietly blamed the model whenever AI-assisted coding went sideways. Wrong output? Bad model. Weird refactor? Bad model. So I ran an experiment: mock work sessions where I had to drive an agent through realistic tasks, and afterwards I graded myself. Not the AI. Me.

How clearly did I delegate? How precise were my instructions? Did I actually define what "done" meant? Did I verify the result properly?

My first scores were humbling.

## The drill that broke me

It was deceptively simple. Before every task, I had to write the request out in full: what I want, what already exists, what must not be touched, how we'll know it's done, and what the first step is.

Sounds trivial. I'm a developer. Describing tasks is what I do.

Except it wasn't.

Here's an actual acceptance criterion I wrote for rate-limiting a login endpoint. The ticket said: "Five attempts per minute per IP."

I wrote: "User cannot attempt more than 5 times in a minute."

One word. "User."

Per-user and per-IP are completely different features. Different tracking key, different storage, and, critically, different security implications. A per-user limit does nothing against someone spraying login attempts across a thousand accounts from one machine.

The AI would have implemented exactly the wrong protection, with green tests, and it would have been 100% my fault.

That was the pattern, over and over. The questions I kept failing to ask before delegating:

- What happens when the webhook fires twice?
- What happens when the coupon is applied twice?
- What happens when the payment succeeds but the response times out?

The AI wasn't failing to read my mind. I was failing to say what I actually needed, because I hadn't finished thinking about it.

## Why my pipeline has an interrogation step

In [my last article](/blog/ai-agent-over-junior-developer) I described how every feature starts with the agent interviewing me until neither of us has open questions. This week is why. That step exists because I proved to myself I can't be trusted to write a complete brief on the first try. "Per IP" was in the ticket. It didn't make it into my sentence. An agent that asks "per user or per IP?" before planning is cheaper than a week of the wrong feature.

So the fix wasn't becoming an "AI whisperer." It was briefing the AI the way I'd brief a sharp junior developer, and then reviewing the result the way a senior would: read the diff, ask "why is this here?" about anything I didn't request, and never accept "the tests pass" as proof without looking at the tests.

Once I started doing that, something annoying became obvious. The AI was rarely the problem. It was quite happy to carry the heavy load. My instructions just needed to deserve it.

If you work with AI every day, try grading yourself for a week. The score stings.

Then it changes how you write every request.
