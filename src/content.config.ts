import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const post = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    dateCreated: z.coerce.date(),
  }),
});

export const collections = { post };
