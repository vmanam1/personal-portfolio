import { experienceContent } from "@/content/experience/experience";
import { experiencesSchema, type Experience } from "@/lib/schemas/experience";

const experiences = experiencesSchema.parse(experienceContent);

export function getAllExperiences(): Experience[] {
  return [...experiences].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );
}

export function getFeaturedExperiences(): Experience[] {
  return getAllExperiences().filter((experience) => experience.featured);
}
