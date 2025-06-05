import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  project: defineCollection({
    // Load Markdown files in the src/content/project directory.
    loader: glob({ base: "./src/content/project", pattern: "**/*.md" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      shortDescription: z.string().optional(),
      publishDate: z.coerce.date(),
      projectType: z.string(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      images: z
        .array(
          z.object({
            url: z.string(),
            alt: z.string().optional(),
          })
        )
        .optional(),
      githubCode: z.string().optional(),
      technologies: z.array(z.string()).optional(),
    }),
  }),
};
