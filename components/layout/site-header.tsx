"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeMenu } from "@/components/ui/theme-menu";
import {
  primaryNavigation,
  utilityNavigation,
} from "@/content/config/navigation";
import { siteConfig } from "@/content/config/site";
import { cn } from "@/lib/utils";

function isCurrentRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

function NavigationLink({
  href,
  label,
  pathname,
  onNavigate,
}: {
  href: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
}) {
  const current = isCurrentRoute(pathname, href);

  return (
    <Link
      href={href}
      prefetch={false}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className={cn(
        "relative flex min-h-11 items-center rounded-[var(--radius-sm)] px-3 text-sm font-medium outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus",
        current ? "text-foreground" : "text-muted-foreground",
      )}
    >
      {label}
      {current ? (
        <span
          className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigation = [...primaryNavigation, ...utilityNavigation];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-3 rounded-[var(--radius-sm)] outline-none focus-visible:ring-2 focus-visible:ring-focus"
        >
          <span className="grid size-8 place-items-center rounded-[var(--radius-sm)] border border-accent/40 bg-accent/10 font-mono text-xs font-semibold text-accent">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-sm font-semibold sm:inline">
            {siteConfig.name}
          </span>
          <span className="sr-only">, home</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center lg:flex"
        >
          {primaryNavigation.map((item) => (
            <NavigationLink key={item.href} {...item} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center sm:flex">
            {utilityNavigation.map((item) => (
              <NavigationLink key={item.href} {...item} pathname={pathname} />
            ))}
          </div>
          <ThemeMenu />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,24rem)] flex-col border-l border-border bg-background p-6 shadow-2xl outline-none lg:hidden">
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="text-base font-semibold">
                    Navigation
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="size-5" aria-hidden />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1"
                >
                  {navigation.map((item) => (
                    <NavigationLink
                      key={item.href}
                      {...item}
                      pathname={pathname}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </nav>
                <p className="mt-auto text-sm text-muted-foreground">
                  {siteConfig.title}
                </p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
