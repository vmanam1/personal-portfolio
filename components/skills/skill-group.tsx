import { Badge } from "@/components/ui/badge";
import type { SkillGroup as SkillGroupType } from "@/lib/schemas/skill";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <section className="grid gap-5 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-12">
      <h2 className="text-lg font-semibold">{group.label}</h2>
      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((skill) => (
          <Badge
            key={skill}
            className="bg-surface px-3 py-1.5 text-sm text-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
