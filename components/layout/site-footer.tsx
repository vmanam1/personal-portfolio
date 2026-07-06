import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { siteConfig } from "@/content/config/site";

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub", icon: FaGithub },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: FaLinkedin },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-container flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {siteConfig.footerDescription}
          </p>
        </div>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-focus"
            >
              <Icon className="size-4 shrink-0" aria-hidden focusable={false} />
              {label}
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
