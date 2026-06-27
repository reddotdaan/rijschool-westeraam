import { Card } from "@heroui/react";
import { StarRating } from "@/components/home/star-rating";
import { googleReviews, googleReviewsSummary, homepageFaq } from "@/lib/google-reviews-data";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">
            Wat zeggen onze leerlingen op Google?
          </h2>
          <p className="mt-3 text-gray-600">
            Echte ervaringen van geslaagde leerlingen — beoordeeld via Google Reviews.
          </p>
        </div>

        <a
          href={googleReviewsSummary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <GoogleLogo className="h-8 w-8 shrink-0" />
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {googleReviewsSummary.rating.toFixed(1)}
              </span>
              <StarRating className="[&_svg]:h-5 [&_svg]:w-5" />
            </div>
            <p className="text-sm text-gray-500">
              {googleReviewsSummary.count}+ reviews op Google
            </p>
          </div>
          <span className="text-sm font-medium text-westeraam-blue">Bekijk alle →</span>
        </a>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {googleReviews.map((review) => (
            <Card
              key={review.name}
              variant="default"
              className="border border-gray-200/80 bg-white transition-all duration-300 hover:shadow-md"
            >
              <Card.Content className="gap-4 p-6">
                <div className="flex items-center justify-between gap-2">
                  <StarRating />
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <GoogleLogo className="h-3.5 w-3.5" />
                    Google
                  </span>
                </div>
                <blockquote className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-auto border-t border-gray-100 pt-4">
                  <p className="font-semibold text-westeraam-blue">{review.name}</p>
                  <p className="text-xs text-gray-500">Google Review</p>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="text-center text-xl font-bold text-westeraam-blue">Veelgestelde vragen</h3>
          <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {homepageFaq.map((item) => (
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
      </div>
    </section>
  );
}
