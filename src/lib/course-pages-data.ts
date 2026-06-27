import { siteConfig } from "@/lib/site-config";

export type CourseSlug = "auto" | "motor" | "scooter" | "aanhangwagen";

export type CoursePageData = {
  slug: CourseSlug;
  metaTitle: string;
  metaDescription: string;
  title: string;
  license: string;
  intro: string;
  priceFrom: string;
  tarievenHref: string;
  contactCourse: (typeof siteConfig.courses)[number];
  steps: readonly { title: string; description: string }[];
  usps: readonly string[];
};

export const coursePages: Record<CourseSlug, CoursePageData> = {
  auto: {
    slug: "auto",
    metaTitle: "Autorijles (B)",
    metaDescription: `Autorijles bij Rijschool Westeraam in ${siteConfig.regionsShort}. Hoogste slagingspercentage, pakketten vanaf € 2.420,- en gratis woensdagavond theorieles.`,
    title: "Autorijles",
    license: "Rijbewijs B",
    intro:
      "Leer veilig en zelfverzekerd rijden met vaste WRM-gecertificeerde instructeurs. Wij begeleiden je stap voor stap — van proefles tot praktijkexamen — in Elst, Arnhem, Nijmegen en omgeving.",
    priceFrom: "Vanaf € 2.420,-",
    tarievenHref: "/tarieven/auto",
    contactCourse: "Auto (B)",
    steps: [
      {
        title: "Vrijblijvende proefles",
        description:
          "Ervaar zelf hoe het rijden bij ons is. De proefles is niet gratis, maar verplicht je tot niets.",
      },
      {
        title: "Theorie & i-theorie",
        description:
          "Online i-theorie in je pakket, plus elke woensdagavond gratis theorieles via Microsoft Teams (19:00–21:00).",
      },
      {
        title: "Rijlessen op maat",
        description:
          "Persoonlijke begeleiding met een vaste instructeur, afgestemd op jouw tempo en leerdoelen.",
      },
      {
        title: "Examen & geslaagd",
        description:
          "Tussentijdse toets en praktijkexamen bij het CBR — met het hoogste slagingspercentage van Nederland.",
      },
    ],
    usps: [
      "Hoogste slagingspercentage van NL, 2 jaar op rij",
      "Betaalbare pakketten — ook betalen in termijnen",
      "Actief in Elst, Arnhem, Nijmegen, Huissen & Bemmel",
    ],
  },
  motor: {
    slug: "motor",
    metaTitle: "Motorrijles (A)",
    metaDescription:
      "Motorrijbewijs halen bij Rijschool Westeraam. Gepassioneerde instructeurs, pakketten vanaf € 980,- — van AVB tot AVD.",
    title: "Motorrijles",
    license: "Rijbewijs A",
    intro:
      "Jouw motoravontuur begint hier. Onze gepassioneerde motorinstructeurs delen hun liefde voor het rijden en zorgen dat jij met vertrouwen de weg op gaat — van voertuigbeheersing tot verkeersdeelname.",
    priceFrom: "Vanaf € 980,-",
    tarievenHref: "/tarieven/motor",
    contactCourse: "Motor (A)",
    steps: [
      {
        title: "Inschrijven & intake",
        description: "Meld je aan via het formulier of bel 0481-745245. We plannen je eerste les in.",
      },
      {
        title: "Voertuigbeheersing (AVB)",
        description: "Slalom, langzaam rijden en remmen — de basisvaardigheden op het examenterrein.",
      },
      {
        title: "Verkeersdeelname (AVD)",
        description: "Rijden in het verkeer met focus op veiligheid, anticipatie en zelfstandigheid.",
      },
      {
        title: "Examen & vrijheid",
        description: "Praktijkexamens AVB en AVD bij het CBR. Motor Premium inclusief gratis i-theorie.",
      },
    ],
    usps: [
      "WRM-gecertificeerde motorinstructeurs",
      "Pakketten incl. AVB én AVD",
      "Betalen in termijnen mogelijk",
    ],
  },
  scooter: {
    slug: "scooter",
    metaTitle: "Scooterrijles (AM)",
    metaDescription:
      "Scooterrijbewijs (AM) halen in 1 dag bij Rijschool Westeraam. 4 uur rijles op de Vespa Sprint, daarna examen in Arnhem. Vanaf € 415,-.",
    title: "Scooterrijles",
    license: "Rijbewijs AM",
    intro:
      "In één dag je bromfietsrijbewijs halen? Dat kan bij ons. Je krijgt 4 uur rijles op de nieuwste Vespa Sprint en doet daarna meteen examen bij het CBR in Arnhem.",
    priceFrom: "Vanaf € 415,-",
    tarievenHref: "/tarieven/scooter",
    contactCourse: "Scooter (AM)",
    steps: [
      {
        title: "Theorie (vanaf 15½ jaar)",
        description:
          "Theorie-examen afleggen bij het CBR. Het Premium-pakket is inclusief i-theorie met online oefenexamens.",
      },
      {
        title: "4 uur rijles",
        description:
          "Praktische training op onze Vespa Sprint. Maximaal 3 leerlingen tegelijk voor betere begeleiding.",
      },
      {
        title: "Praktijkexamen",
        description: "Direct na de rijlessen examen doen bij het CBR in Arnhem — alles in één dag.",
      },
      {
        title: "Rijbewijs AM",
        description: "Vanaf 16 jaar mag je praktijkexamen doen. Scooter en helm inbegrepen bij ons.",
      },
    ],
    usps: [
      "Alles in 1 dag — rijles én examen",
      "Max. 3 leerlingen tegelijk",
      "Nieuwste Vespa Sprint & helm inbegrepen",
    ],
  },
  aanhangwagen: {
    slug: "aanhangwagen",
    metaTitle: "Aanhangwagen (BE)",
    metaDescription:
      "BE-rijbewijs halen bij Rijschool Westeraam in Elst. Opleiding in één dag, losse les € 60/uur, CBR-examen € 280,-.",
    title: "Aanhangwagen",
    license: "Rijbewijs BE",
    intro:
      "Wil je leren rijden met een zware aanhangwagen achter je auto? Onze BE-opleiding behandelt bijzondere verrichtingen én verkeersdeelname — en je kunt het rijbewijs al binnen één dag halen.",
    priceFrom: "In 1 dag je BE-rijbewijs",
    tarievenHref: "/tarieven/aanhangwagen",
    contactCourse: "Aanhangwagen (BE)",
    steps: [
      {
        title: "Aanmelden",
        description:
          "Meld je aan via het inschrijfformulier. We nemen zo snel mogelijk contact met je op.",
      },
      {
        title: "Theorie & bewustwording",
        description:
          "Remweg, kantelgevaar, gezichtsveld en inlopen van de aanhangwagen — je leert bewust omgaan met de combinatie.",
      },
      {
        title: "Bijzondere verrichtingen",
        description:
          "Achteruitrijden, keren en manoeuvreren met auto + aanhangwagen, stap voor stap uitgelegd.",
      },
      {
        title: "Examen & rijbewijs BE",
        description: "Praktijkexamen personenauto met aanhangwagen bij het CBR (€ 280,-).",
      },
    ],
    usps: [
      "BE-opleiding in één dag mogelijk",
      "Losse rijles € 60/uur",
      "CBR-examen € 280,-",
    ],
  },
};

export const courseSlugs = Object.keys(coursePages) as CourseSlug[];
