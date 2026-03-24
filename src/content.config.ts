import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    heroImage: z.string().optional(),
    ctaPrimaryLabel: z.string().optional(),
    ctaPrimaryHref: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    featuredImage: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string().optional(),
    registrationLink: z.string().optional(),
    featuredImage: z.string().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    personType: z.enum(["Student", "Parent", "Volunteer"]).optional(),
    featuredImage: z.string().optional(),
  }),
});

export const collections = { pages, posts, events, stories };
