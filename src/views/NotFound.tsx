import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";

export const NotFound = () => (
  <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24 sm:py-32">
    <p className="mono-label mb-4 text-accent">Error 404</p>
    <h1 className="text-4xl font-semibold sm:text-5xl">Page not found</h1>
    <p className="mt-4 max-w-md text-lg text-muted">
      That page doesn't exist — it may have been moved or the link is out of
      date.
    </p>
    <Link
      to="/"
      className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5
                 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90">
      Back home
      <Icon name="arrow-right" size={15} />
    </Link>
  </div>
);
