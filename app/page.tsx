import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

import { ExperienceItem } from "@/components/experience/experience-item";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/config/site";
import { getFeaturedExperiences } from "@/lib/content/experience";
import { getAllProjects } from "@/lib/content/projects";

export default async function HomePage() {
  const featuredExperience = getFeaturedExperiences().slice(0, 3);
  const featuredProjects = (await getAllProjects())
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <>
      <section className="site-container flex min-h-[calc(100svh-4rem)] items-center py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">Software · Machine Learning · Systems</p>
          <h1 className="mt-5 text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.5rem]">
            I build intelligent systems that work in the real world.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            I’m {siteConfig.name}, a software and machine learning engineer
            working across intelligent energy, computer vision, and data
            platforms.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">
                View projects <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/resume">
                <FileText className="size-4" aria-hidden /> Résumé
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-focus"
            >
              GitHub <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-focus"
            >
              LinkedIn <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="site-container grid gap-8 py-10 sm:grid-cols-[10rem_1fr] sm:items-start">
          <p className="eyebrow">Current focus</p>
          <p className="max-w-3xl text-xl leading-8 font-medium sm:text-2xl sm:leading-9">
            Building intelligent energy AI platforms as a Software Engineer at
            ASU’s Laboratory for Energy and Power Solutions.
          </p>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHeading
          eyebrow="Selected projects"
          title="Building beyond the interface."
          description="Case studies spanning AI, data, and energy systems. Project details remain explicitly marked while documentation is completed."
          href="/projects"
          linkLabel="View all projects"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="site-container section-space">
          <SectionHeading
            eyebrow="Experience"
            title="Engineering across systems and environments."
            description="Selected roles spanning intelligent energy, edge computer vision, data processing, and digital solutions."
            href="/experience"
            linkLabel="View all experience"
          />
          <div className="mt-14">
            {featuredExperience.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
