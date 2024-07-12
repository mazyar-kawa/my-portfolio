import "@/styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className="bg-black-100 text-white">{children}</body>
      </Suspense>
    </html>
  );
}
