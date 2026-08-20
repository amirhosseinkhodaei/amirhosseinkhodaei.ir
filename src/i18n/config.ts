export const LOCALES = ["en", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export type Localized<T = string> = Record<Locale, T>;

export const DEFAULT_LOCALE: Locale = "en";

interface LocaleMeta {
  label: string;
  englishLabel: string;
  htmlLang: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "English", englishLabel: "English", htmlLang: "en" },
  de: { label: "Deutsch", englishLabel: "German", htmlLang: "de" },
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const splitLocalePath = (
  pathname: string
): { locale: Locale; path: string } => {
  const [, first, ...rest] = pathname.split("/");
  if (isLocale(first) && first !== DEFAULT_LOCALE) {
    return { locale: first, path: `/${rest.join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { locale: DEFAULT_LOCALE, path: pathname.replace(/\/$/, "") || "/" };
};

export const localePath = (locale: Locale, path: string): string => {
  const clean = path === "/" ? "" : path;
  return locale === DEFAULT_LOCALE ? clean || "/" : `/${locale}${clean}`;
};
