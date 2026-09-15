---
title: "Why I'd rather work with an AI agent than a junior developer"
description: "I planted ten bugs in a live codebase to test my AI review pipeline. It found every expensive one and missed every obvious one — and that pattern is exactly the point."
date: "2026-09-08"
tags: ["ai-workflow"]
---

I read a post this week arguing that if you haven't read and understood the code you generated with AI, it's rude to send it as a pull request. I agree with the sentiment. I disagree with the picture of AI coding it assumes: one prompt, one blob of output, pasted into a PR. That's not how I work, and it's not why AI replaced the junior hire I would otherwise have made.

An AI agent is a junior engineer with strange constraints: no memory, a fresh clone every session, runs in parallel, never gets tired. But it has one property no junior has. It doesn't need years to level up. A junior improves slowly, inside their own head. An agent improves the moment I improve the workflow around it. That difference is the whole reason I run my one-person company the way I do.

## Three AIs, one human

My setup has separation of duties, the same way a real team does, and it starts before any code exists.

**0. Interrogation before planning.** Most junior bugs aren't coding mistakes, they're misunderstanding mistakes: the wrong feature built correctly. So the first thing that happens is an alignment pass where the agent interviews me. Edge cases, what's out of scope, what "done" means. It runs until neither of us has open questions, which can mean dozens of them. It feels excessive until you count how many review rounds it replaces.

**1. A planner** turns that shared understanding into steps and decides which files change, cut as vertical slices across the Rails API and the Nuxt frontend, not layer by layer. Each slice can be built and verified on its own. That's also what lets me pivot: a change of direction is re-cutting the slices, not throwing away half a build. I read and approve the slices before anything is built. It's the cheapest review in the pipeline: a wrong plan costs a build cycle, reading it costs two minutes.

**2. A coder** implements one slice at a time.

**3. A test writer** works from the plan, not from the code. Tests written by the same context that wrote the implementation tend to test what was built rather than what was asked for.

**4. A reviewer** that is a different model. Claude writes, Codex reviews. A model reviewing itself shares its own blind spots. A different one disagrees, and the disagreements are where the bugs are.

**5. Me.** I read the final diff. Not the agent chatter, not the test output summary. The diff.

## I tested how much of that trust is earned

I planted ten bugs in the live codebase of Wordy, five in the Rails API and five in the Nuxt frontend. Each was a one-line change, most a single token, and each survived the full test suite: 1,893 backend tests, 215 frontend specs, a clean build. I committed them with boring messages, didn't push, and started a fresh agent session framed as a routine stability audit. It wasn't told anything was planted, wasn't told how many, and was barred from reading git history.

It found five. That sounds mediocre until you look at which five.

Every hard one. A quota check that had quietly become global, so any user's already-looked-up word was free for everyone. A logout that cleared the local token before calling the server, so the session was never revoked. A timezone bug that made a paid coaching feature skip days for anyone east of UTC. A cache that, after one edit, would revalidate forever and return its first-ever result. It didn't just flag these. It wrote new probes to reproduce each one.

Every easy one, it missed. A swapped label. A `<` that became `<=`. A `.minimum` that became `.maximum` directly under a comment that said "soonest." Bugs a human sees in the first ten seconds of clicking around.

The pattern is the point. The agent reasons from consequences: what would hurt users, cost money, leak data. That kind of reasoning scales. It does not reason like someone using the product, and no amount of code reading substitutes for rendering a screen. So I don't ask it to. Step 5 exists for the ten-second bugs. The agent exists for the ones that take a week to notice in production.

One more thing came out of a hunt that was nominally about ten fakes: ten findings I hadn't planted. An unset webhook secret that would have let an empty string authenticate. An uncapped text field feeding a paid speech API. A retry path that was silently a no-op. I haven't verified all of them yet, but the top three are already on my board. The experiment paid for itself before I'd scored it.

## The speed isn't free

This is fast because the codebase is one I've spent years keeping clean. Bad codebases make bad agents. Shallow modules, tangled files, and stale comments confuse an agent the same way they confuse a new hire, except the agent won't tell you it's confused. The speed is twenty years of habits paying out.

## Back to the rude PR

So when someone says "you didn't read the code": I did. It arrived on my desk already aligned with me, planned and approved by me, tested, and reviewed by a second model. That's not rude to a reviewer. That's what a good junior's PR is supposed to look like, and it took minutes instead of a week.

And here's the part that finally settled it for me. A junior would have caught the swapped label and missed the global quota leak. The agent did the exact opposite. I know which of those two bugs I'd rather have a human for. It's the cheap one.
