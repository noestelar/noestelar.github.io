---
title: "Construí mi primer videojuego en 48 horas. Valió completamente la pena."
description: "Talent Runner: un RPG de datos construido con Phaser.js y TypeScript para Talent Land 2026. Primera vez haciendo un juego. Primera vez colaborando bajo presión de tiempo real. Esto fue lo que aprendí."
date: 2026-04-10
tags: ["gamedev", "phaser", "typescript", "talentland", "ia"]
thumbnail: "img/blog/CDC983A9-7546-4951-99CF-5357B23FEB58_1_105_c.webp"
---

Hace unos días terminé de participar en el Talent Land Game Challenge 2026.
Este post es sobre el juego, cómo lo hicimos, y por qué fue una de las experiencias más interesantes que he tenido como ingeniero.

## El juego

[link al juego](https://talent-land-game-challenge.vercel.app/)

Talent Runner es un RPG de datos construido en Phaser.js con TypeScript. La premisa: un personaje navegando por zonas inspiradas en Talent Land, con mecánicas de combate, niebla de guerra y jefes secuenciales.

## La idea

Las reglas del reto eran sencillas, todo tenia que desarrollarse con la plataforma de Kiro, un IDE de programación empoderado por AWS, multiples modelos, spec driven development.
La idea inicial llegó en la cena mientras leía la convocatoria, mi pareja es muy fan de juegos como Fable, en los que las decisiones que tomas impactan tu desempeño en el juego, queríamos traer un poco de eso a nuestra versión, un juego donde el track que decides aprender te da ventajas y desventajas, un desarrollador de software que ha maximizado las experiencias técnicas tendrá ventaja ofensiva, pero una debilidad defensiva si no tiene conocimientos sobre seguridad o sobre negocios, en papel, suena como una dinámica extraña, pero en realidad es muy divertido.

![Gameplay de Talent Runner](../../../assets/img/blog/Pasted%20image%2020260413114220.webp)

## El stack

- **Phaser.js + TypeScript** — primera vez que trabajaba con un game engine serio
- **Vite** para el build
- **i18n** en inglés y español desde el día uno
- **Soporte móvil** — porque Talent Land es móvil-first
- **Kiro IDE** para el flujo de desarrollo spec-first

El approach fue spec-first: antes de escribir una línea de código, documentamos exactamente qué íbamos a construir y cómo. Eso fue clave para movernos rápido en 24 horas con dos personas. Mi pareja escribiendo el game design y completando los specs, yo implementando e iterando con el IDE hasta obtener una versión jugable y sin bugs.

## Lo que aprendí

Era mi primera vez haciendo un juego. No sabía nada de game loops, de cómo manejar estado entre escenas, ni de física en Phaser. Lo aprendí sobre la marcha.

El trabajo colaborativo también fue nuevo en este contexto — coordinar decisiones técnicas con alguien más bajo presión de tiempo es un músculo diferente al desarrollo en solitario.

Y algo que no esperaba: la importancia de centralizar conocimiento digerible para agentes. Cuando tienes un agente de IA trabajando contigo, la calidad de lo que produce depende directamente de qué tan bien estructurado está el contexto que le das. Eso cambió cómo pienso el desarrollo asistido por IA.

## ¿Lo volvería a hacer?

Sí. Sin dudarlo, hacer juegos es una de las cosas que motivan al 90% de los aspirantes a convertirse en desarrollador de software, por supuesto que en su tiempo no fui la excepción. Pero nunca había tenido la oportunidad de trabajar directamente en la creación de un juego, una experiencia que recomiendo a todos los desarrolladores probar alguna vez.