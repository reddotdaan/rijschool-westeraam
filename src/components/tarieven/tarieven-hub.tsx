import Link from "next/link";
import { tarievenCategories } from "@/lib/pricing-data";
import { TarievenPageHeader } from "@/components/tarieven/tarieven-page-header";

export function TarievenHub() {
  return (
    <>
      <TarievenPageHeader
        title="Tarieven"
        description="Bekijk onze tarieven per opleiding — van autorijles en motor tot scooter en aanhangwagen. Transparante pakketten en losse lestarieven."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {tarievenCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:border-westeraam-blue/20 hover:shadow-md sm:p-8"
              >
                <p className="text-sm font-semibold text-westeraam-orange">{category.license}</p>
                <h2 className="mt-1 text-2xl font-bold text-westeraam-blue group-hover:text-westeraam-orange">
                  {category.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-gray-900">{category.priceFrom}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{category.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-westeraam-blue group-hover:underline">
                  Bekijk tarieven →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
