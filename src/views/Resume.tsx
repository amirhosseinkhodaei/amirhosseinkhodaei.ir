import { useState } from "react";
import { profile, skills, experiences, educations, projects } from "@/data";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { downloadResumePdf } from "@/lib/resumePdf";

const primaryContacts = profile.contacts.filter((contact) => contact.primary);
const socialContacts = profile.contacts.filter((contact) => !contact.primary);
const visibleExperiences = experiences.filter((job) => job.visible);
const visibleEducations = educations.filter((school) => school.visible);
const selectedProjects = projects
  .filter((project) => project.visible)
  .sort((a, b) => b.order - a.order)
  .slice(0, 4);

const DateRange = ({
  startDate,
  startISO,
  endDate,
  endISO,
}: {
  startDate: string;
  startISO: string;
  endDate: string;
  endISO?: string;
}) => (
  <p className="mono-label shrink-0 text-subtle print:text-[8.5pt] print:tracking-normal print:normal-case">
    <time dateTime={startISO}>{startDate}</time>
    {" – "}
    {endISO ? <time dateTime={endISO}>{endDate}</time> : endDate}
  </p>
);

export const Resume = () => {
  const [pending, setPending] = useState(false);

  const handleDownload = async () => {
    setPending(true);
    try {
      await downloadResumePdf();
    } finally {
      setPending(false);
    }
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 print:max-w-none print:px-0 print:py-0">
      <div className="mb-10 flex flex-wrap items-center gap-3 print:hidden">
        <button
          type="button"
          onClick={handleDownload}
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2
                     text-sm font-medium text-accent-fg transition-opacity hover:opacity-90
                     disabled:opacity-60">
          <Icon name="download" size={15} />
          {pending ? "Generating…" : "Download PDF"}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2
                     text-sm font-medium transition-colors hover:border-accent hover:text-accent">
          <Icon name="print" size={15} />
          Print
        </button>
      </div>

      <header className="print-break-avoid pb-8 print:pb-3">
        <h1 className="text-4xl font-semibold sm:text-5xl print:text-[21pt]">
          {profile.name}
        </h1>
        <p className="mt-2 text-xl text-muted print:mt-0.5 print:text-[11.5pt]">
          {profile.title}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted print:mt-2 print:gap-x-4 print:gap-y-0.5 print:text-[9pt]">
          <li className="flex items-center gap-1.5">
            <Icon name="map-pin" size={14} className="text-subtle print:hidden" />
            {profile.location}
          </li>
          {[...primaryContacts, ...socialContacts].map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-accent">
                <Icon
                  name={contact.icon}
                  size={14}
                  className="text-subtle print:hidden"
                />
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <Section title="Professional Summary">
        <p className="max-w-2xl leading-relaxed text-muted print:max-w-none print:text-[9.5pt]">
          {profile.summary}
        </p>
      </Section>

      <Section title="Work Experience">
        <div className="space-y-10 print:space-y-4">
          {visibleExperiences.map((job) => (
            <div
              key={`${job.company}-${job.startISO}`}
              className="print-break-avoid">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold print:text-[11pt]">
                  {job.role}
                  <span className="text-muted">, </span>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent transition-opacity hover:opacity-80 print:text-fg">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <DateRange
                  startDate={job.startDate}
                  startISO={job.startISO}
                  endDate={job.endDate}
                  endISO={job.endISO}
                />
              </div>

              <p className="mono-label mt-1 text-subtle print:mt-0 print:text-[8.5pt] print:tracking-normal print:normal-case">
                {job.location} · {job.employmentType}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted print:mt-1 print:text-[9.5pt]">
                {job.context}
              </p>

              <ul className="mt-4 space-y-2 print:mt-1.5 print:space-y-0.5">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-5 text-sm leading-relaxed print:pl-4 print:text-[9.5pt]">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.55em] size-1.5 rounded-full bg-accent
                                 print:top-[0.45em] print:size-1 print:bg-black"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-subtle print:mt-1.5 print:text-[9pt]">
                <span className="font-medium">Technologies:</span>{" "}
                {job.stack.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Technical Skills">
        <dl className="space-y-2 print:space-y-0.5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="print-break-avoid sm:flex sm:gap-2 print:flex print:gap-1.5">
              <dt className="text-sm font-semibold sm:shrink-0 print:text-[9.5pt]">
                {group.category}:
              </dt>
              <dd className="text-sm leading-relaxed text-muted print:text-[9.5pt]">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Projects">
        <ul className="space-y-5 print:space-y-2">
          {selectedProjects.map((project) => (
            <li key={project.href} className="print-break-avoid">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-base font-semibold print:text-[10pt]">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent transition-opacity hover:opacity-80 print:text-fg">
                    {project.title}
                  </a>
                  {project.role && (
                    <span className="font-normal text-muted"> — {project.role}</span>
                  )}
                </p>
                <p className="mono-label shrink-0 text-subtle print:text-[8.5pt] print:tracking-normal print:normal-case">
                  {project.stack.join(" · ")}
                </p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted print:text-[9.5pt]">
                {project.description}
              </p>
              {project.highlights && (
                <ul className="mt-2 space-y-1 print:mt-1 print:space-y-0.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-sm leading-relaxed print:pl-4 print:text-[9.5pt]">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.55em] size-1.5 rounded-full bg-accent
                                   print:top-[0.45em] print:size-1 print:bg-black"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <ul className="space-y-4 print:space-y-1.5">
          {visibleEducations.map((school) => (
            <li
              key={school.institution}
              className="print-break-avoid flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold print:text-[10pt]">
                  {school.degree}, {school.field}
                </h3>
                <p className="text-sm text-muted print:text-[9.5pt]">
                  {school.institution}
                </p>
              </div>
              <DateRange
                startDate={school.startDate}
                startISO={school.startISO}
                endDate={school.endDate}
                endISO={school.endISO}
              />
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
};
