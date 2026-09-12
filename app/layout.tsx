import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { seoGraph } from "@/lib/seo-graph";
import { DESCRIPTION, SITE_URL, TITLE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE}: weekday podcast for decisions in production`,
    template: `%s · ${TITLE}`,
  },
  description: DESCRIPTION,
  authors: [{ name: "Alessandro Sappia" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "https://media.inprod.fm/podcast.xml" },
  },
  openGraph: {
    type: "website",
    siteName: TITLE,
    locale: "en_GB",
    url: SITE_URL,
    title: `${TITLE}: weekday podcast for decisions in production`,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "In Prod.: one tech story a day, and the call I'd actually make.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE}: weekday podcast for decisions in production`,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${bebas.variable} ${ibm.variable}`}>
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-ink text-cream antialiased">
        <JsonLd data={seoGraph()} />
        <Script
          src="https://plausible.io/js/pa-vzeLBw9ZYwwzzds39KUZt.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()`}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
