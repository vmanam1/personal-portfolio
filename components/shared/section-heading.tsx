import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          prefetch={false}
          className="w-fit rounded-sm text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-focus"
        >
          {linkLabel} <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}
