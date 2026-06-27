/** Google Reviews — publieke beoordelingen (via Google Maps / aggregators) */

export const googleReviewsSummary = {
  rating: 4.9,
  count: 341,
  url: "https://www.google.com/maps/search/?api=1&query=Rijschool+Westeraam+Elst",
} as const;

export const googleReviews = [
  {
    name: "Lotte Demmink",
    text: "Top rijschool. Je staat als leerling ècht op nummer 1. Ga de gezelligheid missen!",
    source: "Google",
  },
  {
    name: "Naomi Hofs",
    text: "Hele fijne rijschool. Ze doen er alles aan om je te laten slagen. Ze zijn erg behulpzaam en hebben veel goede instructeurs waar je zelf uit kan kiezen.",
    source: "Google",
  },
  {
    name: "Sandra Rits",
    text: "Fantastische rijschool. Prima instructeurs met kennis van zaken, gericht op ieder individu. Goede opbouw van lessen en fijne persoonlijke begeleiding.",
    source: "Google",
  },
] as const;

export const homepageFaq = [
  {
    question: "Wat kost een vrijblijvende proefles?",
    answer:
      "Een proefles is niet gratis, maar verplicht je tot niets. Neem contact op voor het actuele tarief — we plannen graag een les in die bij jou past.",
  },
  {
    question: "Kan ik in termijnen betalen?",
    answer:
      "Ja, betaling in termijnen is mogelijk. Per termijnbetaling geldt € 12,50 administratiekosten. Termijnen na het 1e, 10e, 20e en 30e rijlesuur.",
  },
  {
    question: "In welke regio geven jullie rijles?",
    answer:
      "Wij zijn actief in Elst, Arnhem, Nijmegen, Huissen, Bemmel, Lingewaard en omgeving. Les starten en eindigen op een centraal punt is vaak ook mogelijk.",
  },
  {
    question: "Is de woensdagavond theorieles gratis?",
    answer:
      "Ja — elke woensdagavond tussen 19:00 en 21:00 via Microsoft Teams voor actieve leerlingen. Afhankelijk van je pakket ontvang je ook gratis theorielessen.",
  },
] as const;
