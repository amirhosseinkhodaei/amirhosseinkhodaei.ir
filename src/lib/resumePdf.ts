import type { jsPDF } from "jspdf";
import { profile, skills, experiences, educations, projects } from "@/data";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 48;
const MARGIN_TOP = 46;
const MARGIN_BOTTOM = 52;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const RIGHT_EDGE = PAGE_WIDTH - MARGIN_X;

const INK = 17;
const MUTED = 68;
const RULE = 176;

const SEPARATOR = "  •  ";

interface Cursor {
  doc: jsPDF;
  y: number;
}

const lineHeight = (size: number) => size * 1.32;

const setBody = (doc: jsPDF, size: number, bold = false, gray = INK) => {
  doc.setFont("helvetica", bold ? "bold" : "normal");
  doc.setFontSize(size);
  doc.setTextColor(gray);
};

const newPage = (cursor: Cursor) => {
  cursor.doc.addPage();
  cursor.y = MARGIN_TOP;
};

const ensureSpace = (cursor: Cursor, needed: number) => {
  if (cursor.y + needed > PAGE_HEIGHT - MARGIN_BOTTOM) newPage(cursor);
};

const writeLines = (
  cursor: Cursor,
  text: string,
  options: {
    size: number;
    bold?: boolean;
    color?: number;
    x?: number;
    width?: number;
    gapAfter?: number;
  }
) => {
  const { doc } = cursor;
  const size = options.size;
  const x = options.x ?? MARGIN_X;
  const width = options.width ?? CONTENT_WIDTH;
  const step = lineHeight(size);

  setBody(doc, size, options.bold, options.color ?? INK);
  const lines = doc.splitTextToSize(text, width) as string[];

  for (const line of lines) {
    ensureSpace(cursor, step);
    setBody(doc, size, options.bold, options.color ?? INK);
    doc.text(line, x, cursor.y + size);
    cursor.y += step;
  }

  cursor.y += options.gapAfter ?? 0;
};

const writeBullet = (cursor: Cursor, text: string) => {
  const { doc } = cursor;
  const size = 9.5;
  const step = lineHeight(size);
  const indent = 12;

  setBody(doc, size);
  const lines = doc.splitTextToSize(text, CONTENT_WIDTH - indent) as string[];

  ensureSpace(cursor, step * Math.min(lines.length, 2));

  lines.forEach((line, index) => {
    ensureSpace(cursor, step);
    setBody(doc, size);
    if (index === 0) doc.text("•", MARGIN_X, cursor.y + size);
    doc.text(line, MARGIN_X + indent, cursor.y + size);
    cursor.y += step;
  });
};

const writeSectionHeading = (cursor: Cursor, title: string, minFollowing = 56) => {
  const { doc } = cursor;
  ensureSpace(cursor, 37 + minFollowing);
  cursor.y += 12;

  setBody(doc, 10, true);
  doc.setCharSpace(0.8);
  doc.text(title.toUpperCase(), MARGIN_X, cursor.y + 10);
  doc.setCharSpace(0);
  cursor.y += 15;

  doc.setDrawColor(RULE);
  doc.setLineWidth(0.6);
  doc.line(MARGIN_X, cursor.y, RIGHT_EDGE, cursor.y);
  cursor.y += 10;
};

const writeHeaderRow = (
  cursor: Cursor,
  left: string,
  right: string,
  size: number,
  bold: boolean
) => {
  const { doc } = cursor;
  const step = lineHeight(size);
  ensureSpace(cursor, step);

  setBody(doc, size, bold);
  doc.text(left, MARGIN_X, cursor.y + size);

  setBody(doc, 9, false, MUTED);
  doc.text(right, RIGHT_EDGE, cursor.y + size, { align: "right" });

  cursor.y += step;
};

const writeContactFlow = (cursor: Cursor) => {
  const { doc } = cursor;
  const size = 9;
  const step = lineHeight(size);

  const segments = [
    { text: profile.location, href: null as string | null },
    ...profile.contacts.map((contact) => ({
      text: contact.label,
      href: contact.href,
    })),
  ];

  setBody(doc, size, false, MUTED);
  const separatorWidth = doc.getTextWidth(SEPARATOR);

  let x = MARGIN_X;
  ensureSpace(cursor, step);

  segments.forEach((segment, index) => {
    setBody(doc, size, false, MUTED);
    const width = doc.getTextWidth(segment.text);

    if (index > 0) {
      if (x + separatorWidth + width > RIGHT_EDGE) {
        cursor.y += step;
        ensureSpace(cursor, step);
        x = MARGIN_X;
      } else {
        doc.text(SEPARATOR, x, cursor.y + size);
        x += separatorWidth;
      }
    }

    if (segment.href) {
      doc.textWithLink(segment.text, x, cursor.y + size, { url: segment.href });
    } else {
      doc.text(segment.text, x, cursor.y + size);
    }
    x += width;
  });

  cursor.y += step;
};

const writeHeader = (cursor: Cursor) => {
  const { doc } = cursor;

  setBody(doc, 21, true);
  doc.text(profile.name, MARGIN_X, cursor.y + 21);
  cursor.y += 27;

  setBody(doc, 11.5, false, MUTED);
  doc.text(profile.title, MARGIN_X, cursor.y + 11.5);
  cursor.y += 18;

  writeContactFlow(cursor);
};

