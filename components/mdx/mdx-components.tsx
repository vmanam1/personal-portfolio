import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="scroll-mt-24 border-t border-[var(--color-border)] pt-12 text-2xl font-semibold tracking-tight first:border-t-0 first:pt-0 sm:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="scroll-mt-24 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="leading-8 text-muted-foreground" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="grid list-disc gap-3 pl-6 leading-7 text-muted-foreground marker:text-[var(--color-accent)]"
      {...props}
    >
      {children}
    </ul>
  ),
  a: ({ children, ...props }) => (
    <a
      className="rounded-sm text-accent underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-focus"
      {...props}
    >
      {children}
    </a>
  ),
};
