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
    default: "CodeSpes | KI-Automatisierung für Shopify & E-Commerce",
    template: "%s | CodeSpes",
  },

  description:
    "CodeSpes entwickelt KI-Automatisierungen für Shopify- und E-Commerce-Unternehmen. Automatisiere Produktdaten, Kundenservice, Retouren, E-Mails und interne Workflows.",

  keywords: [
    "Shopify Automatisierung",
    "E-Commerce Automatisierung",
    "KI Automatisierung",
    "AI Automation",
    "Shopify AI",
    "Workflow Automation",
    "Customer Support Automation",
    "Returns Automation",
    "Product Automation",
    "CodeSpes",
  ],

  authors: [{ name: "CodeSpes" }],
  creator: "CodeSpes",

  metadataBase: new URL("https://www.codespes.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CodeSpes | KI-Automatisierung für Shopify & E-Commerce",
    description:
      "Automatisiere Shopify- und E-Commerce-Prozesse mit KI – von Produktdaten und Support bis zu Retouren und E-Mail-Workflows.",
    url: "https://www.codespes.com",
    siteName: "CodeSpes",
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeSpes | KI-Automatisierung für Shopify & E-Commerce",
    description:
      "KI-Automatisierung für Shopify, Kundenservice, Retouren, Produktdaten und E-Commerce-Workflows.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
