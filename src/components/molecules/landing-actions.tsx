"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import SignOutButton from "@/components/molecules/sign-out-button";
import ThemeToggle from "@/components/molecules/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "@/hooks/use-session";
import { useIsClient } from "@/hooks/use-is-client";
import { Loader } from "lucide-react";

export default function LandingActions() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const lastTouchY = useRef<number | null>(null);
  const { session } = useSession();
  const isClient = useIsClient();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 8) {
        setIsHidden(false);
      } else if (scrollDelta > 6) {
        setIsHidden(true);
      } else if (scrollDelta < -6) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    function handleTouchStart(event: TouchEvent) {
      lastTouchY.current = event.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(event: TouchEvent) {
      const currentTouchY = event.touches[0]?.clientY;

      if (lastTouchY.current === null || currentTouchY === undefined) {
        lastTouchY.current = currentTouchY ?? null;
        return;
      }

      const touchDelta = currentTouchY - lastTouchY.current;

      if (window.scrollY <= 8) {
        setIsHidden(false);
      } else if (touchDelta < -4) {
        setIsHidden(true);
      } else if (touchDelta > 4) {
        setIsHidden(false);
      }

      lastTouchY.current = currentTouchY;
    }

    function handleTouchEnd() {
      lastTouchY.current = null;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-2 right-2 z-50 text-lg bg-background border border-foreground rounded-2xl p-2 transition-transform duration-300 ease-out flex items-center space-x-1",
        isHidden && "-translate-y-[calc(100%+0.5rem)]",
      )}
    >
      {isClient ? (
        session ? (
          <>
            <Button variant="link" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <SignOutButton className="cursor-pointer" variant="link" />
            <ThemeToggle />
          </>
        ) : (
          <>
            <Button variant="link" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <ThemeToggle />
          </>
        )
      ) : (
        <div className="flex items-center justify-center h-8 w-8">
          <Loader className="animate-[spin_1.5s_linear_infinite]" />
        </div>
      )}
    </div>
  );
}
