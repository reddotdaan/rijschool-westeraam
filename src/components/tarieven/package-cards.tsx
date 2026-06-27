"use client";

import { Card, Chip, cn } from "@heroui/react";
import { LinkButton } from "@/components/ui/link-button";

type Package = {
  name: string;
  price: string;
  includes: readonly string[];
  tagline?: string;
  featured?: boolean;
  badge?: string;
  hours?: string;
};

export function PackageCards({
  packages,
  columns = 3,
  opleiding,
  size = "md",
}: {
  packages: readonly Package[];
  columns?: 2 | 3 | 4;
  opleiding: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "grid items-stretch gap-6",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 xl:grid-cols-4",
      )}
    >
      {packages.map((pkg) => (
        <Card
          key={pkg.name}
          variant="default"
          className={cn(
            "flex flex-col border transition-all duration-300",
            pkg.featured
              ? "relative z-10 border-2 border-westeraam-orange shadow-lg shadow-westeraam-orange/10"
              : "border-gray-200/80 hover:border-westeraam-blue/20 hover:shadow-md",
          )}
        >
          {pkg.featured && pkg.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Chip color="accent" size="sm" variant="primary">
                <Chip.Label>{pkg.badge}</Chip.Label>
              </Chip>
            </div>
          )}
          <Card.Header className={cn("gap-2", pkg.featured && "pt-6")}>
            {pkg.tagline && (
              <p className="text-xs font-semibold uppercase tracking-wide text-westeraam-orange">
                {pkg.tagline}
              </p>
            )}
            <Card.Title className="text-xl text-westeraam-blue">{pkg.name}</Card.Title>
            <p className={cn("font-bold text-gray-900", size === "md" ? "text-3xl" : "text-2xl")}>
              {pkg.price}
            </p>
            {pkg.hours && <p className="text-sm text-gray-500">{pkg.hours}</p>}
          </Card.Header>
          <Card.Content className="flex-1 gap-4">
            {size === "md" && (
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Inclusief
              </p>
            )}
            <ul className={cn("space-y-2 text-sm text-gray-700", size === "md" && "space-y-3")}>
              {pkg.includes.map((item) => (
                <li key={item} className={size === "md" ? "flex items-start gap-2.5" : undefined}>
                  {size === "md" ? (
                    <>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-westeraam-orange"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </>
                  ) : (
                    <>• {item}</>
                  )}
                </li>
              ))}
            </ul>
          </Card.Content>
          <Card.Footer>
            <LinkButton
              href={`/contact?opleiding=${encodeURIComponent(opleiding)}&pakket=${encodeURIComponent(pkg.name)}`}
              fullWidth
              size={size === "md" ? "md" : "sm"}
            >
              {size === "md" ? "Aanmelden voor dit pakket" : "Aanmelden"}
            </LinkButton>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
