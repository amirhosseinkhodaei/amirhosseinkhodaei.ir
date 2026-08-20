import { Link } from "react-router-dom";
import { profile, experiences, projects, featuredSkills } from "@/data";
import { Icon } from "@/components/Icon";
import { downloadResumePdf } from "@/lib/resumePdf";
import { useI18n } from "@/i18n/context";
import { ui } from "@/i18n/ui";

const current = experiences.find((job) => job.endDate.en === "Present");
const primaryContacts = profile.contacts.filter((contact) => contact.primary);
const visibleExperiences = experiences.filter((job) => job.visible);
const featuredProjects = projects
  .filter((project) => project.visible)
  .sort((a, b) => b.order - a.order)
  .slice(0, 3);

export const Home = () => {
  const { t, to, locale } = useI18n();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <section className="animate-rise">
        <p className="mono-label mb-4 text-accent">{t(profile.location)}</p>
        <h1 className="text-4xl font-semibold sm:text-6xl">{t(profile.name)}</h1>
        <p className="mt-3 text-xl text-muted sm:text-2xl">{t(profile.title)}</p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {t(profile.intro)}
        </p>

        {current && (
          <p className="mt-4 text-lg text-muted">
            {t(ui.currentlyPrefix)}{" "}
            <span className="text-fg">{t(current.role)}</span>{" "}
            {t(ui.currentlyJoin)}{" "}
            <a
              href={current.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline decoration-accent/30 underline-offset-4
                         transition-colors hover:decoration-accent">
              {current.company}
            </a>
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to={to("/resume")}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5
                       text-sm font-medium text-accent-fg transition-opacity duration-200
                       hover:opacity-90">
            {t(ui.viewResume)}
            <Icon name="arrow-right" size={15} />
          </Link>
          <Link
            to={to("/projects")}
            className="inline-flex items-center gap-2 rounded-full border border-line
                       px-5 py-2.5 text-sm font-medium transition-colors duration-200
                       hover:border-accent hover:text-accent">
            {t(ui.navProjects)}
          </Link>
          <button
            type="button"
            onClick={() => void downloadResumePdf(locale)}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm
                       text-muted transition-colors duration-200 hover:text-accent">
            <Icon name="download" size={15} />
            {t(ui.pdfShort)}
          </button>
        </div>
      </section>

      <section
        className="animate-rise mt-16 border-t border-line pt-10"
        style={{ animationDelay: "80ms" }}>
        <h2 className="mono-label mb-6 text-subtle">{t(ui.sectionExperience)}</h2>
        <ul className="space-y-5">
          {visibleExperiences.map((job) => (
            <li
              key={job.company}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p>
                <span className="text-fg">{t(job.role)}</span>
                <span className="text-muted"> · </span>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-accent">
                  {job.company}
                </a>
              </p>
              <p className="mono-label shrink-0 text-subtle">
                <time dateTime={job.startISO}>{t(job.startDate)}</time>
                {" – "}
                {job.endISO ? (
                  <time dateTime={job.endISO}>{t(job.endDate)}</time>
                ) : (
                  t(job.endDate)
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="animate-rise mt-12 border-t border-line pt-10"
        style={{ animationDelay: "160ms" }}>
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="mono-label text-subtle">{t(ui.sectionSelectedWork)}</h2>
          <Link
            to={to("/projects")}
            className="text-sm text-muted transition-colors hover:text-accent">
            {t(ui.allProjects)}
          </Link>
        </div>
        <ul className="space-y-4">
          {featuredProjects.map((project) => (
            <li key={project.href}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 rounded-xl border
                           border-line bg-surface px-4 py-3.5 transition-colors duration-200
                           hover:border-accent">
                <div className="min-w-0">
                  <p className="font-medium transition-colors group-hover:text-accent">
                    {project.title}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-sm text-muted">
                    {t(project.description)}
                  </p>
                  <p className="mono-label mt-2 text-subtle">
                    {project.stack.slice(0, 4).join(" · ")}
                  </p>
                </div>
                <Icon
                  name="arrow-up-right"
                  size={16}
                  className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-accent"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="animate-rise mt-12 border-t border-line pt-10"
        style={{ animationDelay: "240ms" }}>
        <h2 className="mono-label mb-5 text-subtle">{t(ui.sectionWorkingWith)}</h2>
        <ul className="flex flex-wrap gap-2">
          {featuredSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="animate-rise mt-12 border-t border-line pt-10"
        style={{ animationDelay: "320ms" }}>
        <h2 className="mono-label mb-5 text-subtle">{t(ui.sectionGetInTouch)}</h2>
        <p className="mb-6 max-w-2xl text-muted">{t(ui.contactBlurb)}</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {primaryContacts.map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-line
                           bg-surface px-4 py-3 transition-colors duration-200
                           hover:border-accent">
                <Icon
                  name={contact.icon}
                  size={16}
                  className="shrink-0 text-subtle transition-colors group-hover:text-accent"
                />
                <span className="truncate text-sm">{contact.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
