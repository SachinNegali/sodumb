import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat, Kalam } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Hand-drawn / sketchbook typography.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  title,
  description: site.tagline,
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description: site.tagline,
    type: "website",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7ec",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sketch-paper text-sketch-ink">
        {children}
      </body>
    </html>
  );
}
