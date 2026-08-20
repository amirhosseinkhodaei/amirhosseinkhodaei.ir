import type { SkillGroup } from "@/types/resume";

export const skills: SkillGroup[] = [
  {
    category: { en: "Frontend", de: "Frontend" },
    items: {
      en: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt",
        "Redux",
        "SSR / SSG",
        "Tailwind CSS",
        "Element Plus",
        "Material UI",
        "Ant Design",
        "Responsive Design",
      ],
      de: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt",
        "Redux",
        "SSR / SSG",
        "Tailwind CSS",
        "Element Plus",
        "Material UI",
        "Ant Design",
        "Responsives Design",
      ],
    },
  },
  {
    category: { en: "Languages", de: "Sprachen" },
    items: {
      en: ["JavaScript", "TypeScript", "HTML", "CSS / Sass", "PHP", "Python"],
      de: ["JavaScript", "TypeScript", "HTML", "CSS / Sass", "PHP", "Python"],
    },
  },
  {
    category: { en: "APIs & Data", de: "APIs & Daten" },
    items: {
      en: ["REST API", "API Design", "GraphQL", "Axios", "MySQL", "Database Design"],
      de: ["REST API", "API-Design", "GraphQL", "Axios", "MySQL", "Datenbankdesign"],
    },
  },
  {
    category: { en: "Testing", de: "Testing" },
    items: {
      en: ["Playwright", "Cypress", "End-to-End Testing"],
      de: ["Playwright", "Cypress", "End-to-End-Tests"],
    },
  },
  {
    category: {
      en: "Infrastructure & DevOps",
      de: "Infrastruktur & DevOps",
    },
    items: {
      en: [
        "Docker",
        "Nginx",
        "Linux Servers",
        "Ansible",
        "HAProxy",
        "Git",
        "GitHub / GitLab CI/CD",
        "Server Provisioning",
        "Deployment",
        "Webpack",
        "Vite",
      ],
      de: [
        "Docker",
        "Nginx",
        "Linux-Server",
        "Ansible",
        "HAProxy",
        "Git",
        "GitHub / GitLab CI/CD",
        "Server-Provisionierung",
        "Deployment",
        "Webpack",
        "Vite",
      ],
    },
  },
  {
    category: { en: "Backend & CMS", de: "Backend & CMS" },
    items: {
      en: ["Laravel", "WordPress", "WooCommerce"],
      de: ["Laravel", "WordPress", "WooCommerce"],
    },
  },
  {
    category: {
      en: "Practices & Leadership",
      de: "Arbeitsweise & Führung",
    },
    items: {
      en: [
        "Design Systems",
        "Technical Leadership",
        "Code Review",
        "Clean Code",
        "Web Security",
        "Scrum",
      ],
      de: [
        "Designsysteme",
        "Technische Führung",
        "Code-Review",
        "Clean Code",
        "Web-Sicherheit",
        "Scrum",
      ],
    },
  },
];

export const featuredSkills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Vue.js",
  "Tailwind CSS",
  "Laravel",
  "REST API",
  "Playwright",
  "Docker",
  "Nginx",
  "Linux",
  "CI/CD",
];
