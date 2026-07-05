import { describe, expect, it } from "vitest";

import { getAllEducation } from "@/lib/content/education";
import { getAllExperiences } from "@/lib/content/experience";
import { getAllProjects, getProjectBySlug } from "@/lib/content/projects";
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

  it("compiles all project MDX and resolves a project by slug", async () => {
    const projects = await getAllProjects();
    const project = await getProjectBySlug("pdf-rag-pipeline");

    expect(projects).toHaveLength(4);
    expect(project?.title).toBe("PDF RAG Pipeline");
  });
});
