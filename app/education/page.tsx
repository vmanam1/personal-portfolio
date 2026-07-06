import type { Metadata } from "next";

import { EducationItem } from "@/components/education/education-item";
import { PageHeader } from "@/components/shared/page-header";
import { getAllEducation } from "@/lib/content/education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Vishal Manam’s graduate and undergraduate computer science education.",
};

export default function EducationPage() {
  const education = getAllEducation();

  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Master's in Computer Science from Arizona State University, built upon a Bachelor's in Information Technology."
        description=""
      />
      <div className="site-container section-space grid gap-6">
        {education.map((item) => (
          <EducationItem key={item.id} education={item} />
        ))}
      </div>
    </>
  );
}
