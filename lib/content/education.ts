import { educationContent } from "@/content/education/education";
import { educationListSchema, type Education } from "@/lib/schemas/education";

const education = educationListSchema.parse(educationContent);

export function getAllEducation(): Education[] {
  return [...education].sort((a, b) => b.startDate.localeCompare(a.startDate));
}
