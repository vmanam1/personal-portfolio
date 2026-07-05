import { ChevronDown, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/dates";
import type { Experience } from "@/lib/schemas/experience";

export function ExperienceItem({ experience }: { experience: Experience }) {
  const hasDetails = experience.contributions.length > 0;

  return (
    <article className="grid gap-5 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-10">
      <div className="font-mono text-xs leading-6 text-muted-foreground uppercase">
        <p>{formatDateRange(experience.startDate, experience.endDate)}</p>
        {experience.current ? (
          <p className="mt-1 text-accent">Current</p>
        ) : null}
      </div>
      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              {experience.role}
            </h2>
            <p className="mt-1 text-muted-foreground">{experience.company}</p>
          </div>
          {experience.employmentType ? (
            <Badge>{experience.employmentType}</Badge>
          ) : null}
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0" aria-hidden />
          <span>
            {experience.location}
            {experience.locationType ? ` · ${experience.locationType}` : ""}
          </span>
        </p>
        <p className="mt-5 max-w-3xl leading-7">{experience.summary}</p>

        {hasDetails ? (
          <details className="group mt-5">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-sm text-sm font-medium text-accent outline-none focus-visible:ring-2 focus-visible:ring-focus [&::-webkit-details-marker]:hidden">
              Major contributions
              <ChevronDown
                className="size-4 transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <ul className="mt-2 grid max-w-3xl gap-3 pl-5 leading-7 text-muted-foreground marker:text-[var(--color-accent)]">
              {experience.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </details>
        ) : null}

        {experience.technologies.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {experience.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
