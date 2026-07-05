import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLetterboxd } from "react-icons/si";

import { ExperienceItem } from "@/components/experience/experience-item";
import { FeaturedProjectItem } from "@/components/projects/featured-project-item";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/config/site";
import { getFeaturedExperiences } from "@/lib/content/experience";
import { getFeaturedProjects } from "@/lib/content/projects";

const homeSocialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: FaLinkedin },
  { label: "Instagram", href: siteConfig.social.instagram, icon: FaInstagram },
  { label: "Twitter", href: siteConfig.social.twitter, icon: FaXTwitter },
  {
    label: "Letterboxd",
    href: siteConfig.social.letterboxd,
    icon: SiLetterboxd,
  },
] as const;

export default async function HomePage() {
  const featuredExperience = getFeaturedExperiences().slice(0, 3);
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <section className="site-container flex min-h-[calc(100svh-4rem)] items-center py-20">
        <div className="max-w-4xl">
          <p className="eyebrow">
            Software Engineering · Machine Learning · Systems & DevOps
            Engineering
          </p>
          <h1 className="mt-5 text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.5rem]">
            I build scalable software systems that bring intelligent ideas into
            production.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            I’m Vishal, a Software Engineer with a background in Distributed
            Systems, Backend Development, DevOps, and Applied AI. I enjoy
            designing reliable, production-ready platforms from cloud
            infrastructure and data pipelines to machine learning and computer
            vision systems that solve real-world problems. After earning my
            Master’s in Computer Science from Arizona State University, I’m
            focused on building scalable software systems with an emphasis on
            performance, maintainability, and clean engineering.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects" prefetch={false}>
                View projects <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/resume" prefetch={false}>
                <FileText className="size-4" aria-hidden /> Résumé
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {homeSocialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-focus"
              >
                <Icon
                  className="size-4 shrink-0"
                  aria-hidden
                  focusable={false}
                />
                {label} <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="site-container grid gap-8 py-10 sm:grid-cols-[10rem_1fr] sm:items-start">
          <p className="eyebrow">Current focus</p>
          <p className="max-w-3xl text-xl leading-8 font-medium sm:text-2xl sm:leading-9">
            Building AI-powered software platforms for intelligent energy
            systems at ASU’s Laboratory for Energy and Power Solutions (LEAPS),
            with a focus on backend engineering, multi-agent workflows, cloud
            infrastructure, and scalable data pipelines.
          </p>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHeading
          eyebrow="Selected projects"
          title="Building beyond the interface."
          description="Personal and academic projects spanning AI, data, and energy systems. Missing details remain explicitly marked until they are verified."
          href="/projects"
          linkLabel="View all projects"
        />
        <div className="mt-14">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectItem
              key={project.slug}
              project={project}
              index={index}
            />
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
