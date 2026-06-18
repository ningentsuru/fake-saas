import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Header />

      <main className="flex flex-col flex-1 items-center justify-center">
        {children}
      </main>

      <Footer />
    </>
  );
}
