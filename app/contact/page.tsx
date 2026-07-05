import { ArrowUpRight, Code2, UserRound } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Vishal Manam through LinkedIn or GitHub.",
};

const channels = [
  {
    label: "LinkedIn",
    description: "Professional updates and direct messages.",
    href: siteConfig.social.linkedin,
    icon: UserRound,
  },
  {
    label: "GitHub",
    description: "Code, repositories, and ongoing engineering work.",
    href: siteConfig.social.github,
    icon: Code2,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about useful work."
        description="For roles, collaborations, or technical conversations, connect through one of the verified channels below."
      />
      <div className="site-container section-space grid gap-6 md:grid-cols-2">
        {channels.map(({ label, description, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-[border-color,transform] outline-none hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-focus motion-safe:hover:-translate-y-0.5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="grid size-11 place-items-center rounded-[var(--radius-sm)] border border-border bg-surface-subtle">
                <Icon className="size-5 text-accent" aria-hidden />
              </span>
              <ArrowUpRight
                className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </div>
            <h2 className="mt-10 text-2xl font-semibold">{label}</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              {description}
            </p>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
        <section className="border-t border-border pt-8 md:col-span-2">
          <h2 className="text-lg font-semibold">Email and contact form</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            TODO: Add the approved public email address. A contact form will
            only be enabled after its delivery provider, abuse controls, and
            privacy handling are selected.
          </p>
        </section>
      </div>
    </>
  );
}
