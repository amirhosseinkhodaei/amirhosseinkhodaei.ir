import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export const Layout = () => (
  <div className="flex min-h-dvh flex-col">
    <SiteHeader />
    <main id="content" className="flex-1">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);
