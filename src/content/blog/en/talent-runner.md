---
title: "I built my first video game in 24 hours. It was completely worth it."
description: "Talent Runner: a data-driven RPG built with Phaser.js and TypeScript for Talent Land 2026. First game ever. First time collaborating under real time pressure. Here's what I learned."
date: 2026-04-10
tags: ["gamedev", "phaser", "typescript", "talentland", "ai"]
thumbnail: "img/blog/CDC983A9-7546-4951-99CF-5357B23FEB58_1_105_c.webp"
---

A few days ago I finished participating in the Talent Land Game Challenge 2026.
This post is about the game, how we built it, and why it was one of the most interesting experiences I've had as an engineer.

## The game

[Play Talent Runner](https://talent-land-game-challenge.vercel.app/)

Talent Runner is a data-driven RPG built with Phaser.js and TypeScript. The premise: a character navigating zones inspired by Talent Land, with combat mechanics, fog of war, and sequential bosses.

## The idea

The challenge rules were simple — everything had to be developed with Kiro, a programming IDE powered by AWS, multiple models, spec-driven development.
The initial idea came over dinner while reading the call for entries. My partner is a big fan of games like Fable, where the choices you make impact your performance in the game. We wanted to bring some of that to our version — a game where the track you choose to learn gives you advantages and disadvantages. A software developer who has maximized technical experiences will have offensive advantage, but defensive weakness if they lack knowledge about security or business. On paper, it sounds like a weird dynamic, but in practice it's really fun.

![Talent Runner gameplay](../../../assets/img/blog/Pasted%20image%2020260413114220.webp)

## The stack

- **Phaser.js + TypeScript** — first time working with a real game engine
- **Vite** for the build
- **i18n** in English and Spanish from day one
- **Mobile support** — because Talent Land is mobile-first
- **Kiro IDE** for a spec-first development flow

The approach was spec-first: before writing a single line of code, we documented exactly what we were going to build and how. That was key to moving fast in 24 hours with two people. My partner writing the game design and completing the specs, me implementing and iterating with the IDE until we had a playable, bug-free version.

## What I learned

It was my first time making a game. I knew nothing about game loops, how to manage state between scenes, or physics in Phaser. I learned it on the fly.

Collaborative work was also new in this context — coordinating technical decisions with someone else under time pressure is a different muscle than solo development.

And something I didn't expect: the importance of centralizing digestible knowledge for agents. When you have an AI agent working alongside you, the quality of what it produces depends directly on how well-structured the context you give it is. That changed how I think about AI-assisted development.

## Would I do it again?

Yes. Without hesitation. Making games is one of the things that motivates 90% of aspiring software developers — I was no exception back in the day. But I'd never had the opportunity to work directly on creating a game. An experience I recommend every developer try at least once.