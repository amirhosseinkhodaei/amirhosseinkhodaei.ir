import type { Localized } from "@/i18n/config";

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
  | "print"
  | "languages"
  | "check"
  | "chevron-down";

export interface ContactLink {
  label: string;
  href: string;
  icon: IconName;
  primary?: boolean;
}

export interface Profile {
  name: Localized;
  title: Localized;
  location: Localized;
  summary: Localized;
  intro: Localized;
  contacts: ContactLink[];
}

export interface SkillGroup {
  category: Localized;
  items: Localized<string[]>;
}

export interface Experience {
  role: Localized;
  company: string;
  companyUrl?: string;
  context: Localized;
  startDate: Localized;
  startISO: string;
  endDate: Localized;
  endISO?: string;
  location: Localized;
  employmentType: Localized;
  highlights: Localized<string[]>;
  stack: string[];
  links?: { title: string; href: string }[];
  visible: boolean;
}

export interface Project {
  title: string;
  role?: Localized;
  description: Localized;
  highlights?: Localized<string[]>;
  stack: string[];
  href: string;
  order: number;
  visible: boolean;
}

export interface Education {
  degree: Localized;
  institution: Localized;
  field: Localized;
  startDate: Localized;
  startISO: string;
  endDate: Localized;
  endISO: string;
  visible: boolean;
}
