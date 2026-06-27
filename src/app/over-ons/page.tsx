import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons",
  description: `Meer over Rijschool Westeraam — al 25+ jaar dé rijschool van Elst en omgeving. Hoogste slagingspercentage van NL, actief in ${siteConfig.regions}.`,
};

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-westeraam-blue text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Over Rijschool Westeraam
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Dé beste rijschool van Elst en omgeving — al meer dan 25 jaar vertrouwd door generaties
            leerlingen in {siteConfig.regions}.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold text-westeraam-blue">Wie zijn wij?</h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {siteConfig.name} is een full-service rijschool voor auto, motor, scooter en
              aanhangwagen. Ons team bestaat uit WRM-gecertificeerde rijinstructeurs en
              -instructrices die je persoonlijk begeleiden van proefles tot examen.
            </p>
            <p>
              We zijn trots op ons slagingspercentage: al 2 jaar op rij het hoogste van Nederland
              — ver boven het landelijk gemiddelde. Mond-tot-mondreclame is onze referentie.
            </p>
            <p>
              Onze lespakketten zijn zo samengesteld dat rijlessen betaalbaar blijven voor
              iedereen. Betaling in termijnen is mogelijk, en elke woensdagavond kun je als
              leerling gratis theorieles volgen via Microsoft Teams (19:00–21:00).
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold text-westeraam-blue">Onze opleidingen</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.rijopleidingen.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-gray-200/80 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <span className="font-semibold text-westeraam-blue">{item.label}</span>
                  <span className="mt-1 block text-sm text-gray-500">Meer informatie →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold text-westeraam-blue">Kom langs of neem contact op</h2>
          <p className="mt-4 text-gray-600">
            {siteConfig.address}
            <br />
            {siteConfig.openingHours}
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" size="lg">
              Neem contact op
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
