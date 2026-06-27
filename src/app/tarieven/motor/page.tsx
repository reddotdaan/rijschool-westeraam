import type { Metadata } from "next";
import { PackageCards } from "@/components/tarieven/package-cards";
import { RatesTable } from "@/components/tarieven/rates-table";
import { TarievenPageHeader } from "@/components/tarieven/tarieven-page-header";
import { motorLooseRates, motorPackages } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Motorrijles tarieven",
  description:
    "Motorrijles pakketten van Rijschool Westeraam vanaf € 980,-. AVB en AVD examens, betalen in termijnen mogelijk.",
};

export default function TarievenMotorPage() {
  return (
    <>
      <TarievenPageHeader
        title="Motorrijles tarieven"
        description="Persoonlijke motorlessen van gepassioneerde WRM-gecertificeerde instructeurs — van AVB instap tot compleet met AVD."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">
            Motorpakketten
          </h2>
          <div className="mt-8">
            <PackageCards packages={motorPackages} opleiding="Motor (A)" />
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-westeraam-blue">Losse tarieven</h3>
            <div className="mt-6">
              <RatesTable rows={motorLooseRates} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
