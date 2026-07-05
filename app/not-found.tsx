import { ArrowLeft, FolderOpen } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="site-container grid min-h-[70svh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404 · Not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This route doesn’t exist.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
          The page may have moved, or the address may be incomplete. Continue
          from a known route.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden /> Home
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/projects">
              <FolderOpen className="size-4" aria-hidden /> Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
