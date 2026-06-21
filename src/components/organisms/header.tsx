"use client";

import Link from "next/link";
import { useState } from "react";
import { Atom, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/molecules/theme-toggle";
import Navigations from "@/components/organisms/navigations";
import MobileNavigations from "@/components/organisms/mobile-navigations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigation = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Inventory",
      href: "/inventory",
    },
    {
      label: "Point of Sale",
      href: "/point-of-sale",
    },
    {
      label: "Price Check",
      href: "/price-check",
    },
  ];

  function toggleMobileNavigation() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-(--header-height) items-center justify-between">
        <Link href="/" className="flex items-center ml-6">
          <Atom />
          <span className="font-bold inline-block">Fake-SaaS</span>
        </Link>

        <Navigations items={navigation} />

        <div className="flex items-center space-x-2 mr-3 md:hidden">
          <ThemeToggle />
          <Button
            className="md:hiddencursor-pointer p-0"
            aria-label="Toggle menu"
            variant="link"
            onClick={toggleMobileNavigation}
            asChild
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileNavigations
          items={navigation.filter((item) => item.href !== "/login")}
          onToggleMobile={() => {
            // 1. Changed to camelCase
            toggleMobileNavigation();
          }}
        />
      )}
    </header>
  );
}
