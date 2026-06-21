"use client";

import { useEffect, useState } from "react";
import { getSession, UserSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export function useSession() {
  const [session, setSession] = useState<UserSession | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function refreshSession() {
      const s = await getSession();
      if (mounted) {
        setSession(s);
        setInitialized(true);
      }
    }

    refreshSession();

    // Listen to Supabase auth changes and refresh session
    const sub = supabase?.auth.onAuthStateChange(() => {
      refreshSession();
    });

    window.addEventListener("storage", refreshSession);

    return () => {
      mounted = false;
      window.removeEventListener("storage", refreshSession);
      try {
        if (sub) {
          sub.data?.subscription?.unsubscribe();
        }
      } catch {}
    };
  }, []);

  return { session, initialized };
}
