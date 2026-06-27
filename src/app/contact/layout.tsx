import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Rijschool Westeraam in Elst — bel 0481-745245, WhatsApp 0481-354503 of meld je aan via het inschrijfformulier.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
