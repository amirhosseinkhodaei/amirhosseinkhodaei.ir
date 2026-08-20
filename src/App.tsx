import { useEffect, type ReactNode } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Home } from "@/views/Home";
import { Resume } from "@/views/Resume";
import { Projects } from "@/views/Projects";
import { NotFound } from "@/views/NotFound";
import { profile } from "@/data";

const titles: Record<string, string> = {
  "/": `${profile.name} — ${profile.title}`,
  "/resume": `Resume — ${profile.name}`,
  "/projects": `Projects — ${profile.name}`,
};

const RouteEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? `Not found — ${profile.name}`;
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

export const App = () => (
  <>
    <RouteEffects />
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <LegacyHashRedirect>
              <Home />
            </LegacyHashRedirect>
          }
        />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);
