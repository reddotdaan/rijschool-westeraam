/** Tarieven en pakketten — gesynchroniseerd met rijschoolwesteraam.nl (juni 2026) */

export const autoPackages = [
  {
    name: "Light",
    tagline: "Instappakket",
    price: "€ 2.420,-",
    hours: "25 uur rijles",
    featured: false,
    includes: [
      "25 uur rijles",
      "Praktijkexamen CBR",
      "Online i-theorie",
      "2 uur gratis theorieles (t.w.v. € 30,-)",
    ],
  },
  {
    name: "Basis",
    tagline: "Populair voor starters",
    price: "€ 3.140,-",
    hours: "34 uur rijles",
    featured: false,
    includes: [
      "34 uur rijles",
      "Praktijkexamen CBR",
      "Online i-theorie",
      "4 uur gratis theorieles (t.w.v. € 60,-)",
    ],
  },
  {
    name: "Comfort",
    tagline: "Extra rijuren",
    price: "€ 3.620,-",
    hours: "40 uur rijles",
    featured: false,
    includes: [
      "40 uur rijles",
      "Praktijkexamen CBR",
      "Online i-theorie",
      "6 uur gratis theorieles (t.w.v. € 90,-)",
    ],
  },
  {
    name: "Premium",
    tagline: "Meest complete pakket",
    price: "€ 4.020,-",
    hours: "45 uur rijles",
    featured: true,
    badge: "Meest gekozen",
    includes: [
      "45 uur rijles",
      "Praktijkexamen CBR",
      "Online i-theorie",
      "6 uur gratis theorieles + theorieboek (t.w.v. € 135,-)",
    ],
  },
] as const;

export const autoLooseRates = [
  { item: "Losse autorijles (60 minuten)", price: "€ 81,00" },
  { item: "Automaat rijles (60 minuten)", price: "€ 90,00" },
  { item: "Losse autorijles (90 minuten)", price: "€ 121,50" },
  { item: "Aanvullend Voordeelpakket (7 uur)", price: "€ 560,00" },
  { item: "Aanvullend Voordeelpakket (10 uur)", price: "€ 800,00" },
  { item: "Tussentijdse Toets (CBR)", price: "€ 325,00" },
  { item: "Praktijkexamen (CBR)", price: "€ 355,00" },
  { item: "Faalangst examen (CBR)", price: "€ 450,00" },
  { item: "Theorieles (2 uur, woensdagavond)", price: "€ 30,00" },
  { item: "I-theorie (online)", price: "€ 65,00" },
  { item: "Theorieboek", price: "€ 45,00" },
] as const;

export const motorPackages = [
  {
    name: "Light",
    tagline: "AVB instap",
    price: "€ 980,-",
    includes: ["12 uur rijles", "Praktijkexamen AVB", "Betalen in termijnen mogelijk"],
  },
  {
    name: "Basis",
    tagline: "AVB + AVD",
    price: "€ 1.690,-",
    includes: [
      "18 uur rijles",
      "Praktijkexamen AVB",
      "Praktijkexamen AVD",
      "Betalen in termijnen mogelijk",
    ],
  },
  {
    name: "Premium",
    tagline: "Compleet met i-theorie",
    price: "€ 1.885,-",
    featured: true,
    badge: "Meest gekozen",
    includes: [
      "21 uur rijles",
      "Praktijkexamen AVB",
      "Praktijkexamen AVD",
      "Gratis i-theorie (t.w.v. € 65,-)",
      "Betalen in termijnen mogelijk",
    ],
  },
] as const;

export const motorLooseRates = [
  { item: "Losse motorrijles (60 minuten)", price: "€ 66,00" },
  { item: "Praktijkexamen voertuigbeheersing (AVB)", price: "€ 220,00" },
  { item: "Praktijkexamen verkeersdeelneming (AVD)", price: "€ 325,00" },
  { item: "I-theorie (online)", price: "€ 65,00" },
] as const;

