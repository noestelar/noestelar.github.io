# Noé Rivera - Personal Site

Sitio personal construido con [Astro](https://astro.build).

## 🚀 Project Structure

```
/
├── src/
│   ├── assets/
│   │   └── img/           # Imágenes del sitio
│   ├── components/
│   ├── content/
│   │   ├── blog/          # Posts del blog (MDX)
│   │   ├── projects/      # Proyectos/Works
│   │   └── uses/          # Página de uses
│   ├── layouts/
│   ├── pages/
│   └── i18n/              # Internacionalización (ES/EN)
└── package.json
```

## 🧞 Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `bun install`          | Installs dependencies                              |
| `bun run dev`          | Starts local dev server at `localhost:3000`        |
| `bun run build`        | Build your production site to `./dist/`            |
| `bun run preview`      | Preview your build locally, before deploying       |

---

## 📝 Crear Posts del Blog

### Frontmatter requerido

```yaml
---
title: "Título del post"
description: "Descripción corta para SEO y previews"
date: 2026-02-21
tags: ["tag1", "tag2"]
thumbnail: "img/nombre-imagen.webp"
---
```

### Imágenes (thumbnail)

- **Formato:** WebP (mejor compatibilidad con redes sociales)
- **Tamaño:** máx 1200x630px (tamaño ideal para og:image)
- **Peso:** < 100KB (LinkedIn/Twitter fallan con imágenes grandes)
- **Ubicación:** `src/assets/img/`
- **Ruta en frontmatter:** `"img/nombre.webp"` (relativo a `assets/`)

### Ejemplo completo

```mdx
---
title: "Mi nuevo post"
description: "Una descripción corta del post"
date: 2026-02-21
tags: ["astro", "web"]
thumbnail: "img/mi-imagen.webp"
---

# Mi nuevo post

Contenido del post aquí...

![Imagen del post](../../../assets/img/mi-imagen.webp)
```

### Notas

- El **favicon** del sitio es automático (🤠), no lo incluyas en el frontmatter
- Si NO especificas `thumbnail`, se usa el favicon como fallback en og:image
- El `thumbnail` es para redes sociales (Twitter, LinkedIn, Facebook)
- Las imágenes dentro del contenido van con ruta completa: `../../../assets/img/...`

---

## 🌐 Internacionalización

El sitio soporta español e inglés. Los posts van en:
- `src/content/blog/en/` - Posts en inglés
- `src/content/blog/es/` - Posts en español
