import { LinkButton } from "@/components/ui/link-button";
import { cbrStatsUrl } from "@/lib/homepage-data";
import { siteConfig } from "@/lib/site-config";

export function CbrSection() {
  return (
    <section className="bg-westeraam-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Hoogste slagingspercentage!</h2>
          <p className="mt-4 text-blue-100">
            Ons slagingspercentage ligt ver boven het landelijk gemiddelde. CBR rijschoolnummer{" "}
            <strong className="text-white">{siteConfig.cbrNumber}</strong> — al 2 jaar op rij het
            hoogste van Nederland.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href={cbrStatsUrl} size="lg" className="w-full sm:w-auto">
              Bekijk CBR-rijschoolgegevens
            </LinkButton>
            <LinkButton
              href="/tarieven"
              variant="outline"
              size="lg"
              className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
            >
              Bekijk onze pakketten
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
