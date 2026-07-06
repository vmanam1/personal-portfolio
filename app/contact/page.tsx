import { Mail } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vishal Manam via LinkedIn or email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about useful work."
        description="For roles, collaborations, or technical conversations — reach out directly."
      />
      <div className="site-container section-space max-w-2xl">
        {/* Primary contact channels */}
        <p className="leading-7 text-muted-foreground">
          The best way to reach me is through{" "}
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>{" "}
          or by emailing me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
          >
            {siteConfig.email}
          </a>
          . If you&apos;re unable to reach me through either of those, feel free
          to submit the form below and I&apos;ll get back to you.
        </p>

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-3.5" aria-hidden />
            Contact form
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </>
  );
}
