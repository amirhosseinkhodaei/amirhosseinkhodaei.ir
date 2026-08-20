import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALES, LOCALE_META, localePath, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/context";
import { ui } from "@/i18n/ui";
import { Icon } from "./Icon";

export const LanguageSwitcher = () => {
  const { locale, path, t } = useI18n();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next !== locale) navigate(localePath(next, path));
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t(ui.languageLabel)}
        title={t(ui.languageLabel)}
        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[13px]
                    transition-colors duration-200 sm:text-sm ${
                      open
                        ? "border-accent text-accent"
                        : "border-line text-muted hover:border-accent hover:text-accent"
                    }`}>
        <Icon name="languages" size={15} className="shrink-0" />
        <span className="hidden sm:inline">{LOCALE_META[locale].label}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <Icon
          name="chevron-down"
          size={13}
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-xl
                     border border-line bg-elevated p-1 shadow-lg shadow-black/10">
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const active = code === locale;

            return (
              <button
                key={code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                lang={meta.htmlLang}
                onClick={() => choose(code)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2
                            text-start text-sm transition-colors duration-150 ${
                              active
                                ? "bg-accent-soft text-accent"
                                : "text-muted hover:bg-surface hover:text-fg"
                            }`}>
                <span className="flex flex-col">
                  <span className="font-medium">{meta.label}</span>
                  <span className="text-xs text-subtle">{meta.englishLabel}</span>
                </span>
                {active && <Icon name="check" size={15} className="shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
