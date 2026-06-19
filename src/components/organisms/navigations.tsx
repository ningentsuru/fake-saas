"use client";

import Link from "next/link";
import ThemeToggle from "@/components/molecules/theme-toggle";

interface Navigation {
  label: string;
  href: string;
}

interface NavigationsProps {
  items: Navigation[];
}
export default function Navigations({ items }: NavigationsProps) {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium pr-6">
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}
