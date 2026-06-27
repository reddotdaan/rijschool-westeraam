import Link from "next/link";
import { Card } from "@heroui/react";
import { AwardIcon, ChartIcon, TeamsIcon } from "@/components/home/hero-icons";
import { homepageUsps } from "@/lib/homepage-data";

const iconByIndex = [ChartIcon, AwardIcon, TeamsIcon, AwardIcon, ChartIcon, TeamsIcon] as const;

export function UspBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {homepageUsps.map(({ title, description, href, cta }, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];
            return (
              <Card
                key={title}
                variant="default"
                className="flex flex-col border border-gray-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Card.Content className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-westeraam-blue/10 text-westeraam-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-westeraam-blue sm:text-lg">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{description}</p>
                    </div>
                  </div>
                  <Link
                    href={href}
                    className="mt-auto text-sm font-medium text-westeraam-orange hover:underline"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {cta} →
                  </Link>
                </Card.Content>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
