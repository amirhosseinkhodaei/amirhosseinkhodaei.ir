import { NavLink, Link } from "react-router-dom";
import { profile } from "@/data";
import { useI18n } from "@/i18n/context";
import { ui } from "@/i18n/ui";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const SiteHeader = () => {
  const { t, to } = useI18n();

  const nav = [
    { path: "/", label: t(ui.navHome) },
    { path: "/resume", label: t(ui.navResume) },
    { path: "/projects", label: t(ui.navProjects) },
  ];

  const name = t(profile.name);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-5">
        <Link
          to={to("/")}
          aria-label={name}
          className="min-w-0 shrink-0 truncate text-[15px] font-semibold tracking-tight
                     transition-colors hover:text-accent">
          <span className="hidden sm:inline">{name}</span>
          <span className="sm:hidden">{initials}</span>
        </Link>

        <nav
          aria-label="Main"
          className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={to(item.path)}
              end={item.path === "/"}
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 text-[13px] transition-colors duration-200 sm:px-3 sm:text-sm ${
                  isActive
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-fg"
                }`
              }>
              {item.label}
            </NavLink>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-line sm:block" />
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
