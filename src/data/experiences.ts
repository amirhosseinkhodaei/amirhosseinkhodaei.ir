import type { Experience } from "@/types/resume";

export const experiences: Experience[] = [
  {
    role: "Front-End Engineer",
    company: "PayamPardaz",
    companyUrl: "https://payampardaz.com",
    context:
      "IT security product company with 150+ delivered research and professional-services projects.",
    startDate: "Oct 2022",
    startISO: "2022-10",
    endDate: "Present",
    location: "Isfahan, Iran",
    employmentType: "Full-time",
    highlights: [
      "Architected a company-wide design system that wraps Element Plus into role-specific components, adopted by 80%+ of department projects and reducing build and maintenance effort by 80%.",
      "Led the migration of 90%+ of the codebase from the Options API to the Composition API, standardizing component patterns across teams.",
      "Hardened the transaction signing flow with an additional data push-notification step, increasing resistance to man-in-the-middle attacks by an estimated 10%.",
      "Rebuilt and maintain 3+ legacy dashboards, including the multi-factor authentication system.",
      "Deliver interactive Vue.js dashboards that cut manual data analysis by 40% and enable real-time monitoring of key performance indicators.",
    ],
    stack: ["Vue.js", "TypeScript", "Ansible", "Ubuntu"],
    links: [{ title: "payampardaz.com", href: "https://payampardaz.com" }],
    visible: true,
  },
  {
    role: "Front-End Engineer",
    company: "SnappCarFix / CarFillo",
    companyUrl: "https://snappcarfix.com",
    context:
      "Snapp-backed marketplace for car parts and services, spanning storefronts for stores, service centers, agents and sellers.",
    startDate: "Feb 2021",
    startISO: "2021-02",
    endDate: "Sep 2022",
    endISO: "2022-09",
    location: "Isfahan, Iran",
    employmentType: "Full-time",
    highlights: [
      "Architected core modules for 3 React front-end projects, improving load times by 15%.",
      "Rebuilt the call-center panel in React, raising user satisfaction by 40%.",
      "Delivered platform solutions for 10 clients, driving a 25% increase in user engagement.",
      "Maintained and extended 5 production projects, reducing bug reports by 30%.",
      "Built a real-time web crawler with a Python backend and React front end, processing 1,000+ pages per hour.",
      "Delivered 4 projects within Scrum teams, consistently meeting sprint commitments.",
    ],
    stack: ["React", "Redux", "Python", "WordPress"],
    links: [
      { title: "snappcarfix.com", href: "https://snappcarfix.com" },
      { title: "carfillo.com", href: "https://carfillo.com" },
    ],
    visible: true,
  },
];
