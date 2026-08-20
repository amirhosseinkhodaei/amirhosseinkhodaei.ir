import type { Project } from "@/types/resume";

export const projects: Project[] = [
  {
    title: "GT-Car.ir",
    role: "Front-End Developer",
    description:
      "Cloud-based SaaS that runs day-to-day operations for car service businesses — customer and vehicle records, service requests, spare-parts inventory and financial transactions in one system.",
    highlights: [
      "Built the front end in Nuxt, Vue.js and TypeScript for a platform serving repair shops, car washes, body shops and diagnostics workshops.",
      "Developed the vehicle intake and service-tracking views that follow a car from arrival through completion, backed by a permanent per-vehicle history.",
      "Implemented the permission-aware interface so each staff member only sees the actions their role allows.",
      "Delivered the spare-parts inventory and accounting screens, plus the SMS flow that keeps customers updated on service status.",
    ],
    stack: ["Nuxt", "Vue.js", "TypeScript"],
    href: "https://gt-car.ir",
    order: 280,
    visible: true,
  },
  {
    title: "Bartanco.ir",
    role: "Creator, Full-Stack Developer & Project Lead",
    description:
      "End-to-end e-commerce and accounting platform: a storefront backed by an automated accounting system and four permission-scoped panels for drivers, warehouse staff, customers and administrators.",
    highlights: [
      "Built the entire product from scratch as its sole original developer — database design, Laravel back end and front end.",
      "Designed the relational schema behind the accounting workflow, covering orders, inventory, deliveries and role-based access across four panels.",
      "Rewrote the client in Next.js and TypeScript, replacing the server-rendered implementation with a typed, component-driven front end.",
      "Refactored the Laravel Blade views into a REST API, decoupling the front end and letting every panel share a single back end.",
      "Owned DevOps and release engineering end to end: provisioned and configured the production server, web server and deployment pipeline.",
      "Led a team of 2 developers as project lead, from planning through delivery.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Laravel",
      "MySQL",
      "Nginx",
      "Linux",
    ],
    href: "https://bartanco.ir",
    order: 300,
    visible: true,
  },
  {
    title: "Janebiphone.com",
    description:
      "Online store for mobile phone accessories — chargers, cables, cases, power banks, audio and smart watches — with a buying-guide blog and customer support workflows.",
    stack: ["WordPress", "WooCommerce"],
    href: "https://janebiphone.com",
    order: 220,
    visible: true,
  },
  {
    title: "Jananclinic.ir",
    description:
      "Website for a psychology clinic, including online appointment booking.",
    stack: ["WordPress"],
    href: "https://jananclinic.ir",
    order: 200,
    visible: true,
  },
  {
    title: "Honarenesfejahan.net",
    description: "Storefront for a handicrafts retailer.",
    stack: ["WordPress"],
    href: "https://honarenesfejahan.net",
    order: 190,
    visible: true,
  },
  {
    title: "Adroshop.ir",
    description: "E-commerce storefront with a custom product catalogue.",
    stack: ["WordPress"],
    href: "https://adroshop.ir",
    order: 185,
    visible: true,
  },
  {
    title: "Buluni.ir",
    description: "E-commerce storefront built for a small retail business.",
    stack: ["WordPress"],
    href: "https://buluni.ir",
    order: 180,
    visible: true,
  },
];
