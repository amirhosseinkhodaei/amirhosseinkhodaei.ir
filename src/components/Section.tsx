import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, children, id }: SectionProps) => (
  <section id={id} className="border-t border-line py-10 print:py-4">
    <h2 className="mono-label mb-6 text-subtle print:mb-2 print:text-[10pt] print:font-bold print:tracking-normal print:text-fg">
      {title}
    </h2>
    {children}
  </section>
);
