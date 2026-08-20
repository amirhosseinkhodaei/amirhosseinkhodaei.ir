import type { Experience } from "@/types/resume";

export const experiences: Experience[] = [
  {
    role: {
      en: "Front-End Engineer",
      de: "Frontend-Entwickler",
    },
    company: "PayamPardaz",
    companyUrl: "https://payampardaz.com",
    context: {
      en: "IT security product company with 150+ delivered research and professional-services projects.",
      de: "Anbieter von IT-Sicherheitsprodukten mit über 150 umgesetzten Forschungs- und Dienstleistungsprojekten.",
    },
    startDate: { en: "Oct 2022", de: "Okt. 2022" },
    startISO: "2022-10",
    endDate: { en: "Present", de: "heute" },
    location: { en: "Isfahan, Iran", de: "Isfahan, Iran" },
    employmentType: { en: "Full-time", de: "Vollzeit" },
    highlights: {
      en: [
        "Architected a company-wide design system that wraps Element Plus into role-specific components, adopted by 80%+ of department projects and reducing build and maintenance effort by 80%.",
        "Led the migration of 90%+ of the codebase from the Options API to the Composition API, standardizing component patterns across teams.",
        "Hardened the transaction signing flow with an additional data push-notification step, increasing resistance to man-in-the-middle attacks by an estimated 10%.",
        "Rebuilt and maintain 3+ legacy dashboards, including the multi-factor authentication system.",
        "Deliver interactive Vue.js dashboards that cut manual data analysis by 40% and enable real-time monitoring of key performance indicators.",
      ],
      de: [
        "Konzipierte ein unternehmensweites Designsystem, das Element-Plus-Komponenten in rollenspezifische Komponenten kapselt — eingesetzt in über 80 % der Abteilungsprojekte und mit 80 % weniger Entwicklungs- und Wartungsaufwand.",
        "Leitete die Migration von über 90 % der Codebasis von der Options API zur Composition API und vereinheitlichte Komponentenmuster teamübergreifend.",
        "Härtete den Signaturprozess für Transaktionen durch einen zusätzlichen Daten-Push-Benachrichtigungsschritt und erhöhte die Widerstandsfähigkeit gegen Man-in-the-Middle-Angriffe um geschätzt 10 %.",
        "Baute über 3 Legacy-Dashboards neu auf und betreue sie weiterhin, darunter das System zur Mehr-Faktor-Authentifizierung.",
        "Entwickle interaktive Vue.js-Dashboards, die die manuelle Datenanalyse um 40 % reduzieren und das Echtzeit-Monitoring zentraler Kennzahlen ermöglichen.",
      ],
    },
    stack: ["Vue.js", "TypeScript", "Ansible", "Ubuntu"],
    links: [{ title: "payampardaz.com", href: "https://payampardaz.com" }],
    visible: true,
  },
  {
    role: {
      en: "Front-End Engineer",
      de: "Frontend-Entwickler",
    },
    company: "SnappCarFix / CarFillo",
    companyUrl: "https://snappcarfix.com",
    context: {
      en: "Snapp-backed marketplace for car parts and services, spanning storefronts for stores, service centers, agents and sellers.",
      de: "Von Snapp unterstützter Marktplatz für Autoteile und -services mit Storefronts für Händler, Servicecenter, Agenten und Verkäufer.",
    },
    startDate: { en: "Feb 2021", de: "Feb. 2021" },
    startISO: "2021-02",
    endDate: { en: "Sep 2022", de: "Sept. 2022" },
    endISO: "2022-09",
    location: { en: "Isfahan, Iran", de: "Isfahan, Iran" },
    employmentType: { en: "Full-time", de: "Vollzeit" },
    highlights: {
      en: [
        "Architected core modules for 3 React front-end projects, improving load times by 15%.",
        "Rebuilt the call-center panel in React, raising user satisfaction by 40%.",
        "Delivered platform solutions for 10 clients, driving a 25% increase in user engagement.",
        "Maintained and extended 5 production projects, reducing bug reports by 30%.",
        "Built a real-time web crawler with a Python backend and React front end, processing 1,000+ pages per hour.",
        "Delivered 4 projects within Scrum teams, consistently meeting sprint commitments.",
      ],
      de: [
        "Konzipierte Kernmodule für 3 React-Frontend-Projekte und verbesserte die Ladezeiten um 15 %.",
        "Baute das Callcenter-Panel in React neu auf und steigerte die Nutzerzufriedenheit um 40 %.",
        "Lieferte Plattformlösungen für 10 Kunden und steigerte die Nutzerbindung um 25 %.",
        "Wartete und erweiterte 5 Produktionsprojekte und reduzierte Fehlermeldungen um 30 %.",
        "Entwickelte einen Echtzeit-Webcrawler mit Python-Backend und React-Frontend, der über 1.000 Seiten pro Stunde verarbeitet.",
        "Lieferte 4 Projekte in Scrum-Teams und erfüllte die Sprint-Zusagen durchgehend.",
      ],
    },
    stack: ["React", "Redux", "Python", "WordPress"],
    links: [
      { title: "snappcarfix.com", href: "https://snappcarfix.com" },
      { title: "carfillo.com", href: "https://carfillo.com" },
    ],
    visible: true,
  },
];
