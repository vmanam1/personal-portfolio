import { describe, expect, it } from "vitest";

import { getAllEducation } from "@/lib/content/education";
import { getAllExperiences } from "@/lib/content/experience";
import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from "@/lib/content/projects";
import { getSkillGroups } from "@/lib/content/skills";

describe("portfolio content", () => {
  it("validates and returns experience in reverse chronological order", () => {
    const experience = getAllExperiences();

    expect(experience).toHaveLength(8);
    expect(experience[0]?.id).toBe("asu-leaps-software-engineer");
  });

  it("validates education and skills", () => {
    const education = getAllEducation();

    expect(education).toHaveLength(2);
    expect(
      education.find((item) => item.id === "iiit-bhubaneswar-btech-it")
        ?.coursework,
    ).toHaveLength(60);
    expect(getSkillGroups()).toHaveLength(8);
  });

  it("compiles all project MDX and resolves a project by slug", async () => {
    const projects = await getAllProjects();
    const featuredProjects = await getFeaturedProjects();
    const project = await getProjectBySlug("pdf-rag-pipeline");

    expect(projects).toHaveLength(4);
    expect(featuredProjects.map((item) => item.slug)).toEqual([
      "pdf-rag-pipeline",
      "nyc-data-analytics-pipeline",
    ]);
    expect(project?.title).toBe("PDF RAG Pipeline");
  });
});
