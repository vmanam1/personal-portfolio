"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const options = [
  { value: "system", label: "System", icon: Laptop },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

export function ThemeMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="icon" aria-label="Choose color theme">
          <Sun
            className="size-5 scale-100 rotate-0 dark:scale-0 dark:-rotate-90"
            aria-hidden
          />
          <Moon
            className="absolute size-5 scale-0 rotate-90 dark:scale-100 dark:rotate-0"
            aria-hidden
          />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-40 rounded-[var(--radius-md)] border border-border bg-surface p-1 text-foreground shadow-[var(--shadow-popover)]"
        >
          <DropdownMenu.Label className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Appearance
          </DropdownMenu.Label>
          {options.map(({ value, label, icon: Icon }) => {
            const selected = theme === value;

            return (
              <DropdownMenu.Item
                key={value}
                onSelect={() => setTheme(value)}
                className={cn(
                  "flex min-h-10 cursor-default items-center gap-2 rounded-[var(--radius-sm)] px-2 text-sm outline-none focus:bg-surface-subtle",
                  selected && "text-accent",
                )}
              >
                <Icon className="size-4" aria-hidden />
                <span className="flex-1">{label}</span>
                {selected ? <Check className="size-4" aria-hidden /> : null}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
