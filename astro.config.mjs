import { defineConfig } from "astro/config";
import addClasses from "rehype-add-classes";
import path from 'path';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://noestelar.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
      strategy: "prefix"
    }
  },
  // base: '/',
  integrations: [
    tailwind(),
    react()
  ],
  vite: {
    resolve: {
      alias: {
        '@public': path.resolve('./public'),
        '@assets': path.resolve('./src/assets'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@i18n': path.resolve('./src/i18n'),
        '@styles': path.resolve('./src/styles')
      },
    },
  },
  markdown: {
    // extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-quicksand font-bold",
          h2: "text-2xl font-quicksand font-bold",
          h3: "text-xl font-quicksand font-bold",
          h4: " font-quicksand font-bold",
          h5: " font-quicksand font-bold",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-6",
          // a: 'underline underline-offset-2 hover:text-blue-500 decoration-cyaned-500',
          a: "underline underline-offset-2 hover:text-cyaned-500 decoration-cyaned-500",
          li: "mb-2  ",
          ul: "list-disc marker:text-cyaned-500 list-disc list-inside mb-6  ",
        },
      ],
    ],
  },
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Optional: Configure remote domains if you're using external images
    domains: [],
    remotePatterns: []
  }
});
