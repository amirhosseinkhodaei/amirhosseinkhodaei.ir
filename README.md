# amirhosseinkhodaei.ir

My personal site and résumé.

## Stack

| | |
|---|---|
| Framework | React 19 + React Router 7 |
| Language | TypeScript 7 (strict) |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 (CSS-first theme, light/dark) |
| Languages | English, German |
| Hosting | GitHub Pages |

## Scripts

```bash
npm install      # install dependencies
npm run dev      # dev server on http://localhost:3000
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
npm run typecheck # tsc -b, no emit
npm run deploy   # build and publish dist/ to the gh-pages branch
```

## Structure

```
src/
  App.tsx            locale routes, document titles, legacy /#hash redirects
  index.tsx          entry point
  i18n/              locale config, translation context, UI strings
  types/resume.ts    shared content types
  data/              résumé content — edit these to update the site
  components/        layout, icons, theme toggle, shared UI
  views/             Home, Resume, Projects, NotFound
  lib/               theme persistence, résumé PDF generator
  assets/styles/     Tailwind theme tokens, fonts, print styles
```

All résumé content lives in `src/data/`. Every file is typed against
`src/types/resume.ts`, so a typo in a field name fails `npm run build`.
Translatable fields are typed as `Localized<T>` = `Record<"en" | "de", T>`,
so adding a language or forgetting a translation is a compile error rather than
a missing string at runtime.

## Languages

English is served from `/` and German from `/de`, each with `/resume` and
`/projects` beneath it. The switcher in the header keeps the current page when
changing language. `<html lang>` is set before first paint by the inline script
in `index.html`, and again on every navigation.

Adding a language means adding it to `LOCALES` in `src/i18n/config.ts`; every
`Localized<T>` field then fails to compile until it has a translation.

## Notes

- Theme follows the OS by default; the toggle in the header stores an explicit
  choice in `localStorage`. The initial class is applied by an inline script in
  `index.html` to avoid a flash of the wrong theme.
- The résumé page is semantic (single `h1`, ATS-standard section headings,
  `<time>` elements for every date) and has a dedicated A4 print stylesheet with
  orphan/widow control.
- The downloadable PDF is always English, which is the norm for technical
  résumés.
- "Download PDF" generates the file in the browser from `src/data/` via jsPDF —
  no PDF is committed to the repo, so the download can never drift from the
  site. The output is real selectable text in a single column, which is what
  résumé parsers expect. jsPDF is loaded on demand, so it stays out of the
  initial bundle.
- Deep links work on GitHub Pages via `public/404.html`, which parks the
  requested URL in `sessionStorage` and lets the app restore it on boot.
