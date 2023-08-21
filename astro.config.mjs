import { defineConfig } from 'astro/config';
import addClasses from 'rehype-add-classes';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://noe-ali.github.io',
  // base: '/Astropfolio',
  integrations: [tailwind(), react()],
  markdown: {
    // extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-quicksand font-bold',
          h2: 'text-2xl font-quicksand font-bold',
          h3: 'text-xl font-quicksand font-bold',
          h4: ' font-quicksand font-bold',
          h5: ' font-quicksand font-bold',
          img: 'border border-slate-300 dar:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-cyaned-500 decoration-cyaned-500',
        },
      ]
    ]
  }
});