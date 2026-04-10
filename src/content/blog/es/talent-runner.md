---
title: "Construí mi primer videojuego en 48 horas. No ganamos. Valió completamente la pena."
description: "Talent Runner: un RPG de datos construido con Phaser.js y TypeScript para Talent Land 2026. Primera vez haciendo un juego. Primera vez colaborando bajo presión de tiempo real. Esto fue lo que aprendí."
date: 2026-04-10
tags: ["gamedev", "phaser", "typescript", "talentland", "ia"]
thumbnail: "img/gato.webp"
---

Hace unos días terminé de participar en el Talent Land Game Challenge 2026. El resultado: no ganamos. El aprendizaje: enorme.

Este post es sobre el juego, cómo lo hicimos, y por qué fue una de las experiencias más interesantes que he tenido como ingeniero.

## El juego

[link al juego]

Talent Runner es un RPG de datos construido en Phaser.js con TypeScript. La premisa: un personaje navegando por zonas inspiradas en Talent Land, con mecánicas de combate, niebla de guerra y jefes secuenciales.

## El stack

- **Phaser.js + TypeScript** — primera vez que trabajaba con un game engine serio
- **Vite** para el build
- **i18n** en inglés y español desde el día uno
- **Soporte móvil** — porque Talent Land es móvil-first
- **Kiro IDE** para el flujo de desarrollo spec-first

El approach fue spec-first: antes de escribir una línea de código, documentamos exactamente qué íbamos a construir y cómo. Eso fue clave para movernos rápido en 48 horas con dos personas.

## Lo que aprendí

Era mi primera vez haciendo un juego. No sabía nada de game loops, de cómo manejar estado entre escenas, ni de física en Phaser. Lo aprendí sobre la marcha.

El trabajo colaborativo también fue nuevo en este contexto — coordinar decisiones técnicas con alguien más bajo presión de tiempo es un músculo diferente al desarrollo en solitario.

Y algo que no esperaba: la importancia de centralizar conocimiento digerible para agentes. Cuando tienes un agente de IA trabajando contigo, la calidad de lo que produce depende directamente de qué tan bien estructurado está el contexto que le das. Eso cambió cómo pienso el desarrollo asistido por IA.

## ¿Lo volvería a hacer?

Sí. Sin dudarlo.

[link al repositorio]
