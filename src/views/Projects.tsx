import { projects } from "@/data";
import { Icon } from "@/components/Icon";
import type { Project } from "@/types/resume";

const visibleProjects = projects
  .filter((project) => project.visible)
  .sort((a, b) => b.order - a.order);

const featured = visibleProjects.filter((project) => project.highlights?.length);
const rest = visibleProjects.filter((project) => !project.highlights?.length);

const StackList = ({ stack }: { stack: string[] }) => (
  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
    {stack.map((tech) => (
      <li key={tech} className="mono-label text-subtle">
        {tech}
      </li>
    ))}
  </ul>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <a
    href={project.href}
    target="_blank"
    rel="noreferrer"
    className="group block rounded-[var(--radius-card)] border border-line bg-surface
               p-6 transition-colors duration-200 hover:border-accent">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h2>
        {project.role && (
          <p className="mono-label mt-1.5 text-accent">{project.role}</p>
        )}
      </div>
      <Icon
        name="arrow-up-right"
        size={18}
        className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-accent"
      />
    </div>

    <p className="mt-4 max-w-2xl leading-relaxed text-muted">
      {project.description}
    </p>

    {project.highlights && (
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="relative pl-5 text-sm leading-relaxed text-muted">
            <span
              aria-hidden="true"
              className="absolute left-0 top-[0.55em] size-1.5 rounded-full bg-accent"
            />
            {highlight}
          </li>
        ))}
      </ul>
    )}

    <StackList stack={project.stack} />
  </a>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.href}
    target="_blank"
    rel="noreferrer"
    className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line
               bg-surface p-5 transition-colors duration-200 hover:border-accent">
    <div className="flex items-start justify-between gap-3">
      <h2 className="text-lg font-semibold transition-colors group-hover:text-accent">
        {project.title}
      </h2>
      <Icon
        name="arrow-up-right"
        size={16}
        className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-accent"
      />
    </div>

    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
      {project.description}
    </p>

    <StackList stack={project.stack} />
  </a>
);

export const Projects = () => (
  <div className="mx-auto max-w-3xl px-5 py-16">
    <header className="animate-rise mb-12">
      <h1 className="text-4xl font-semibold sm:text-5xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Client platforms, storefronts and internal tools I designed, built and
        shipped — several of them from the database up to the server.
      </p>
    </header>

    {featured.length > 0 && (
      <div className="mb-4 space-y-4">
        {featured.map((project, index) => (
          <div
            key={project.href}
            className="animate-rise"
            style={{ animationDelay: `${index * 60}ms` }}>
            <FeaturedCard project={project} />
          </div>
        ))}
      </div>
    )}

    <ul className="grid gap-4 sm:grid-cols-2">
      {rest.map((project, index) => (
        <li
          key={project.href}
          className="animate-rise"
          style={{ animationDelay: `${(featured.length + index) * 60}ms` }}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  </div>
);
