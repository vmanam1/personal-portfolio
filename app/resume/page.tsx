import { Download, FileText, Printer } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/config/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "View or download Vishal Manam's résumé.",
};

export default function ResumePage() {
  const resumePath = siteConfig.resume.path;
  const resumeAvailable = Boolean(resumePath);

  return (
    <>
      <PageHeader
        eyebrow="Résumé"
        title="Experience in one document."
        description="A concise summary of my professional experience, education, and technical work."
      />
      <div className="site-container section-space">
        {resumeAvailable && resumePath ? (
          <section>
            <div className="mb-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={resumePath} download="Vishal_Manam_Resume.pdf">
                  <Download className="size-4" aria-hidden /> Download PDF
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={resumePath} target="_blank" rel="noreferrer">
                  <Printer className="size-4" aria-hidden /> Print / Open
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
              <iframe
                src={resumePath}
                title="Vishal Manam — Résumé"
                className="h-[80vh] min-h-[600px] w-full"
                aria-label="Résumé PDF preview"
              />
            </div>
          </section>
        ) : (
          <section className="grid min-h-[28rem] place-items-center rounded-[var(--radius-lg)] border border-border bg-surface p-8 text-center">
            <div className="max-w-md">
              <span className="mx-auto grid size-14 place-items-center rounded-[var(--radius-md)] border border-border bg-surface-subtle">
                <FileText className="size-6 text-accent" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-semibold">
                Résumé PDF pending
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                The document has not been supplied yet. Preview, print, and
                download controls will be enabled when the approved PDF is
                added.
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
