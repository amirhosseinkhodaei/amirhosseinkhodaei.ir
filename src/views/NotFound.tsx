import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";
import { useI18n } from "@/i18n/context";
import { ui } from "@/i18n/ui";

export const NotFound = () => {
  const { t, to } = useI18n();

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24 sm:py-32">
      <p className="mono-label mb-4 text-accent">{t(ui.notFoundLabel)}</p>
      <h1 className="text-4xl font-semibold sm:text-5xl">{t(ui.notFoundTitle)}</h1>
      <p className="mt-4 max-w-md text-lg text-muted">{t(ui.notFoundBody)}</p>
      <Link
        to={to("/")}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5
                   text-sm font-medium text-accent-fg transition-opacity hover:opacity-90">
        {t(ui.backHome)}
        <Icon name="arrow-right" size={15} />
      </Link>
    </div>
  );
};
