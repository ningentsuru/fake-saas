"use client";

import Link from "next/link";
import { useState } from "react";
import { Atom, Menu, X } from "lucide-react";

import { Button } from "@/components/atoms/button";
import ThemeToggle from "@/components/molecules/theme-toggle";
import Navigations from "@/components/organisms/navigations";
import MobileNavigations from "@/components/organisms/mobile-navigations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navigation, setNavigation] = useState([
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
    {
      label: "Login & Signup",
      href: "/login",
    },
  ]);

  function toggleMobileNavigation() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center px-6">
          <Atom />
          <span className="font-bold inline-block">Fake-SaaS</span>
        </Link>

        <Navigations items={navigation} />

        <div className="flex items-center px-6 md:hidden">
          <ThemeToggle className="cursor-pointer" />
          <Button
            className="md:hidden"
            onClick={toggleMobileNavigation}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileNavigations
          items={navigation.filter((item) => item.href !== "/login")}
        />
      )}
    </header>
  );
}
