import { ReactNode } from "react";
import ThemeToggle from "@/components/molecules/theme-toggle";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <ThemeToggle className="fixed top-2 right-2 z-50" />
      <main className="flex flex-col flex-1 items-center justify-center">
        {children}
      </main>
    </>
  );
}
