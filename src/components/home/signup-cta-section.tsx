import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/site-config";

export function SignupCtaSection() {
  return (
    <section className="border-t border-gray-200 bg-westeraam-blue">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Klaar om te starten?</h2>
        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Schrijf je vandaag in voor een vrijblijvende proefles of neem contact op — wij helpen je
          graag verder in {siteConfig.regionsShort} en omgeving.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/contact" size="lg">
            Inschrijfformulier
          </LinkButton>
          <LinkButton
            href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Bel {siteConfig.phone}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
