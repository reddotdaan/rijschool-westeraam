import { Card } from "@heroui/react";
import { LinkButton } from "@/components/ui/link-button";
import { homepagePackages } from "@/lib/pricing-data";

function PackageIcon({ type }: { type: (typeof homepagePackages)[number]["title"] }) {
  const className = "h-7 w-7";

  if (type === "Auto") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 17h14M6 17l1-5h10l1 5M7 12l1.5-4h7L17 12" />
        <circle cx="8" cy="17" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16" cy="17" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "Motor") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8M10 12l2-4 4 2 2 7" />
      </svg>
    );
  }

  if (type === "Scooter") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6M11 12l1-3h4l1 3" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h12M6 14l1-4h8l1 4M8 10V7h6v3" />
      <circle cx="7" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PackagesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">
            Populaire Rijopleidingen
          </h2>
          <p className="mt-3 text-gray-600">
            Auto, motor, scooter of aanhangwagen — wij begeleiden je van proefles tot examen, in
            Elst, Arnhem, Nijmegen, Huissen, Bemmel en omgeving.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 md:gap-8">
          {homepagePackages.map((pkg) => (
            <Card
              key={pkg.title}
              variant="default"
              className="flex flex-col border border-gray-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-westeraam-blue/20 hover:shadow-lg"
            >
              <Card.Header className="gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-westeraam-blue/10 text-westeraam-blue">
                  <PackageIcon type={pkg.title} />
                </div>
                <div>
                  <Card.Title className="text-xl text-westeraam-blue">{pkg.title}</Card.Title>
                  <Card.Description className="mt-0.5 text-westeraam-orange">
                    {pkg.license}
                  </Card.Description>
                </div>
              </Card.Header>

              <Card.Content className="flex-1 gap-3">
                <p className="text-lg font-semibold text-gray-900">{pkg.price}</p>
                <p className="text-sm leading-relaxed text-gray-600">{pkg.description}</p>
              </Card.Content>

              <Card.Footer>
                <LinkButton href={pkg.href} brand="blue" fullWidth size="md">
                  {pkg.cta}
                </LinkButton>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
