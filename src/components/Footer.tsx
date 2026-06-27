import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-westeraam-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-footer.png"
                alt={siteConfig.shortName}
                width={275}
                height={115}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-blue-100">
              Dé beste rijschool van Elst en omgeving — actief in {siteConfig.regions}. Al meer dan
              25 jaar persoonlijke begeleiding, het hoogste slagingspercentage van Nederland en een
              team van WRM-gecertificeerde instructeurs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-westeraam-orange">
              Rijopleidingen
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.rijopleidingen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tarieven"
                  className="text-sm text-blue-100 transition-colors hover:text-white"
                >
                  Alle tarieven
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-westeraam-orange">
              Snelle links
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-westeraam-orange">
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>
                <span className="block text-xs uppercase tracking-wide text-blue-300">Adres</span>
                {siteConfig.address}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-blue-300">
                  Telefoon
                </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
                <span className="block text-xs text-blue-300">{siteConfig.openingHours}</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-blue-300">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/31${siteConfig.whatsapp.replace(/-/g, "").replace(/^0/, "")}`}
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-blue-300">E-mail</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-blue-300">CBR</span>
                Rijschoolnummer {siteConfig.cbrNumber}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-blue-300">KvK</span>
                {siteConfig.kvkNumber}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800/80" />

      <div className="mx-auto max-w-7xl px-4 py-5 text-center sm:px-6">
        <p className="text-xs text-blue-200">
          © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
