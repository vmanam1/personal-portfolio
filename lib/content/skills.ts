import { skillContent } from "@/content/skills/skills";
import { skillGroupsSchema, type SkillGroup } from "@/lib/schemas/skill";

const skillGroups = skillGroupsSchema.parse(skillContent);

export function getSkillGroups(): SkillGroup[] {
  return [...skillGroups].sort((a, b) => a.order - b.order);
}
