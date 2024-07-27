import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
