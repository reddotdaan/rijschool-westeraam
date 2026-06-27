import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyWhatsAppButton } from "@/components/StickyWhatsAppButton";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.shortName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Rijschool Westeraam in Elst — hoogste slagingspercentage van NL. Autorijles, motor, scooter en BE in Elst, Arnhem, Nijmegen, Huissen, Bemmel en omgeving.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyWhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
