import DefaultTemplate from "@/components/templates/default-template";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}
