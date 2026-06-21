"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useIsClient } from "@/hooks/use-is-client";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient)
    return (
      <Button
        className={cn("cursor-pointer p-0", className)}
        variant="link"
        asChild
      >
        <SunMoon />
      </Button>
    );

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      className={cn("cursor-pointer p-0", className)}
      variant="link"
      onClick={toggle}
      asChild
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
