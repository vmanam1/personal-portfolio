import { z } from "zod";

import { externalLinkSchema, yearMonthSchema } from "@/lib/schemas/common";

export const experienceSchema = z
  .object({
    id: z.string().min(1),
    company: z.string().min(1),
    role: z.string().min(1),
    employmentType: z.string().min(1).nullable(),
    location: z.string().min(1),
    locationType: z.enum(["On-site", "Hybrid", "Remote"]).nullable(),
    startDate: yearMonthSchema,
    endDate: yearMonthSchema.nullable(),
    current: z.boolean(),
    summary: z.string().min(1),
    contributions: z.array(z.string().min(1)),
    technologies: z.array(z.string().min(1)),
    links: z.array(externalLinkSchema),
    featured: z.boolean(),
  })
  .superRefine((value, context) => {
    if (value.current && value.endDate !== null) {
      context.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "Current roles cannot have an end date",
      });
    }

    if (!value.current && value.endDate === null) {
      context.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "Past roles require an end date",
      });
    }
  });

export const experiencesSchema = z.array(experienceSchema);
export type Experience = z.infer<typeof experienceSchema>;
