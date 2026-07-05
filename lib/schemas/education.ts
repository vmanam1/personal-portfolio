import { z } from "zod";

import { externalLinkSchema, yearMonthSchema } from "@/lib/schemas/common";

export const educationSchema = z.object({
  id: z.string().min(1),
  institution: z.string().min(1),
  degree: z.string().min(1),
  field: z.string().min(1),
  startDate: yearMonthSchema,
  endDate: yearMonthSchema,
  location: z.string().min(1),
  coursework: z.array(z.string().min(1)),
  activities: z.array(z.string().min(1)),
  achievements: z.array(z.string().min(1)),
  links: z.array(externalLinkSchema),
});

export const educationListSchema = z.array(educationSchema);
export type Education = z.infer<typeof educationSchema>;
