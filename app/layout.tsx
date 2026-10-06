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
  title: {
    default: "Awakened Perspective Press",
    template: "%s | Awakened Perspective Press",
  },
  description:
    "Awakened Perspective Press helps authors turn their stories, ideas, and experiences into professionally published books—and bring those books to the world.",
  keywords: [
    "book publishing",
    "self publishing",
    "author services",
    "book publishing services",
    "book marketing",
    "author platform",
    "Awakened Perspective Press",
  ],
  authors: [{ name: "Awakened Perspective Press" }],
  creator: "Awakened Perspective Press",
  metadataBase: new URL("https://awakenedperspectivepress.com"),

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Awakened Perspective Press",
    description:
      "Your Story. Your Voice. Your Book.",
    url: "https://awakenedperspectivepress.com",
    siteName: "Awakened Perspective Press",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Awakened Perspective Press",
    description:
      "Your Story. Your Voice. Your Book.",
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
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}