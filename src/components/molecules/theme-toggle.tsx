"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/button";
import { Moon, Sun, SunMoon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <SunMoon />;

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button className={className} onClick={toggle}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
