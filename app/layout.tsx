import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://awakenedperspectivepress.com"),

  title: {
    default:
      "Awakened Perspective Press | Publishing Support for Authors",
    template: "%s | Awakened Perspective Press",
  },

  description:
    "Awakened Perspective Press helps authors navigate the journey from manuscript to professionally published book, with publishing guidance, self-publishing support, ISBN and distribution assistance, book marketing, and author launch services.",

  keywords: [
    "Awakened Perspective Press",
    "book publishing",
    "publishing services",
    "publishing company",
    "self publishing",
    "self-publishing help",
    "author services",
    "author publishing services",
    "book publishing services",
    "book marketing",
    "book launch",
    "author marketing",
    "ISBN services",
    "book distribution",
    "independent publishing",
    "AI-assisted publishing",
  ],

  authors: [
    {
      name: "Awakened Perspective Press",
      url: "https://awakenedperspectivepress.com",
    },
  ],

  creator: "Awakened Perspective Press",
  publisher: "Awakened Perspective Press",

  alternates: {
    canonical: "https://awakenedperspectivepress.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

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
    type: "website",
    url: "https://awakenedperspectivepress.com",
    siteName: "Awakened Perspective Press",
    title:
      "Awakened Perspective Press | Publishing Support for Authors",
    description:
      "Your Story. Your Voice. Your Book. Publishing guidance, self-publishing support, marketing, distribution, and author launch services.",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title:
      "Awakened Perspective Press | Publishing Support for Authors",
    description:
      "Your Story. Your Voice. Your Book. Publishing guidance, self-publishing support, marketing, distribution, and author launch services.",
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
      <body className="min-h-screen flex flex-col">
        <StructuredData />

        {children}

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18497917004"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18497917004');
          `}
        </Script>

        {/* Meta Pixels: Both Publishing Brands */}
        <Script id="meta-pixels" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            // Existing Pixel: Awakening Perspective Press
            fbq('init', '1387213283129142');

            // New Pixel: Understanding External Reflections
            fbq('init', '1057775080418962');

            // Send PageView to both initialized Pixels
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel fallback for browsers without JavaScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1387213283129142&ev=PageView&noscript=1"
            alt=""
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1057775080418962&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}