import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/dates";
import type { Experience } from "@/lib/schemas/experience";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article className="grid gap-5 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-10">
      <div className="font-mono text-xs leading-6 text-muted-foreground uppercase">
        <p>{formatDateRange(experience.startDate, experience.endDate)}</p>
        {experience.current ? (
          <p className="mt-1 text-accent">Current</p>
        ) : null}
      </div>
      <div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            {experience.role}
          </h2>
          <p className="mt-1 text-muted-foreground">{experience.company}</p>
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0" aria-hidden />
          <span>{experience.location}</span>
        </p>
        <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
          {experience.description}
        </p>

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
