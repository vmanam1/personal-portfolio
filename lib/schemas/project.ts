import { z } from "zod";

import { yearMonthSchema } from "@/lib/schemas/common";

const optionalHttpsUrl = z
  .url()
  .refine((url) => url.startsWith("https://"), "Project links must use HTTPS")
  .nullable();

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  summary: z.string().min(1),
  status: z.enum(["Project details pending", "Active", "Complete", "Archived"]),
  publishedAt: yearMonthSchema,
  updatedAt: yearMonthSchema,
  displayOrder: z.number().int().positive(),
  featuredOrder: z.number().int().positive().nullable(),
  draft: z.boolean(),
  tags: z.array(z.string().min(1)),
  technologies: z.array(z.string().min(1)),
  repositoryUrl: optionalHttpsUrl,
  demoUrl: optionalHttpsUrl,
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
