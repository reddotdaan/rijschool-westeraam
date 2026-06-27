import type { Metadata } from "next";
import { RatesTable } from "@/components/tarieven/rates-table";
import { TarievenPageHeader } from "@/components/tarieven/tarieven-page-header";
import { LinkButton } from "@/components/ui/link-button";
import { beRates } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Aanhangwagen (BE) tarieven",
  description:
    "BE-rijbewijs halen bij Rijschool Westeraam. Losse rijles € 60/uur, CBR-examen € 280,-. Opleiding in één dag.",
};

export default function TarievenAanhangwagenPage() {
  return (
    <>
      <TarievenPageHeader
        title="Aanhangwagen (BE) tarieven"
        description="BE-rijbewijs al binnen één dag halen. Inclusief bijzondere verrichtingen en verkeersdeelname."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">BE-tarieven</h2>
            <p className="mt-4 text-gray-600">
              Efficiënte BE-opleiding met theorie en praktijk. Neem contact op voor beschikbaarheid
              en het actuele tarief van de dagopleiding.
            </p>
          </div>
          <div className="mt-10">
            <RatesTable rows={beRates} />
          </div>
          <div className="mt-10 text-center">
            <LinkButton href="/contact?opleiding=Aanhangwagen (BE)" size="lg">
              Meld je aan voor BE-opleiding
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
