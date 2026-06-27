"use client";

import { PackageCards } from "@/components/tarieven/package-cards";
import { autoPackages } from "@/lib/pricing-data";

export function TarievenAutoPackages() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">
            Onze Autorijles Pakketten
          </h2>
          <p className="mt-4 text-gray-600">
            Dé nummer 1 rijschool van Nederland — met trots het hoogste slagingspercentage, al 2 jaar
            op rij. Kies het pakket dat bij jou past, van instap tot compleet.
          </p>
        </div>

        <div className="mt-12">
          <PackageCards
            packages={autoPackages}
            columns={4}
            opleiding="Auto (B)"
            size="md"
          />
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
          Betaling in termijnen is mogelijk (€ 12,50 administratiekosten per termijn). Termijnen na
          het 1e, 10e, 20e en 30e rijlesuur. Openstaande facturen dienen vóór het praktijkexamen
          voldaan te zijn.
        </p>
      </div>
    </section>
  );
}
