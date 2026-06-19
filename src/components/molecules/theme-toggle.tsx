"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <SunMoon />;

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
