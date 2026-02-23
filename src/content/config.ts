import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    heroImage: z.string().optional(),
    ctaPrimaryLabel: z.string().optional(),
    ctaPrimaryHref: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    featuredImage: z.string().optional(),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string().optional(),
    registrationLink: z.string().optional(),
    featuredImage: z.string().optional(),
  }),
});

const stories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    personType: z.enum(["Student", "Parent", "Volunteer"]).optional(),
    featuredImage: z.string().optional(),
  }),
});

export const collections = { pages, posts, events, stories };