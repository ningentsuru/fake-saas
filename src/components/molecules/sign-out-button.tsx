"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

type VariantType =
  | "default"
  | "link"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | null
  | undefined;
interface SignOutButtonProps {
  className?: string;
  variant?: VariantType;
}

export default function SignOutButton({
  className,
  variant = "default",
}: SignOutButtonProps) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/login");
  }

  return (
    <Button onClick={handleSignOut} variant={variant} className={className}>
      Sign out
    </Button>
  );
}
