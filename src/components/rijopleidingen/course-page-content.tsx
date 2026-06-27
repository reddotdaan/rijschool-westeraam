"use client";

import { Card } from "@heroui/react";
import { CourseFaqSection } from "@/components/rijopleidingen/course-faq-section";
import { LinkButton } from "@/components/ui/link-button";
import { courseFaqs } from "@/lib/course-faq-data";
import type { CoursePageData } from "@/lib/course-pages-data";
import { siteConfig } from "@/lib/site-config";

export function CoursePageContent({ course }: { course: CoursePageData }) {
  const contactHref = `/contact?opleiding=${encodeURIComponent(course.contactCourse)}`;

  return (
    <>
      <section className="bg-westeraam-blue text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-westeraam-orange">
            {course.license}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            {course.intro}
          </p>
          <p className="mt-4 text-xl font-semibold text-white">{course.priceFrom}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href={contactHref} size="lg" className="w-full sm:w-auto">
              Direct inschrijven
            </LinkButton>
            <LinkButton
              href={course.tarievenHref}
              variant="outline"
              size="lg"
              className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
            >
              Bekijk tarieven
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">Hoe werkt het?</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {course.steps.map((step, index) => (
              <li key={step.title}>
                <Card variant="default" className="h-full border border-gray-200/80 bg-white">
                  <Card.Content className="gap-3 p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-westeraam-orange text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-westeraam-blue">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                  </Card.Content>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">
            Waarom bij {siteConfig.shortName}?
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {course.usps.map((usp) => (
              <li
                key={usp}
                className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-gray-50 p-5"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-westeraam-orange"
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
                <span className="text-sm leading-relaxed text-gray-700">{usp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CourseFaqSection faqs={courseFaqs[course.slug]} />

      <section className="border-t border-gray-200 bg-westeraam-blue">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Klaar om te starten?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Schrijf je in of bel ons op {siteConfig.phone}. We helpen je graag verder in{" "}
            {siteConfig.regions}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href={contactHref} size="lg">
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
    </>
  );
}
