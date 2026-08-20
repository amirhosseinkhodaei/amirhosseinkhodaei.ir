import type { Project } from "@/types/resume";

export const projects: Project[] = [
  {
    title: "Bartanco.ir",
    role: {
      en: "Creator, Full-Stack Developer & Project Lead",
      de: "Full-Stack-Entwickler & Projektleiter",
    },
    description: {
      en: "End-to-end e-commerce and accounting platform: a storefront backed by an automated accounting system and four permission-scoped panels for drivers, warehouse staff, customers and administrators.",
      de: "Durchgängige E-Commerce- und Buchhaltungsplattform: ein Shop mit automatisiertem Buchhaltungssystem und vier rechtebasierten Panels für Fahrer, Lagerpersonal, Kunden und Administratoren.",
    },
    highlights: {
      en: [
        "Built the entire product from scratch as its sole original developer — database design, Laravel back end and front end.",
        "Designed the relational schema behind the accounting workflow, covering orders, inventory, deliveries and role-based access across four panels.",
        "Rewrote the client in Next.js and TypeScript, replacing the server-rendered implementation with a typed, component-driven front end.",
        "Refactored the Laravel Blade views into a REST API, decoupling the front end and letting every panel share a single back end.",
        "Owned DevOps and release engineering end to end: provisioned and configured the production server, web server and deployment pipeline.",
        "Led a team of 2 developers as project lead, from planning through delivery.",
      ],
      de: [
        "Entwickelte das gesamte Produkt von Grund auf als alleiniger ursprünglicher Entwickler — Datenbankdesign, Laravel-Backend und Frontend.",
        "Entwarf das relationale Schema hinter dem Buchhaltungsprozess mit Bestellungen, Lagerbestand, Lieferungen und rollenbasiertem Zugriff über vier Panels.",
        "Schrieb den Client in Next.js und TypeScript neu und ersetzte die serverseitig gerenderte Umsetzung durch ein typisiertes, komponentenbasiertes Frontend.",
        "Überführte die Laravel-Blade-Views in eine REST-API, entkoppelte das Frontend und ließ alle Panels ein gemeinsames Backend nutzen.",
        "Verantwortete DevOps und Release-Engineering vollständig: Bereitstellung und Konfiguration von Produktionsserver, Webserver und Deployment-Pipeline.",
        "Leitete als Projektleiter ein zweiköpfiges Team von der Planung bis zur Auslieferung.",
      ],
    },
    stack: ["Next.js", "TypeScript", "React", "Laravel", "MySQL", "Nginx", "Linux"],
    href: "https://bartanco.ir",
    order: 300,
    visible: true,
  },
  {
    title: "GT-Car.ir",
    role: {
      en: "Front-End Developer",
      de: "Frontend-Entwickler",
    },
    description: {
      en: "Cloud-based SaaS that runs day-to-day operations for car service businesses — customer and vehicle records, service requests, spare-parts inventory and financial transactions in one system.",
      de: "Cloud-basiertes SaaS für den Tagesbetrieb von Kfz-Servicebetrieben — Kunden- und Fahrzeugakten, Serviceaufträge, Ersatzteilbestand und Finanztransaktionen in einem System.",
    },
    highlights: {
      en: [
        "Built the front end in Nuxt, Vue.js and TypeScript for a platform serving repair shops, car washes, body shops and diagnostics workshops.",
        "Developed the vehicle intake and service-tracking views that follow a car from arrival through completion, backed by a permanent per-vehicle history.",
        "Implemented the permission-aware interface so each staff member only sees the actions their role allows.",
        "Delivered the spare-parts inventory and accounting screens, plus the SMS flow that keeps customers updated on service status.",
      ],
      de: [
        "Entwickelte das Frontend mit Nuxt, Vue.js und TypeScript für eine Plattform für Werkstätten, Waschanlagen, Lackierbetriebe und Diagnosezentren.",
        "Setzte die Ansichten für Fahrzeugannahme und Serviceverfolgung um, die ein Fahrzeug von der Anlieferung bis zur Fertigstellung begleiten — gestützt auf eine dauerhafte Fahrzeughistorie.",
        "Implementierte die rechtebewusste Oberfläche, sodass jeder Mitarbeitende nur die für seine Rolle zulässigen Aktionen sieht.",
        "Lieferte die Ansichten für Ersatzteilbestand und Buchhaltung sowie den SMS-Ablauf, der Kunden über den Servicestatus informiert.",
      ],
    },
    stack: ["Nuxt", "Vue.js", "TypeScript"],
    href: "https://gt-car.ir",
    order: 280,
    visible: true,
  },
  {
    title: "Janebiphone.com",
    description: {
      en: "Online store for mobile phone accessories — chargers, cables, cases, power banks, audio and smart watches — with a buying-guide blog and customer support workflows.",
      de: "Onlineshop für Handyzubehör — Ladegeräte, Kabel, Hüllen, Powerbanks, Audio und Smartwatches — mit Kaufberatungs-Blog und Kundensupport-Abläufen.",
    },
    stack: ["WordPress", "WooCommerce"],
    href: "https://janebiphone.com",
    order: 220,
    visible: true,
  },
  {
    title: "Jananclinic.ir",
    description: {
      en: "Website for a psychology clinic, including online appointment booking.",
      de: "Website für eine psychologische Praxis, inklusive Online-Terminbuchung.",
    },
    stack: ["WordPress"],
    href: "https://jananclinic.ir",
    order: 200,
    visible: true,
  },
  {
    title: "Honarenesfejahan.net",
    description: {
      en: "Storefront for a handicrafts retailer.",
      de: "Onlineshop für einen Kunsthandwerks-Händler.",
    },
    stack: ["WordPress"],
    href: "https://honarenesfejahan.net",
    order: 190,
    visible: true,
  },
  {
    title: "Adroshop.ir",
    description: {
      en: "E-commerce storefront with a custom product catalogue.",
      de: "E-Commerce-Shop mit individuellem Produktkatalog.",
    },
    stack: ["WordPress"],
    href: "https://adroshop.ir",
    order: 185,
    visible: true,
  },
  {
    title: "Buluni.ir",
    description: {
      en: "E-commerce storefront built for a small retail business.",
      de: "E-Commerce-Shop für ein kleines Einzelhandelsunternehmen.",
    },
    stack: ["WordPress"],
    href: "https://buluni.ir",
    order: 180,
    visible: true,
  },
];
