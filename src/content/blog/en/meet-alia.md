---
title: "Meet Alia: how an AI agent changed my entire development workflow"
description: "I stopped using AI as a search engine. I started using it as a system. Here's what that shift actually looks like day-to-day — and why context architecture matters more than model choice."
date: 2026-03-01
tags: ["ai", "workflow", "agents", "productivity", "hermes"]
thumbnail: "img/gato.webp"
---

Most people use AI like a search engine with better grammar. You ask a question, you get an answer, you close the tab.

That's not wrong. But it's also not the interesting part.

The interesting part is what happens when the AI has context — real, persistent, structured context about who you are, how you work, and what you're trying to build. That's when it stops being a tool and starts being something closer to a collaborator.

## What changed

I've been building Alia — my personal AI agent — on top of Hermes for a few months now. The name is mine, but the system is real: she runs on my machines, connects to my calendars, reads my code, manages my tasks, and talks to me through WhatsApp.

The shift wasn't in the model. It was in the architecture.

When I stopped treating AI as a one-shot Q&A system and started building it as a stateful layer in my workflow, everything changed. Suddenly I wasn't re-explaining context every session. I wasn't copy-pasting code into chat windows. I wasn't asking "what was that command again?"

The agent knows. Because I built it to know.

## The actual setup

This is not a paid product. It's a configuration on top of open infrastructure:

- **Hermes** as the agent runtime
- **Notion** for long-term structured memory
- **GitHub** for code context
- **WhatsApp** as the primary interface (because that's where I actually live)

The key insight: the bottleneck is never the model. It's the context pipeline. If your agent doesn't have access to the right information at the right time, it doesn't matter how smart the underlying LLM is.

## What it looks like in practice

I wake up. I open WhatsApp. Alia already knows what's on my calendar, what PRs are open, and what I was working on yesterday.

I don't ask for a summary. It's just there — injected into the session context automatically.

When I'm coding, she can see the repo. When I'm writing, she knows the blog's voice and style. When I'm stressed, she knows that too — and adjusts accordingly.

It's not magic. It's plumbing. Very, very intentional plumbing.

## The part nobody talks about

The hardest thing about building an AI-powered workflow isn't the AI. It's the data hygiene.

What does your agent actually need to know? How do you keep that context fresh without it becoming noise? How do you structure information so a language model can actually use it?

These are information architecture problems. And solving them is where the real leverage is.

More on that in a future post.
