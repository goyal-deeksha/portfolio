// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Deeksha Bansal | Next.js Developer Specialising in SEO and Performance",
  description:
    "Portfolio of Deeksha Bansal — Next.js Developer specialising in technical SEO, Core Web Vitals optimization, React, and high-performance web applications.",
  keywords: [
    "Next.js Developer",
    "SEO Specialist",
    "Core Web Vitals",
    "React Developer",
    "Tailwind CSS",
    "Strapi",
  ],
  authors: [{ name: "Deeksha Bansal" }],
  openGraph: {
    title:
      "Deeksha Bansal | Next.js Developer Specialising in SEO and Performance",
    description:
      "Building fast, accessible, and high-ranking web applications that convert visitors into users.",
    url: "https://deeksha-bansal-portfolio.vercel.app",
    siteName: "Deeksha Bansal Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
