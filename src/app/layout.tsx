import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raunak Ray | Full-Stack Developer",
  description:
    "Raunak Ray is a Full-Stack Developer from Kolkata, India, specializing in scalable web applications, modern UI/UX, and high-performance software solutions using Next.js, React, Node.js, and PostgreSQL.",
  keywords: [
    "Raunak Ray",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer Kolkata",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Raunak Ray" }],
  creator: "Raunak Ray",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    title: "Raunak Ray | Full-Stack Developer",
    description:
      "Building scalable, high-performance web applications with clean architecture and exceptional user experiences.",
    url: "https://yourportfolio.com",
    siteName: "Raunak Ray Portfolio",
    images: [
      {
        url: "/image.jpeg",
        width: 1200,
        height: 630,
        alt: "Raunak Ray Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raunak Ray | Full-Stack Developer",
    description:
      "Building scalable, modern full-stack applications with Next.js, React, and Node.js.",
    images: ["/image.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        {/* 🌤 Background Image */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/cloud_bg.png"
            alt="background"
            className="w-full h-full object-fill"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
        </div>

        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
