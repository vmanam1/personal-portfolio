import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { PageHeader } from "@/components/shared/page-header";
import { getAllProjects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software, machine learning, and data engineering projects by Vishal Manam.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Systems, pipelines, and products."
        description="Selected engineering work presented as evolving case studies. Missing details are marked clearly rather than inferred."
      />
      <div className="wide-container section-space grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
