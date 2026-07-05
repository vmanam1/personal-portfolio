import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";

import { mdxComponents } from "@/components/mdx/mdx-components";
import {
  projectFrontmatterSchema,
  type ProjectFrontmatter,
} from "@/lib/schemas/project";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export type Project = ProjectFrontmatter & { content: ReactElement };

async function compileProject(filename: string): Promise<Project> {
  const source = await readFile(path.join(projectsDirectory, filename), "utf8");
  const { content, frontmatter } = await compileMDX<Record<string, unknown>>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });
  const metadata = projectFrontmatterSchema.parse(frontmatter);

  if (`${metadata.slug}.mdx` !== filename) {
    throw new Error(
      `Project slug ${metadata.slug} does not match filename ${filename}`,
    );
  }

  return { ...metadata, content };
}

export async function getProjectSlugs(): Promise<string[]> {
  const filenames = await readdir(projectsDirectory);
  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.slice(0, -4));
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(
    slugs.map((slug) => compileProject(`${slug}.mdx`)),
  );

  return projects
    .filter((project) => !project.draft)
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        a.title.localeCompare(b.title),
    );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return null;
  }

  try {
    const project = await compileProject(`${slug}.mdx`);
    return project.draft ? null : project;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}
