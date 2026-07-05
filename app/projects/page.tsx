import type { Metadata } from "next";

import { FeaturedProjectItem } from "@/components/projects/featured-project-item";
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
        description="Selected personal and academic engineering projects. Missing details are marked clearly rather than inferred."
      />
      <div className="site-container section-space">
        {projects.map((project, index) => (
          <FeaturedProjectItem
            key={project.slug}
            project={project}
            index={index}
            headingLevel={2}
          />
        ))}
      </div>
    </>
  );
}
