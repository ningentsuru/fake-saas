export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col flex-1 items-center justify-center">
        {children}
      </main>
    </>
  );
}
