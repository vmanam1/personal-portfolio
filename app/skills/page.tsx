import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";
import { SkillGroup } from "@/components/skills/skill-group";
import { getSkillGroups } from "@/lib/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies Vishal Manam has worked with across engineering disciplines.",
};

export default function SkillsPage() {
  const groups = getSkillGroups();

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="A practical engineering toolkit."
        description="Technologies I’ve worked with across software, machine learning, cloud infrastructure, data systems, and developer tooling."
      />
      <div className="site-container section-space">
        {groups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>
    </>
  );
}
