import { defineCollection, z } from "astro:content";

// const projectsCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     website: z.string().optional(),
//     thumbnail: z.string(),
//     description: z.string(),
//     githubLink: z.string(),
//     platform: z.string(),
//     stack: z.string(),
//   }),
// });

const usesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  // projects: projectsCollection,
  uses: usesCollection,
};
