import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-visible:ring-focus inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-4 text-sm font-medium transition-[color,background-color,border-color,transform] duration-[var(--duration-fast)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:bg-accent-hover border border-transparent",
        secondary:
          "border-border bg-surface text-foreground hover:bg-surface-subtle border",
        ghost:
          "text-muted-foreground hover:bg-surface-subtle hover:text-foreground",
      },
      size: {
        default: "h-11",
        small: "h-9 min-h-9 px-3",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  asChild,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
