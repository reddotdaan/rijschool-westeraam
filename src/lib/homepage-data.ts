/** Homepage content — gesynchroniseerd met rijschoolwesteraam.nl */

export const heroImage =
  "https://rijschoolwesteraam.nl/wp-content/uploads/2020/04/audi-foto-4-570x321.jpeg";

export const teamPhoto =
  "https://rijschoolwesteraam.nl/wp-content/uploads/2021/04/rijschoolwesteraam-scaled.jpg";

export const cbrStatsUrl = "https://www.rijswijs.nl/rijschoolgegevens";

export const homepageUsps = [
  {
    title: "Hoogste slagingspercentage",
    description:
      "Al 2 jaar op rij het hoogste slagingspercentage van Nederland — ver boven het landelijk gemiddelde.",
    href: cbrStatsUrl,
    cta: "Bekijk CBR-gegevens",
  },
  {
    title: "Betaalbare lespakketten",
    description:
      "Onze pakketten zijn zo samengesteld dat rijlessen betaalbaar blijven — ook betalen in termijnen.",
    href: "/tarieven",
    cta: "Bekijk pakketten",
  },
  {
    title: "Woensdagavond theorie",
    description:
      "Elke woensdagavond gratis theorieles via Microsoft Teams (19:00–21:00) voor actieve leerlingen.",
    href: "/over-ons",
    cta: "Meer info",
  },
  {
    title: "Vrijblijvende proefles",
    description:
      "Ervaar zelf hoe het rijden bij ons is. De proefles is niet gratis, maar verplicht je tot niets.",
    href: "/contact",
    cta: "Proefles aanvragen",
  },
  {
    title: "Deskundig personeel",
    description:
      "Al onze instructeurs zijn WRM-gecertificeerd — persoonlijke begeleiding door ervaren rijinstructeurs.",
    href: "/over-ons",
    cta: "Over ons team",
  },
  {
    title: "Stap-voor-stap opleiding",
    description:
      "Onze bewezen aanpak zorgt voor hoge slagingspercentages — van theorie tot praktijkexamen.",
    href: "/rijopleidingen/auto",
    cta: "Bekijk opleidingen",
  },
] as const;

/** Gefilterde Instagram-cache van hun live site (WordPress Enjoy Instagram plugin) */
export const instagramPosts = [
  {
    image:
      "https://rijschoolwesteraam.nl/wp-content/uploads/ei-cache/18127019527146060_320.jpg",
    caption: "Bart uit Elst geslaagd voor zijn autorijbewijs — van harte gefeliciteerd!",
  },
  {
    image:
      "https://rijschoolwesteraam.nl/wp-content/uploads/ei-cache/18130756273084957_320.jpg",
    caption: "Femke ten Westeneind in één keer geslaagd — keurig netjes gereden!",
  },
  {
    image:
      "https://rijschoolwesteraam.nl/wp-content/uploads/ei-cache/17940461425420165_320.jpg",
    caption: "Thom uit Arnhem geslaagd — keurige examenrit en rijbewijs binnen!",
  },
  {
    image:
      "https://rijschoolwesteraam.nl/wp-content/uploads/ei-cache/17917009156503129_320.jpg",
    caption: "Inger uit Elst geslaagd — mooie examenrit neergezet!",
  },
  {
    image:
      "https://rijschoolwesteraam.nl/wp-content/uploads/ei-cache/18116713885196701_320.jpg",
    caption: "Dannyck uit Arnhem geslaagd na een uitdagende examenroute.",
  },
  {
    image:
      "https://rijschoolwesteraam.nl/wp-content/uploads/ei-cache/17873129294091040_320.jpg",
    caption: "Roemer uit Elst in één keer geslaagd — van harte gefeliciteerd!",
  },
] as const;

export const courseImages = {
  auto: "https://rijschoolwesteraam.nl/wp-content/uploads/2020/04/audi-foto-4-570x321.jpeg",
  motor: "https://rijschoolwesteraam.nl/wp-content/uploads/2022/05/motoren-4--570x321.jpeg",
  scooter: "https://rijschoolwesteraam.nl/wp-content/uploads/2022/01/fotos-scooters-570x321.jpeg",
  be: "https://rijschoolwesteraam.nl/wp-content/uploads/2020/04/aanhanger-570x321.jpeg",
} as const;
