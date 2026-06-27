import Image from "next/image";
import { Chip } from "@heroui/react";
import { ContactQuickActions } from "@/components/home/contact-quick-actions";
import { LinkButton } from "@/components/ui/link-button";
import { buttonHeroSecondaryClass } from "@/lib/heroui-theme";
import { heroImage } from "@/lib/homepage-data";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-westeraam-blue">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(249,115,22,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 lg:order-1">
            <Chip color="accent" size="sm" variant="soft" className="mb-5">
              <Chip.Label>CBR Rijschool {siteConfig.cbrNumber}</Chip.Label>
            </Chip>

            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Dé beste rijschool van Elst en omgeving!
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:mt-6 sm:text-lg">
              Hoogste slagingspercentage van Nederland, vaste WRM-gecertificeerde instructeurs en
              elke woensdagavond gratis theorieles via Microsoft Teams (19:00–21:00).
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <LinkButton href="/contact" size="lg" className="w-full sm:w-auto">
                Vrijblijvende Proefles Aanvragen
              </LinkButton>
              <LinkButton
                href="/tarieven"
                variant="outline"
                size="lg"
                className={`w-full sm:w-auto ${buttonHeroSecondaryClass}`}
              >
                Bekijk Tarieven
              </LinkButton>
            </div>

            <div className="mt-8">
              <ContactQuickActions variant="hero" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30 ring-1 ring-white/10 sm:rounded-3xl lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-3xl bg-westeraam-orange/20 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src={heroImage}
                  alt="Lesauto van Rijschool Westeraam"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-westeraam-blue/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-westeraam-blue/50 lg:via-transparent lg:to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
