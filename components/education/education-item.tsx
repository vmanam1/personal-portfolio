import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/dates";
import type { Education } from "@/lib/schemas/education";

export function EducationItem({ education }: { education: Education }) {
  return (
    <article className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-8">
      <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
        {formatDateRange(education.startDate, education.endDate)}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        {education.institution}
      </h2>
      <p className="mt-2 text-lg">
        {education.degree} · {education.field}
      </p>
      <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4" aria-hidden /> {education.location}
      </p>

      <div className="mt-7 border-t border-border pt-6">
        <h3 className="text-sm font-semibold">Relevant coursework</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <Badge key={course}>{course}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
