import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Mazyar Kawa - Full Stack Developer",
  description:
    "Welcome to the portfolio of Mazyar Kawa, a dedicated full stack developer. Explore my projects showcasing cutting-edge web applications, secure database systems, and advanced cybersecurity solutions. See how I turn creative ideas into digital experiences.",
  keywords: [
    "Mazyar",
    "Mazyar Kawa",
    "Frontend Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "Web Development",
    "Interactive Web Applications",
    "Database Systems",
    "Cybersecurity",
    "Digital Experiences",
    "Best Programmer in kurdistan",
    "Portfolio",
    "Next js developer",
  ],
  authors: [
    {
      name: "Mazyar Kawa",
    },
  ],
  metadataBase: new URL("https://mazyar.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mazyar Kawa - Full Stack Developer",
    description:
      "Welcome to the portfolio of Mazyar Kawa, a dedicated full stack developer.",
    images: ["https://mazyar.dev/opengraph-image.jpg"],
    url: "https://mazyar.dev/",
    siteName: "Mazyar Kawa",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#000319",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000319",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black-100 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
