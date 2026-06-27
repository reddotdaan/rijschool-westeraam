import type { CourseSlug } from "@/lib/course-pages-data";
import { siteConfig } from "@/lib/site-config";

export type CourseFaqItem = {
  question: string;
  answer: string;
};

/** Veelgestelde vragen per opleiding — gesynchroniseerd met rijschoolwesteraam.nl */
export const courseFaqs: Record<CourseSlug, readonly CourseFaqItem[]> = {
  auto: [
    {
      question: "Hoeveel rijlessen heb ik gemiddeld nodig?",
      answer:
        "Dit verschilt per persoon. Tijdens een proefles krijgt de instructeur een goed beeld van jouw niveau. Je ontvangt daarna een persoonlijk advies over welk lespakket het beste bij je past. Hou je aan het einde van je opleiding lessen over, dan krijg je die terugbetaald — je betaalt alleen voor daadwerkelijk gereden rijlessen.",
    },
    {
      question: "Wat is een vrijblijvende proefles?",
      answer:
        "De proefles is een volwaardige eerste rijles van 1,5 uur. Je maakt kennis met je instructeur, de lesauto en onze rijschool. Na afloop krijg je een advies over het meest passende lespakket. De proefles verplicht je tot niets, maar is niet gratis. De gereden les wordt in mindering gebracht op het pakket dat je kiest.",
    },
    {
      question: "Wat kun je verwachten van een rijles?",
      answer:
        "We halen je op bij de plek die jou het beste uitkomt: thuis, werk of school. Rijlessen duren standaard 90 minuten — effectiever dan lessen van één uur. Bij aanvang leer je de auto kennen, stel je zithouding en spiegels af, en oefenen we op een oefenterrein. Aan het einde krijg je advies over het pakket dat het beste bij je past.",
    },
    {
      question: "Heeft een tussentijdse toets voordelen?",
      answer:
        "Zeker. De tussentijdse toets is een officieel CBR-examen rond driekwart van je opleiding. Je went aan het examen, kunt vrijstelling behalen voor bijzondere verrichtingen en ontvangt concrete verbeterpunten. Je verhoogt je slagingskans voor het praktijkexamen met ongeveer 15%.",
    },
    {
      question: "Hoe verloopt het praktijkexamen?",
      answer:
        "In het CBR-examencentrum maak je kennis met de examinator, die je identiteitsbewijs, theoriecertificaat en zelfreflectieformulier controleert. Op het parkeerterrein volgt een ogentest. De examenrit duurt ongeveer 35 minuten. De examinator beoordeelt onder meer je voertuigbeheersing, kijkgedrag, voorrang, inhalen, kruispunten en bijzondere verrichtingen.",
    },
    {
      question: "Mag ik het lespakket in termijnen betalen?",
      answer:
        "Ja, betaling in termijnen is mogelijk. Per termijnbetaling geldt € 12,50 administratiekosten. Termijnen zijn na het 1e, 10e, 20e en 30e rijlesuur. Bekijk de tarievenpagina voor alle betalingsmogelijkheden.",
    },
    {
      question: "Kan ik zelf rijlessen inplannen en annuleren?",
      answer:
        "Via onze rijlesplanner-app plan je 24/7 je rijlessen in bij je vaste instructeur of een collega. Blijkt een tijdstip toch niet uit te komen, dan kun je tot 48 uur voor aanvang zelf annuleren of verplaatsen.",
    },
    {
      question: "Geven jullie gratis theorieles op woensdagavond?",
      answer:
        "Ja. Bij afname van een lespakket krijg je gratis theorieles elke woensdagavond van 19:00 tot 21:00 via Microsoft Teams. Daarnaast zit iTheorie in veel pakketten — een digitaal theorieboek met oefenexamens.",
    },
    {
      question: "Wat is 2toDrive?",
      answer:
        "Sinds 1 november 2011 kun je met 2toDrive vanaf 16,5 jaar rijlessen volgen. Vanaf je 17e verjaardag mag je praktijkexamen doen. Ben je geslaagd, dan mag je tot je 18de alleen rijden onder begeleiding van een door jou gekozen coach.",
    },
    {
      question: "Mag je zonder theorie al praktijklessen volgen?",
      answer:
        "Ja, dat mag. Wij adviseren wel om je theorie zo snel mogelijk te halen. Theorie blijft 1,5 jaar geldig. Je kunt het examen aanvragen via Mijn CBR met je DigiD.",
    },
    {
      question: "Waarvoor moet ik Rijschool Westeraam machtigen?",
      answer:
        "Voor het aanvragen van een tussentijdse toets of praktijkexamen geef je ons toestemming via Mijn CBR. Ons rijschoolnummer is 1345F8. Daarnaast heb je aan het begin van je opleiding een gezondheidsverklaring nodig, die je zelf invult op Mijn CBR.nl.",
    },
    {
      question: "Waar geven jullie autorijles?",
      answer: `Wij zijn actief in ${siteConfig.regions}. Les starten en eindigen op een centraal punt is vaak ook mogelijk. 's Avonds en in het weekend lessen kan, maar we adviseren zoveel mogelijk doordeweeks overdag te rijden — dat sluit beter aan bij examenomstandigheden.`,
    },
  ],
  motor: [
    {
      question: "Wat kan ik verwachten van mijn eerste motorrijles?",
      answer:
        "Je krijgt een warm welkom met koffie. De instructeur legt de basishandelingen uit en daarna ga je meteen zelf ervaren hoe het is om te motorrijden. Na de les krijg je advies over het verwachte aantal rijlessen. De eerste les is vrijblijvend, maar niet gratis.",
    },
    {
      question: "Vanaf welke leeftijd kan ik motorrijles volgen?",
      answer:
        "Je kunt bij ons motorrijles volgen vanaf 20 jaar. Je rijdt dan op een A2-motor. Wij zorgen dat je alle vaardigheden krijgt die je nodig hebt voor een succesvolle opleiding.",
    },
    {
      question: "Wat is het A2-rijbewijs?",
      answer:
        "Met het A2-rijbewijs mag je rijden op motoren tot een bepaald vermogen. Bij ons volg je een opleiding die zowel voertuigbeheersing (AVB) als verkeersdeelname (AVD) omvat, zodat je met vertrouwen het verkeer in gaat.",
    },
    {
      question: "Wat houdt voertuigbeheersing (AVB) in?",
      answer:
        "Bij het AVB-examen laat je zeven oefeningen zien op het examenterrein, waaronder achteruit parkeren, langzame slalom, wegrijden uit een parkeervak, denkbeeldige acht, stapvoets rechtdoor rijden en een uitwijkoefening. Alle oefeningen tellen even zwaar.",
    },
    {
      question: "Wat leer ik tijdens verkeersdeelname (AVD)?",
      answer:
        "Tijdens AVD-lessen rijd je in het verkeer. Je leert de juiste techniek — uitwijken, remmen en bochten nemen — en je instructeur legt uit welke verkeersregels je moet volgen. Zo bouw je zelfvertrouwen op voor het praktijkexamen.",
    },
    {
      question: "Hoe meld ik me aan voor motorrijles?",
      answer:
        "Aanmelden kan via het contactformulier op onze website of telefonisch op werkdagen via 0481-745245. We nemen zo snel mogelijk contact met je op om je proefles of intake in te plannen.",
    },
    {
      question: "Kan ik in termijnen betalen?",
      answer:
        "Ja, betaling in termijnen is mogelijk bij onze motorpakketten. Neem contact op of bekijk de motor-tarieven voor actuele pakketten inclusief AVB en AVD.",
    },
    {
      question: "Zit iTheorie in het motorpakket?",
      answer:
        "Het Motor Premium-pakket is inclusief gratis iTheorie — een digitaal theorieboek met oefenexamens. Zo bereid je je optimaal voor op je theorie-examen.",
    },
  ],
  scooter: [
    {
      question: "Vanaf welke leeftijd kan ik mijn bromfietsrijbewijs halen?",
      answer:
        "Je mag het theorie-examen afleggen vanaf 15½ jaar. Vanaf 16 jaar mag je praktijkexamen doen. Je hebt zowel een geslaagd theorie- als praktijkexamen nodig voor je rijbewijs AM.",
    },
    {
      question: "Kan ik mijn rijbewijs in één dag halen?",
      answer:
        "Ja. Bij ons volg je 4 uur rijles op de dag van je examen. Het praktijkexamen duurt ongeveer 30 minuten en start bij het CBR in Arnhem — alles in één dag.",
    },
    {
      question: "Hoeveel leerlingen rijden er tegelijk?",
      answer:
        "Wij geven maximaal drie leerlingen tegelijk instructie. Dat is bewust gekozen: meer aandacht per leerling en extra veiligheid, in tegenstelling tot veel andere rijscholen.",
    },
    {
      question: "Op welke scooter rijden jullie?",
      answer:
        "We rijden op de SYM Orbit II — een sportieve, betrouwbare scooter met uitstekende wegligging. De praktijklessen beginnen bij onze rijschool in Elst, Industrieweg Oost 1A. Scooter en helm zijn inbegrepen.",
    },
    {
      question: "Wat is iTheorie en wanneer kan ik beginnen?",
      answer:
        "Bij afname van een pakket krijg je iTheorie: een digitaal theorieboek met 25 hoofdstukken en deelexamens. Na het doorlopen volgen 50 CBR-oefenexamens. Bij aanmelding ontvang je dezelfde dag een inlogcode, zodat je meteen kunt starten.",
    },
    {
      question: "Wat gebeurt er na mijn theorie-examen?",
      answer:
        "Zodra je geslaagd bent voor theorie, meld je dit bij ons. Wij vragen dan meteen het praktijkexamen aan en plannen je dagopleiding in.",
    },
    {
      question: "Wat kost losse rijles of het CBR-examen?",
      answer:
        "Losse scooterrijles kost € 40 per uur. Het CBR-examen kost € 175. Bekijk onze scooter-tarieven voor complete pakketten vanaf € 415,-.",
    },
    {
      question: "Hoe schrijf ik me in?",
      answer:
        "Schrijf je in via het inschrijfformulier op onze website of bel/app naar 0481-354503. We hopen je snel te zien!",
    },
  ],
  aanhangwagen: [
    {
      question: "Wanneer heb ik een BE-rijbewijs nodig?",
      answer:
        "Je mag niet met elke aanhangwagen achter je auto rijden. Voor zware aanhangwagens heb je rijbewijs BE (E achter B) nodig. De opleiding draait om specifieke vaardigheden: bewust omgaan met de afwijkingen van rijden met een zware combinatie.",
    },
    {
      question: "Kan ik BE in één dag halen?",
      answer:
        "Ja. Bij Rijschool Westeraam kun je BE al binnen één dag halen. De rijlessen bestaan uit bijzondere verrichtingen én verkeersdeelname. Alles wordt stap voor stap uitgelegd totdat je de combinatie auto + aanhangwagen beheerst.",
    },
    {
      question: "Waar moet ik op letten bij rijden met aanhangwagen?",
      answer:
        "Tijdens de opleiding maken we je bewust van onder meer: gering acceleratievermogen, grotere massa en langere remweg, inlopen en uitzwenken van de aanhangwagen bij bochten, beperkt gezichtsveld en kantelgevaar.",
    },
    {
      question: "Welke bijzondere verrichtingen oefen ik?",
      answer:
        "Je leert achteruitrijden in rechte lijn en bochten, achteruit een garage of laadplaats inrijden, keren via steken met een zijstraat en keren via een halve draai. Deze verrichtingen komen terug op het CBR-examen.",
    },
    {
      question: "Wat kost de BE-opleiding?",
      answer:
        "Losse rijles kost € 60 per uur. Het praktijkexamen personenauto met aanhangwagen bij het CBR kost € 280. Meld je aan via het inschrijfformulier — we nemen zo snel mogelijk contact op.",
    },
    {
      question: "Heb ik theorie nodig voor BE?",
      answer:
        "Voor rijbewijs BE heb je rijbewijs B nodig. Er is geen apart theorie-examen voor BE — de opleiding focust op praktische vaardigheden en verkeersdeelname met aanhangwagen.",
    },
    {
      question: "Waar vinden de lessen plaats?",
      answer:
        "De BE-opleiding volg je bij Rijschool Westeraam in Elst. We begeleiden je van de eerste oefening tot en met het CBR-examen.",
    },
    {
      question: "Hoe meld ik me aan?",
      answer:
        "Meld je aan via het inschrijfformulier op onze website. We nemen zo snel mogelijk contact met je op om je opleiding in te plannen.",
    },
  ],
};
