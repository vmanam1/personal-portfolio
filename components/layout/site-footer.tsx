import Link from "next/link";

import { siteConfig } from "@/content/config/site";

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-container flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-sm)] border border-border px-3 text-sm text-muted-foreground outline-none hover:border-accent/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus"
            >
              {label}
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
