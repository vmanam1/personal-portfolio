import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { ProjectFrontmatter } from "@/lib/schemas/project";

export function FeaturedProjectItem({
  project,
  index,
}: {
  project: ProjectFrontmatter;
  index: number;
}) {
  return (
    <article className="group relative grid gap-5 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-10">
      <div className="font-mono text-xs leading-6 text-muted-foreground uppercase">
        <p className="text-accent">{String(index + 1).padStart(2, "0")}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            prefetch={false}
            className="rounded-sm outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-focus"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-accent">
          View project
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>
    </article>
  );
}
