import type { CourseFaqItem } from "@/lib/course-faq-data";

export function CourseFaqSection({ faqs }: { faqs: readonly CourseFaqItem[] }) {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">Veelgestelde vragen</h2>
          <p className="mt-4 text-gray-600">
            Antwoorden op de meest gestelde vragen over deze opleiding.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((item) => (
            <details key={item.question} className="group px-5 py-4 sm:px-6">
              <summary className="cursor-pointer list-none font-medium text-gray-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="shrink-0 text-westeraam-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