const writeExperience = (cursor: Cursor) => {
  writeSectionHeading(cursor, "Work Experience");

  experiences
    .filter((job) => job.visible)
    .forEach((job, index) => {
      if (index > 0) cursor.y += 8;
      ensureSpace(cursor, 74);

      writeHeaderRow(
        cursor,
        `${job.role}, ${job.company}`,
        `${job.startDate} - ${job.endDate}`,
        11,
        true
      );
      writeLines(cursor, `${job.location} · ${job.employmentType}`, {
        size: 9,
        color: MUTED,
        gapAfter: 2,
      });
      writeLines(cursor, job.context, {
        size: 9.5,
        color: MUTED,
        gapAfter: 4,
      });

      job.highlights.forEach((highlight) => writeBullet(cursor, highlight));

      cursor.y += 3;
      writeLines(cursor, `Technologies: ${job.stack.join(", ")}`, {
        size: 9,
        color: MUTED,
      });
    });
};

const writeSkills = (cursor: Cursor) => {
  writeSectionHeading(cursor, "Technical Skills");

  skills.forEach((group) => {
    const { doc } = cursor;
    const size = 9.5;
    const step = lineHeight(size);
    const label = `${group.category}:`;

    setBody(doc, size, true);
    const labelWidth = doc.getTextWidth(label) + 4;

    setBody(doc, size);
    const lines = doc.splitTextToSize(
      group.items.join(", "),
      CONTENT_WIDTH - labelWidth
    ) as string[];

    ensureSpace(cursor, step);
    setBody(doc, size, true);
    doc.text(label, MARGIN_X, cursor.y + size);

    lines.forEach((line, index) => {
      if (index > 0) ensureSpace(cursor, step);
      setBody(doc, size);
      doc.text(line, MARGIN_X + labelWidth, cursor.y + size);
      cursor.y += step;
    });

    cursor.y += 2;
  });
};

const writeProjects = (cursor: Cursor) => {
  writeSectionHeading(cursor, "Projects");

  projects
    .filter((project) => project.visible)
    .sort((a, b) => b.order - a.order)
    .slice(0, 4)
    .forEach((project) => {
      const { doc } = cursor;
      ensureSpace(cursor, 40);

      setBody(doc, 10, true);
      doc.textWithLink(project.title, MARGIN_X, cursor.y + 10, {
        url: project.href,
      });
      const titleWidth = doc.getTextWidth(project.title);

      if (project.role) {
        setBody(doc, 9.5, false, MUTED);
        doc.text(` - ${project.role}`, MARGIN_X + titleWidth, cursor.y + 10);
      }

      setBody(doc, 9, false, MUTED);
      doc.text(project.stack.join(", "), RIGHT_EDGE, cursor.y + 10, {
        align: "right",
      });
      cursor.y += lineHeight(10);

      writeLines(cursor, project.description, {
        size: 9.5,
        color: MUTED,
        gapAfter: project.highlights ? 2 : 6,
      });

      if (project.highlights) {
        project.highlights.forEach((highlight) =>
          writeBullet(cursor, highlight)
        );
        cursor.y += 6;
      }
    });
};

const writeEducation = (cursor: Cursor) => {
  writeSectionHeading(cursor, "Education");

  educations
    .filter((school) => school.visible)
    .forEach((school) => {
      ensureSpace(cursor, 34);
      writeHeaderRow(
        cursor,
        `${school.degree}, ${school.field}`,
        `${school.startDate} - ${school.endDate}`,
        10,
        true
      );
      writeLines(cursor, school.institution, {
        size: 9.5,
        color: MUTED,
        gapAfter: 5,
      });
    });
};

const writeFooters = (doc: jsPDF) => {
  const total = doc.getNumberOfPages();
  if (total < 2) return;

  for (let page = 1; page <= total; page += 1) {
    doc.setPage(page);
    setBody(doc, 8, false, MUTED);
    doc.text(
      `${profile.name} - Page ${page} of ${total}`,
      MARGIN_X,
      PAGE_HEIGHT - 28
    );
  }
};

export const buildResumePdf = (doc: jsPDF): jsPDF => {
  doc.setProperties({
    title: `${profile.name} — ${profile.title} — Resume`,
    subject: "Resume",
    author: profile.name,
    keywords: skills.flatMap((group) => group.items).join(", "),
    creator: profile.name,
  });
  doc.setLanguage("en-US");

  const cursor: Cursor = { doc, y: MARGIN_TOP };

  writeHeader(cursor);
  writeSectionHeading(cursor, "Professional Summary");
  writeLines(cursor, profile.summary, { size: 9.5, color: MUTED });
  writeExperience(cursor);
  writeSkills(cursor);
  writeProjects(cursor);
  writeEducation(cursor);
  writeFooters(doc);

  return doc;
};

export const resumeFileName = `${profile.name.split(" ").join("-")}-Resume.pdf`;

export const downloadResumePdf = async (): Promise<void> => {
  const { jsPDF: JsPDF } = await import("jspdf");
  const doc = new JsPDF({ unit: "pt", format: "a4", compress: true });
  buildResumePdf(doc).save(resumeFileName);
};
