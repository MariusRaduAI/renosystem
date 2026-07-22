import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/de";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import MobileActionBar from "@/components/MobileActionBar";
import IntroOverlay from "@/components/IntroOverlay";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renosystem.de"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  keywords: [
    "Komplettsanierung",
    "Bausanierung",
    "Haussanierung",
    "Wohnungsrenovierung",
    "Innenausbau",
    "Trockenbau",
    "Renovierung Bad Rappenau",
    "Renovierung Heilbronn",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.metaDescription,
    locale: "de_DE",
    type: "website",
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${archivo.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-concrete-100 text-concrete-950">
        <SmoothScrollProvider>
          <IntroOverlay />
          <CustomCursor />
          {children}
          <MobileActionBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
