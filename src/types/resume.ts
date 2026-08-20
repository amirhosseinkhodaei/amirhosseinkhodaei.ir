export type IconName =
  | "globe"
  | "mail"
  | "phone"
  | "map-pin"
  | "github"
  | "linkedin"
  | "twitter"
  | "telegram"
  | "link"
  | "download"
  | "arrow-right"
  | "arrow-up-right"
  | "sun"
  | "moon"
  | "print";

export interface ContactLink {
  label: string;
  href: string;
  icon: IconName;
  primary?: boolean;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  intro: string;
  contacts: ContactLink[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  context: string;
  startDate: string;
  startISO: string;
  endDate: string;
  endISO?: string;
  location: string;
  employmentType: string;
  highlights: string[];
  stack: string[];
  links?: { title: string; href: string }[];
  visible: boolean;
}

export interface Project {
  title: string;
  role?: string;
  description: string;
  highlights?: string[];
  stack: string[];
  href: string;
  order: number;
  visible: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  field: string;
  startDate: string;
  startISO: string;
  endDate: string;
  endISO: string;
  visible: boolean;
}
