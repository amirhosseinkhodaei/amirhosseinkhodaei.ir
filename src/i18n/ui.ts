import type { Localized } from "./config";

export const ui = {
  navHome: { en: "Home", de: "Start" },
  navResume: { en: "Resume", de: "Lebenslauf" },
  navProjects: { en: "Projects", de: "Projekte" },

  viewResume: { en: "View resume", de: "Lebenslauf ansehen" },
  downloadPdf: { en: "Download PDF", de: "PDF herunterladen" },
  generating: { en: "Generating…", de: "Wird erstellt…" },
  print: { en: "Print", de: "Drucken" },
  pdfShort: { en: "PDF", de: "PDF" },

  sectionExperience: { en: "Experience", de: "Berufserfahrung" },
  sectionSelectedWork: { en: "Selected work", de: "Ausgewählte Arbeiten" },
  sectionWorkingWith: { en: "Working with", de: "Ich arbeite mit" },
  sectionGetInTouch: { en: "Get in touch", de: "Kontakt" },
  allProjects: { en: "All projects", de: "Alle Projekte" },

  resumeSummary: { en: "Professional Summary", de: "Kurzprofil" },
  resumeExperience: { en: "Work Experience", de: "Berufserfahrung" },
  resumeSkills: { en: "Technical Skills", de: "Technische Kenntnisse" },
  resumeProjects: { en: "Projects", de: "Projekte" },
  resumeEducation: { en: "Education", de: "Studium" },
  technologies: { en: "Technologies", de: "Technologien" },

  currentlyPrefix: { en: "Currently", de: "Derzeit" },
  currentlyJoin: { en: "at", de: "bei" },

  contactBlurb: {
    en: "Open to conversations about front-end architecture, design systems and building teams around them.",
    de: "Offen für Gespräche über Frontend-Architektur, Designsysteme und den Aufbau von Teams dafür.",
  },

  projectsTitle: { en: "Projects", de: "Projekte" },
  projectsBlurb: {
    en: "Client platforms, storefronts and internal tools I designed, built and shipped — several of them from the database up to the server.",
    de: "Kundenplattformen, Shops und interne Tools, die ich entworfen, gebaut und ausgeliefert habe — einige davon von der Datenbank bis zum Server.",
  },

  notFoundLabel: { en: "Error 404", de: "Fehler 404" },
  notFoundTitle: { en: "Page not found", de: "Seite nicht gefunden" },
  notFoundBody: {
    en: "That page doesn't exist — it may have been moved or the link is out of date.",
    de: "Diese Seite existiert nicht — sie wurde möglicherweise verschoben oder der Link ist veraltet.",
  },
  backHome: { en: "Back home", de: "Zur Startseite" },

  languageLabel: { en: "Language", de: "Sprache" },
  pdfPage: { en: "Page", de: "Seite" },
  pdfPageOf: { en: "of", de: "von" },
  pdfDocumentKind: { en: "Resume", de: "Lebenslauf" },
  pdfFileSuffix: { en: "Resume", de: "Lebenslauf" },

  titleHome: {
    en: "Amirhossein Khodaei — Front-End Engineer",
    de: "Amirhossein Khodaei — Frontend-Entwickler",
  },
  titleResume: {
    en: "Resume — Amirhossein Khodaei",
    de: "Lebenslauf — Amirhossein Khodaei",
  },
  titleProjects: {
    en: "Projects — Amirhossein Khodaei",
    de: "Projekte — Amirhossein Khodaei",
  },
  titleNotFound: {
    en: "Not found — Amirhossein Khodaei",
    de: "Nicht gefunden — Amirhossein Khodaei",
  },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;
