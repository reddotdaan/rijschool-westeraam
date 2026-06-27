import { siteConfig } from "@/lib/site-config";

export function WelcomeSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-westeraam-orange">
          Welkom bij {siteConfig.shortName}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-westeraam-blue sm:text-3xl">
          Mond-tot-mondreclame is onze referentie
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
          Al meer dan 25 jaar dé rijschool van Elst en omgeving. Wij begeleiden je persoonlijk
          bij auto, motor, scooter of aanhangwagen — actief in {siteConfig.regions}.
        </p>
      </div>
    </section>
  );
}
