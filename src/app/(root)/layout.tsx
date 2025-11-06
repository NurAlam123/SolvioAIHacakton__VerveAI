export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-4xl mx-auto h-svh md:h-screen md:grid md:grid-cols-[1fr_30%] md:gap-2 pt-6 md:py-6 px-2 relative">
      {children}
    </main>
  );
}
