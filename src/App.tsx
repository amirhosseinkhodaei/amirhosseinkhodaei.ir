import { useEffect, type ReactNode } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Home } from "@/views/Home";
import { Resume } from "@/views/Resume";
import { Projects } from "@/views/Projects";
import { NotFound } from "@/views/NotFound";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  splitLocalePath,
} from "@/i18n/config";
import { I18nProvider } from "@/i18n/context";
import { ui } from "@/i18n/ui";

const titles = {
  "/": ui.titleHome,
  "/resume": ui.titleResume,
  "/projects": ui.titleProjects,
} as const;

const RouteEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { locale, path } = splitLocalePath(pathname);
    const meta = LOCALE_META[locale];

    document.documentElement.lang = meta.htmlLang;

    const title = titles[path as keyof typeof titles] ?? ui.titleNotFound;
    document.title = title[locale];

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const legacyHashRoutes: Record<string, string> = {
  "#resume": "/resume",
  "#projects": "/projects",
};

const LegacyHashRedirect = ({ children }: { children: ReactNode }) => {
  const { hash } = useLocation();
  const target = legacyHashRoutes[hash];

  return target ? <Navigate to={target} replace /> : <>{children}</>;
};

const pages = [
  {
    path: "",
    element: (
      <LegacyHashRedirect>
        <Home />
      </LegacyHashRedirect>
    ),
  },
  { path: "resume", element: <Resume /> },
  { path: "projects", element: <Projects /> },
];

export const App = () => (
  <I18nProvider>
    <RouteEffects />
    <Routes>
      <Route element={<Layout />}>
        {pages.map((page) => (
          <Route
            key={`root-${page.path}`}
            index={page.path === ""}
            path={page.path || undefined}
            element={page.element}
          />
        ))}

        {LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) =>
          pages.map((page) => (
            <Route
              key={`${locale}-${page.path}`}
              path={`${locale}${page.path ? `/${page.path}` : ""}`}
              element={page.element}
            />
          ))
        )}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </I18nProvider>
);
