import { profile } from "@/data";
import { Icon } from "./Icon";

const socials = profile.contacts.filter((contact) => !contact.primary);

export const SiteFooter = () => (
  <footer className="border-t border-line print:hidden">
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
      <p className="text-sm text-subtle">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="flex items-center gap-1">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              className="grid size-9 place-items-center rounded-full text-subtle
                         transition-colors duration-200 hover:bg-surface hover:text-accent">
              <Icon name={social.icon} size={17} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
