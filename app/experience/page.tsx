import type { Metadata } from "next";

import { ExperienceItem } from "@/components/experience/experience-item";
import { PageHeader } from "@/components/shared/page-header";
import { getAllExperiences } from "@/lib/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Vishal Manam’s professional experience across software, AI, and data systems.",
};

export default function ExperiencePage() {
  const experience = getAllExperiences();

  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Work grounded in real systems."
        description="A complete professional timeline, from software and machine learning systems to service and university leadership."
      />
      <div className="site-container section-space">
        {experience.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </>
  );
}
