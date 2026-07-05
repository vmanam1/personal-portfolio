import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { ProjectFrontmatter } from "@/lib/schemas/project";

export function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <article className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-[border-color,transform] hover:border-accent/50 motion-safe:hover:-translate-y-0.5 sm:p-8">
      <div className="mb-8 grid aspect-[16/8] place-items-center rounded-[var(--radius-md)] border border-border bg-surface-subtle p-6">
        <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Project
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight">
        <Link
          href={`/projects/${project.slug}`}
          prefetch={false}
          className="rounded-sm outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-focus"
        >
          {project.title}
        </Link>
      </h2>
      <p className="mt-3 leading-7 text-muted-foreground">{project.summary}</p>
      <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-accent">
        View project
        <ArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </div>
    </article>
  );
}
