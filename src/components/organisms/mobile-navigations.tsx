"use client";

import Link from "next/link";

interface Navigation {
  label: string;
  href: string;
}

interface MobileNavigationsProps {
  items: Navigation[];
}

export default function MobileNavigations({ items }: MobileNavigationsProps) {
  return (
    <div className="md:hidden border-t h-[calc(100vh-4rem)] flex flex-col justify-between">
      <nav className="flex flex-col space-y-2 p-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-end py-4 border-t">
        <Link className="px-6" href="/login">
          Login & Signup
        </Link>
      </div>
    </div>
  );
}
