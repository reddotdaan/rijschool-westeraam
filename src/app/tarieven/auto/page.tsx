import type { Metadata } from "next";
import { RatesTable } from "@/components/tarieven/rates-table";
import { TarievenAutoPackages } from "@/components/tarieven/tarieven-packages-section";
import { TarievenPageHeader } from "@/components/tarieven/tarieven-page-header";
import { autoLooseRates } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Autorijles tarieven",
  description:
    "Autorijles pakketten van Rijschool Westeraam — Light, Basis, Comfort en Premium vanaf € 2.420,-. Losse lestarieven en CBR-examens.",
};

export default function TarievenAutoPage() {
  return (
    <>
      <TarievenPageHeader
        title="Autorijles tarieven"
        description="Kies uit onze lespakketten Light, Basis, Comfort of Premium — inclusief online i-theorie en gratis theorieles. Of rij losse lessen."
      />
      <TarievenAutoPackages />
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">
              Losse lestarieven &amp; examens
            </h2>
            <p className="mt-4 text-gray-600">
              Wil je liever losse lessen rijden of heb je extra onderdelen nodig? Hieronder vind je
              onze transparante tarieven.
            </p>
          </div>
          <div className="mt-10">
            <RatesTable rows={autoLooseRates} />
          </div>
        </div>
      </section>
    </>
  );
}
