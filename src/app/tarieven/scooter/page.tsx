import type { Metadata } from "next";
import { PackageCards } from "@/components/tarieven/package-cards";
import { RatesTable } from "@/components/tarieven/rates-table";
import { TarievenPageHeader } from "@/components/tarieven/tarieven-page-header";
import { scooterLooseRates, scooterPackages } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Scooterrijles tarieven",
  description:
    "Scooterrijbewijs (AM) halen bij Rijschool Westeraam vanaf € 415,-. 4 uur rijles en examen in één dag.",
};

export default function TarievenScooterPage() {
  return (
    <>
      <TarievenPageHeader
        title="Scooter / bromfiets tarieven"
        description="4 uur rijles op de Vespa Sprint en daarna meteen examen bij het CBR in Arnhem. Maximaal 3 leerlingen tegelijk."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">Scooterpakketten</h2>
          <div className="mt-8">
            <PackageCards packages={scooterPackages} columns={2} opleiding="Scooter (AM)" />
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-westeraam-blue">Losse tarieven</h3>
            <div className="mt-6">
              <RatesTable rows={scooterLooseRates} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