export const scooterPackages = [
  {
    name: "Basis",
    tagline: "Dagopleiding",
    price: "€ 415,-",
    includes: [
      "4 uur rijles",
      "Praktijkexamen CBR",
      "Alles in 1 dag",
      "Gebruik scooter en helm",
    ],
  },
  {
    name: "Premium",
    tagline: "Inclusief i-theorie",
    price: "€ 465,-",
    featured: true,
    badge: "Inclusief i-theorie",
    includes: [
      "4 uur rijles",
      "Praktijkexamen CBR",
      "Alles in 1 dag",
      "Inclusief i-theorie",
      "Gebruik scooter en helm",
    ],
  },
] as const;

export const scooterLooseRates = [
  { item: "Losse rijles (60 minuten)", price: "€ 55,00" },
  { item: "Praktijkexamen CBR", price: "€ 220,00" },
  { item: "I-theorie (online)", price: "€ 65,00" },
] as const;

export const beRates = [
  { item: "Losse rijles (per uur)", price: "€ 60,00" },
  {
    item: "Praktijkexamen personenauto met aanhangwagen (CBR)",
    price: "€ 280,00",
  },
  { item: "BE-opleiding in één dag", price: "Op aanvraag" },
] as const;

export const tarievenCategories = [
  {
    slug: "auto",
    title: "Auto",
    license: "Rijbewijs B",
    href: "/tarieven/auto",
    priceFrom: "Vanaf € 2.420,-",
    description:
      "Lespakketten Light t/m Premium, plus losse lestarieven, examens en theorie.",
  },
  {
    slug: "motor",
    title: "Motor",
    license: "Rijbewijs A",
    href: "/tarieven/motor",
    priceFrom: "Vanaf € 980,-",
    description: "Motorpakketten van AVB instap tot compleet met AVD en i-theorie.",
  },
  {
    slug: "scooter",
    title: "Scooter",
    license: "Rijbewijs AM",
    href: "/tarieven/scooter",
    priceFrom: "Vanaf € 415,-",
    description: "Dagopleiding op de Vespa Sprint — 4 uur rijles en direct examen in Arnhem.",
  },
  {
    slug: "aanhangwagen",
    title: "Aanhangwagen",
    license: "Rijbewijs BE",
    href: "/tarieven/aanhangwagen",
    priceFrom: "In 1 dag je BE-rijbewijs",
    description: "BE-opleiding met theorie en praktijk. Losse rijles € 60/uur.",
  },
] as const;

export const homepagePackages = [
  {
    title: "Auto",
    license: "Rijbewijs B",
    price: "Vanaf € 2.420,-",
    href: "/rijopleidingen/auto",
    description:
      "Compleet lespakket met vaste instructeur, online i-theorie en examenvoorbereiding. Actief in Elst, Arnhem, Nijmegen en omgeving.",
    cta: "Meer over autorijles",
  },
  {
    title: "Motor",
    license: "Rijbewijs A",
    price: "Vanaf € 980,-",
    href: "/rijopleidingen/motor",
    description:
      "Persoonlijke motorlessen van gepassioneerde WRM-gecertificeerde instructeurs — van AVB tot AVD.",
    cta: "Meer over motorrijles",
  },
  {
    title: "Scooter",
    license: "Rijbewijs AM",
    price: "Vanaf € 415,-",
    href: "/rijopleidingen/scooter",
    description:
      "4 uur rijles en daarna meteen examen bij het CBR in Arnhem. Maximaal 3 leerlingen tegelijk op de nieuwste Vespa Sprint.",
    cta: "Meer over scooterrijles",
  },
  {
    title: "Aanhangwagen",
    license: "Rijbewijs BE",
    price: "In 1 dag je BE-rijbewijs",
    href: "/rijopleidingen/aanhangwagen",
    description:
      "Efficiënte BE-opleiding met theorie en praktijk. Losse rijles € 60/uur, CBR-examen € 280,-.",
    cta: "Meer over BE-opleiding",
  },
] as const;
