import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import { teamPhoto } from "@/lib/homepage-data";
import { siteConfig } from "@/lib/site-config";

function interleaveInstructors(male: readonly string[], female: readonly string[]) {
  const names: string[] = [];
  let m = 0;
  let f = 0;

  while (m < male.length || f < female.length) {
    if (m < male.length) names.push(male[m++]);
    if (f < female.length) names.push(female[f++]);
  }

  return names;
}

const teamMembers = interleaveInstructors(
  siteConfig.instructors.male,
  siteConfig.instructors.female,
);

export function TeamSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">Deskundig personeel</h2>
          <p className="mt-4 text-gray-600">
            Al onze instructeurs zijn WRM-gecertificeerd. Persoonlijke begeleiding door een vast
            team dat al jarenlang leerlingen in de regio succesvol naar hun rijbewijs begeleidt.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="relative aspect-[2560/1091] w-full">
            <Image
              src={teamPhoto}
              alt="Team Rijschool Westeraam"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-westeraam-orange">
            Ons team
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {teamMembers.map((name) => (
              <li
                key={name}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-westeraam-blue shadow-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <LinkButton href="/over-ons" brand="blue" size="md">
            Meer over Rijschool Westeraam
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
