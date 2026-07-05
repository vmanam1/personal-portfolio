import { z } from "zod";

export const skillGroupSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  order: z.number().int().nonnegative(),
  skills: z.array(z.string().min(1)).min(1),
});

export const skillGroupsSchema = z.array(skillGroupSchema);
export type SkillGroup = z.infer<typeof skillGroupSchema>;
