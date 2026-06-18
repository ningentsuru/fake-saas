"use client";

import Link from "next/link";

interface Navigation {
  label: string;
  href: string;
}

interface MobileNavigationsProps {
  items: Navigation[];
  onToggleMobile?: () => void;
}

export default function MobileNavigations({
  items,
  onToggleMobile,
}: MobileNavigationsProps) {
  return (
    <div className="md:hidden border-t h-[calc(100vh-4rem)] flex flex-col justify-between">
      <nav className="flex flex-col space-y-2 p-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => {
              onToggleMobile?.();
            }}
            className="block py-2"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-end py-4 border-t">
        <Link
          className="px-6 block py-2"
          href="/login"
          onClick={() => onToggleMobile?.()}
        >
          Login & Signup
        </Link>
      </div>
    </div>
  );
}
