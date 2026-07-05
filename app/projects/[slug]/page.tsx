import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/content/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projects = await getAllProjects();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <header className="border-b border-border">
        <div className="site-container py-14 sm:py-20 lg:py-24">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus"
          >
            <ArrowLeft className="size-4" aria-hidden /> All projects
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.repositoryUrl ? (
              <Button asChild>
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalLink className="size-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
            ) : null}
            {project.demoUrl ? (
              <Button asChild variant="secondary">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live demo <ExternalLink className="size-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
            ) : (
              <span className="inline-flex min-h-11 items-center rounded-[var(--radius-sm)] border border-border px-4 text-sm text-muted-foreground">
                Live demo · TODO
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start">
        <div className="space-y-12">{project.content}</div>
        <aside className="rounded-[var(--radius-md)] border border-border bg-surface p-5 lg:sticky lg:top-24">
          <p className="text-sm font-semibold">Project status</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {project.status}
          </p>
          <div className="mt-5 border-t border-border pt-5">
            <p className="text-sm font-semibold">Technology</p>
            {project.technologies.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                Stack confirmation pending.
              </p>
            )}
          </div>
        </aside>
      </div>

      {nextProject ? (
        <footer className="border-t border-border">
          <div className="site-container py-12">
            <p className="eyebrow">Next project</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="mt-3 inline-block rounded-sm text-2xl font-semibold tracking-tight hover:text-accent focus-visible:ring-2 focus-visible:ring-focus"
            >
              {nextProject.title} <span aria-hidden>→</span>
            </Link>
          </div>
        </footer>
      ) : null}
    </article>
  );
}
