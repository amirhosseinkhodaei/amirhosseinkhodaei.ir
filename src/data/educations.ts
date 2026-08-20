import type { Education } from "@/types/resume";

export const educations: Education[] = [
  {
    degree: {
      en: "Master of Science",
      de: "Master of Science (M.Sc.)",
    },
    institution: {
      en: "Malek Ashtar University of Technology",
      de: "Malek Ashtar University of Technology",
    },
    field: {
      en: "Information Security Engineering",
      de: "Informationssicherheit",
    },
    startDate: { en: "Sep 2021", de: "Sept. 2021" },
    startISO: "2021-09",
    endDate: { en: "Sep 2023", de: "Sept. 2023" },
    endISO: "2023-09",
    visible: true,
  },
  {
    degree: {
      en: "Bachelor of Science",
      de: "Bachelor of Science (B.Sc.)",
    },
    institution: {
      en: "Islamic Azad University of Isfahan",
      de: "Islamic Azad University of Isfahan",
    },
    field: {
      en: "Software Engineering",
      de: "Softwaretechnik",
    },
    startDate: { en: "Jan 2019", de: "Jan. 2019" },
    startISO: "2019-01",
    endDate: { en: "Jan 2021", de: "Jan. 2021" },
    endISO: "2021-01",
    visible: true,
  },
];
