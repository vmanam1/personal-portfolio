import { describe, expect, it } from "vitest";

import { getAllEducation } from "@/lib/content/education";
import { getAllExperiences } from "@/lib/content/experience";
import { getSkillGroups } from "@/lib/content/skills";

describe("portfolio content", () => {
  it("validates and returns experience in reverse chronological order", () => {
    const experience = getAllExperiences();

    expect(experience).toHaveLength(7);
    expect(experience[0]?.id).toBe("asu-leaps-software-engineer");
  });

  it("validates education and skills", () => {
    expect(getAllEducation()).toHaveLength(2);
    expect(getSkillGroups()).toHaveLength(8);
  });
});
