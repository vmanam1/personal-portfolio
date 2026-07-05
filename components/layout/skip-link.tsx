export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-[var(--radius-sm)] bg-accent px-4 py-3 text-sm font-medium text-accent-foreground focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-focus"
    >
      Skip to main content
    </a>
  );
}
