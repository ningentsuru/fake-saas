"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useIsClient } from "@/hooks/use-is-client";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) return <SunMoon />;

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      className="cursor-pointer p-0"
      variant="link"
      onClick={toggle}
      asChild
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
