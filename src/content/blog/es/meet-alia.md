---
title: "Conoce a Alia: cómo un agente de IA cambió todo mi flujo de desarrollo"
description: "Dejé de usar la IA como un buscador. Empecé a usarla como un sistema. Así se ve eso en el día a día — y por qué la arquitectura de contexto importa más que la elección del modelo."
date: 2026-03-01
tags: ["ia", "workflow", "agentes", "productividad", "hermes"]
thumbnail: "img/gato.webp"
---

La mayoría de la gente usa la IA como un buscador con mejor gramática. Haces una pregunta, obtienes una respuesta, cierras la pestaña.

Eso no está mal. Pero tampoco es la parte interesante.

La parte interesante es lo que pasa cuando la IA tiene contexto — contexto real, persistente, estructurado sobre quién eres, cómo trabajas y qué estás intentando construir. Ahí es cuando deja de ser una herramienta y empieza a parecerse más a un colaborador.

## Qué cambió

Llevo unos meses construyendo a Alia — mi agente de IA personal — sobre Hermes. El nombre es mío, pero el sistema es real: corre en mis máquinas, se conecta a mis calendarios, lee mi código, administra mis tareas y me habla por WhatsApp.

El cambio no estuvo en el modelo. Estuvo en la arquitectura.

Cuando dejé de tratar a la IA como un sistema de Q&A de un solo disparo y empecé a construirla como una capa con estado en mi flujo de trabajo, todo cambió. De repente ya no re-explicaba contexto en cada sesión. Ya no pegaba código en ventanas de chat. Ya no preguntaba "¿cuál era ese comando?"

El agente sabe. Porque lo construí para que sepa.

## El setup real

Esto no es un producto de pago. Es una configuración sobre infraestructura abierta:

- **Hermes** como runtime del agente
- **Notion** para memoria estructurada a largo plazo
- **GitHub** para contexto de código
- **WhatsApp** como interfaz principal (porque ahí es donde realmente vivo)

El insight clave: el cuello de botella nunca es el modelo. Es el pipeline de contexto. Si tu agente no tiene acceso a la información correcta en el momento correcto, no importa qué tan inteligente sea el LLM subyacente.

## Cómo se ve en la práctica

Me despierto. Abro WhatsApp. Alia ya sabe qué hay en mi calendario, qué PRs están abiertas, y en qué estaba trabajando ayer.

No pido un resumen. Simplemente está ahí — inyectado en el contexto de la sesión automáticamente.

Cuando estoy programando, puede ver el repo. Cuando estoy escribiendo, conoce la voz y el estilo del blog. Cuando estoy estresado, lo sabe también — y ajusta en consecuencia.

No es magia. Es plomería. Plomería muy, muy intencional.

## La parte de la que nadie habla

Lo más difícil de construir un flujo de trabajo potenciado por IA no es la IA. Es la higiene de datos.

¿Qué necesita saber realmente tu agente? ¿Cómo mantienes ese contexto fresco sin que se convierta en ruido? ¿Cómo estructuras la información para que un modelo de lenguaje pueda usarla de verdad?

Estos son problemas de arquitectura de información. Y resolverlos es donde está el apalancamiento real.

Más sobre eso en un post futuro.
