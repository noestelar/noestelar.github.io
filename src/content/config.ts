import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    website: z.string().optional(),
    thumbnail: z.string().optional(),
    description: z.string(),
    githubLink: z.string(),
    platform: z.string(),
    stack: z.string(),
  }),
});

const usesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    description: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'uses': usesCollection,
  'blog': blogCollection,
};
