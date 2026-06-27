export const siteConfig = {
  name: "Rijschool Westeraam B.V.",
  shortName: "Rijschool Westeraam",
  address: "Industrieweg Oost 5b5, 6662 NE Elst (Gld.)",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rijschool+Westeraam+Industrieweg+Oost+5b5+Elst",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Industrieweg+Oost+5b5,+6662+NE+Elst+(Gld.)&t=&z=15&ie=UTF8&iwloc=&output=embed",
  phone: "0481-745245",
  whatsapp: "0481-354503",
  email: "contact@rijschoolwesteraam.nl",
  cbrNumber: "1345F8",
  kvkNumber: "88418332",
  regions: "Elst, Arnhem, Nijmegen, Huissen, Bemmel, Lingewaard en omgeving",
  regionsShort: "Elst, Arnhem & Nijmegen",
  openingHours: "Ma–vr 09:00–17:00, za tot 15:00",
  social: {
    facebook: "https://www.facebook.com/rijschoolwesteraam",
    instagram: "https://www.instagram.com/explore/tags/rijschoolwesteraam/",
    instagramHashtag: "#rijschoolwesteraam",
  },
  instructors: {
    male: ["Arjan", "Osman", "Bram", "Ferdi", "Ahmet", "Pieter", "Mustafa", "Vincent", "Salie"],
    female: ["Harriet", "Yvonne", "Josee", "Demi", "Marieke"],
  },
  courses: ["Auto (B)", "Motor (A)", "Scooter (AM)", "Aanhangwagen (BE)"] as const,
  usps: [
    "Hoogste slagingspercentage van Nederland",
    "Betaalbare lespakketten op maat",
    "Gratis woensdagavond theorieles via Microsoft Teams (19:00–21:00)",
  ],
  rijopleidingen: [
    { label: "Auto (B)", href: "/rijopleidingen/auto" },
    { label: "Motor (A)", href: "/rijopleidingen/motor" },
    { label: "Scooter (AM)", href: "/rijopleidingen/scooter" },
    { label: "Aanhangwagen (BE)", href: "/rijopleidingen/aanhangwagen" },
  ] as const,
  tarieven: [
    { label: "Auto (B)", href: "/tarieven/auto" },
    { label: "Motor (A)", href: "/tarieven/motor" },
    { label: "Scooter (AM)", href: "/tarieven/scooter" },
    { label: "Aanhangwagen (BE)", href: "/tarieven/aanhangwagen" },
  ] as const,
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Rijopleidingen",
      href: "/rijopleidingen/auto",
      children: [
        { label: "Auto (B)", href: "/rijopleidingen/auto" },
        { label: "Motor (A)", href: "/rijopleidingen/motor" },
        { label: "Scooter (AM)", href: "/rijopleidingen/scooter" },
        { label: "Aanhangwagen (BE)", href: "/rijopleidingen/aanhangwagen" },
      ],
    },
    {
      label: "Tarieven",
      href: "/tarieven",
      children: [
        { label: "Auto (B)", href: "/tarieven/auto" },
        { label: "Motor (A)", href: "/tarieven/motor" },
        { label: "Scooter (AM)", href: "/tarieven/scooter" },
        { label: "Aanhangwagen (BE)", href: "/tarieven/aanhangwagen" },
      ],
    },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ] as const,
  cta: { label: "Inschrijven", href: "/contact" },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
