import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_LOCALE,
  localePath,
  splitLocalePath,
  type Locale,
  type Localized,
} from "./config";

interface I18nValue {
  locale: Locale;
  path: string;
  t: <T>(value: Localized<T>) => T;
  to: (path: string, locale?: Locale) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  const value = useMemo<I18nValue>(() => {
    const { locale, path } = splitLocalePath(pathname);
    return {
      locale,
      path,
      t: <T,>(localized: Localized<T>) => localized[locale] ?? localized[DEFAULT_LOCALE],
      to: (target: string, target_locale?: Locale) =>
        localePath(target_locale ?? locale, target),
    };
  }, [pathname]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nValue => {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
};
