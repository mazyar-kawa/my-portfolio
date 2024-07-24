import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import { Metadata } from "next";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Navbar />
      {children}
    </main>
  );
}
