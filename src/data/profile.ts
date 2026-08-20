import type { Profile } from "@/types/resume";

export const profile: Profile = {
  name: {
    en: "Amirhossein Khodaei",
    de: "Amirhossein Khodaei",
  },
  title: {
    en: "Front-End Engineer",
    de: "Frontend-Entwickler",
  },
  location: {
    en: "Isfahan, Iran",
    de: "Isfahan, Iran",
  },
  summary: {
    en: "Front-End Engineer with 5+ years of experience delivering production dashboards, e-commerce platforms and internal tooling with React, Next.js, Vue.js and TypeScript. Architected a company-wide design system now adopted by more than 80% of department projects, and built a complete e-commerce and accounting platform end to end — database design, Laravel API, front end and production infrastructure — later leading a team of two through its TypeScript rewrite. Focused on performance, security and maintainable architecture.",
    de: "Frontend-Entwickler mit über 5 Jahren Erfahrung in der Umsetzung von Produktions-Dashboards, E-Commerce-Plattformen und internen Tools mit React, Next.js, Vue.js und TypeScript. Konzipierte ein unternehmensweites Designsystem, das heute in über 80 % der Abteilungsprojekte eingesetzt wird, und baute eine vollständige E-Commerce- und Buchhaltungsplattform von Grund auf — Datenbankdesign, Laravel-API, Frontend und Produktionsinfrastruktur — und leitete später ein zweiköpfiges Team bei deren TypeScript-Neuentwicklung. Schwerpunkte: Performance, Sicherheit und wartbare Architektur.",
  },
  intro: {
    en: "I build web interfaces for security products, marketplaces and internal tooling — design systems, dashboards, and the unglamorous refactors that make them last. Lately that also means owning the API and the server the front end talks to.",
    de: "Ich baue Web-Oberflächen für Sicherheitsprodukte, Marktplätze und interne Tools — Designsysteme, Dashboards und die unspektakulären Refactorings, die dafür sorgen, dass sie Bestand haben. In letzter Zeit gehört dazu auch die API und der Server, mit dem das Frontend spricht.",
  },
  contacts: [
    {
      label: "amirhosseinkhodaei.ir",
      href: "https://amirhosseinkhodaei.ir",
      icon: "globe",
      primary: true,
    },
    {
      label: "amir76_kh@yahoo.com",
      href: "mailto:amir76_kh@yahoo.com",
      icon: "mail",
      primary: true,
    },
    {
      label: "+98 912 012 6656",
      href: "tel:+989120126656",
      icon: "phone",
      primary: true,
    },
    {
      label: "github.com/amirhosseinkhodaei",
      href: "https://github.com/amirhosseinkhodaei",
      icon: "github",
    },
    {
      label: "linkedin.com/in/amirhossein-khodaei-36141b169",
      href: "https://www.linkedin.com/in/amirhossein-khodaei-36141b169/",
      icon: "linkedin",
    },
  ],
};
