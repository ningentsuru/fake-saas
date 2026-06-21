import { supabase } from "./supabase";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  user_metadata?: {
    name: string;
    full_name: string;
  };
}

export interface UserSession {
  user: AuthUser;
  expiresAt: number;
}

// Supabase manages auth state; no client-side custom event needed.

export async function signUp({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name?: string;
}): Promise<
  | { success: true; session: UserSession | null; message?: string }
  | { success: false; error: string }
> {
  if (!supabase) {
    return { success: false, error: "Supabase is not configured." };
  }

  const res = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });
  if (res.error) return { success: false, error: res.error.message };

  const { data } = await supabase.auth.getSession();
  const s = data.session;
  if (!s) {
    return {
      success: true,
      session: null,
      message: "Check your email to confirm your account before logging in.",
    };
  }

  const user: AuthUser = {
    id: s.user.id,
    email: s.user.email || "",
    name: s.user.user_metadata?.name || s.user.user_metadata?.full_name || "",
    user_metadata: (s.user.user_metadata || { name: "", full_name: "" }) as {
      name: string;
      full_name: string;
    },
  };

  const expiresAt = s.expires_at
    ? s.expires_at * 1000
    : Date.now() + 1000 * 60 * 60 * 24 * 7;
  return { success: true, session: { user, expiresAt } };
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<
  { success: true; session: UserSession } | { success: false; error: string }
> {
  if (!supabase) {
    return { success: false, error: "Supabase is not configured." };
  }

  const res = await supabase.auth.signInWithPassword({ email, password });
  if (res.error) return { success: false, error: res.error.message };

  const { data } = await supabase.auth.getSession();
  const s = data.session;
  if (!s) return { success: false, error: "No session returned" };

  const user: AuthUser = {
    id: s.user.id,
    email: s.user.email || "",
    name: s.user.user_metadata?.name || s.user.user_metadata?.full_name || "",
    user_metadata: (s.user.user_metadata || { name: "", full_name: "" }) as {
      name: string;
      full_name: string;
    },
  };

  const expiresAt = s.expires_at
    ? s.expires_at * 1000
    : Date.now() + 1000 * 60 * 60 * 24 * 7;

  return { success: true, session: { user, expiresAt } };
}

export async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function getSession(): Promise<UserSession | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  const s = data.session;
  if (!s) return null;

  const user: AuthUser = {
    id: s.user.id,
    email: s.user.email || "",
    name: s.user.user_metadata?.name || s.user.user_metadata?.full_name || "",
    user_metadata: (s.user.user_metadata || { name: "", full_name: "" }) as {
      name: string;
      full_name: string;
    },
  };

  const expiresAt = s.expires_at ? s.expires_at * 1000 : Date.now();
  if (expiresAt < Date.now()) {
    await signOut();
    return null;
  }

  return { user, expiresAt };
}

export async function isAuthenticated() {
  return Boolean(await getSession());
}

// No custom event name exported — use Supabase's onAuthStateChange instead.
