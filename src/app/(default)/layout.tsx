"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/use-session";
import DefaultTemplate from "@/components/templates/default-template";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { session, initialized } = useSession();

  useEffect(() => {
    if (!initialized) return;
    if (session === null) {
      router.replace("/");
    }
  }, [initialized, session, router]);

  if (!initialized || session === null) {
    return null;
  }

  return <DefaultTemplate>{children}</DefaultTemplate>;
}
