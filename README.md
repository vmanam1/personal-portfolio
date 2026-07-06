# Vishal Manam — Personal Portfolio

A production-ready personal portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and MDX. Designed to be fast, accessible, and easy to maintain — content lives in flat files and config, so updates require no component changes.

**Live site:** _Deployment pending_ — `main` is ready.

---

## Pages

| Route              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `/`                | Homepage — hero, current focus, featured projects, experience preview |
| `/projects`        | Full project index                                                    |
| `/projects/[slug]` | Individual project detail with GitHub link and live demo              |
| `/experience`      | Full reverse-chronological work history                               |
| `/education`       | Degrees and academic background                                       |
| `/skills`          | Categorized technology toolkit                                        |
| `/resume`          | Embedded PDF viewer with download and print controls                  |
| `/contact`         | Contact intro with LinkedIn, email, and a Formspree-powered form      |

---

## Tech stack

### Core

| Package                                                         | Purpose                                               |
| --------------------------------------------------------------- | ----------------------------------------------------- |
| [Next.js 15](https://nextjs.org)                                | App Router, React Server Components, static export    |
| [React 19](https://react.dev)                                   | UI library                                            |
| [TypeScript](https://www.typescriptlang.org)                    | Type safety across the entire codebase                |
| [Tailwind CSS v4](https://tailwindcss.com)                      | Utility-first styling with CSS custom property tokens |
| [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | MDX rendering for project content                     |
| [Zod](https://zod.dev)                                          | Build-time schema validation for all content          |
| [Geist Sans](https://vercel.com/font)                           | Primary typeface                                      |
| [Framer Motion](https://www.framer.com/motion)                  | Subtle motion (lift on project cards)                 |
| [Lucide React](https://lucide.dev)                              | Icon set                                              |
| [react-icons](https://react-icons.github.io/react-icons)        | Brand icons (GitHub, LinkedIn, LeetCode, etc.)        |
| [next-themes](https://github.com/pacocoursey/next-themes)       | Dark / light / system theme switching                 |
| [Radix UI](https://www.radix-ui.com)                            | Accessible dialog, dropdown, and slot primitives      |

### Quality & tooling

| Package                                                       | Purpose                                                  |
| ------------------------------------------------------------- | -------------------------------------------------------- |
| [Vitest](https://vitest.dev)                                  | Unit tests for content schemas and data                  |
| [Playwright](https://playwright.dev)                          | E2E tests — navigation, accessibility, runtime, keyboard |
| [@axe-core/playwright](https://github.com/dequelabs/axe-core) | Automated accessibility scanning in E2E suite            |
| [ESLint](https://eslint.org)                                  | Linting (Next.js config, zero warnings allowed)          |
| [Prettier](https://prettier.io)                               | Formatting with Tailwind class sorting                   |
| [Husky + lint-staged](https://typicode.github.io/husky)       | Pre-commit hooks — lint and format staged files          |

---

## Project structure

```
personal-portfolio/
├── app/                        # Next.js App Router pages and layouts
│   ├── contact/                # Contact page with form
│   ├── education/              # Education page
│   ├── experience/             # Experience page
│   ├── projects/
│   │   ├── page.tsx            # Project index
│   │   └── [slug]/page.tsx     # Project detail
│   ├── resume/                 # Resume PDF viewer
│   ├── skills/                 # Skills page
│   ├── globals.css             # Design tokens, global styles
│   ├── layout.tsx              # Root layout with metadata and providers
│   ├── page.tsx                # Homepage
│   └── opengraph-image.tsx     # Auto-generated OG image
├── components/
│   ├── contact/                # ContactForm (client component)
│   ├── education/              # EducationItem
│   ├── experience/             # ExperienceItem
│   ├── layout/                 # SiteHeader, SiteFooter, SkipLink
│   ├── motion/                 # MotionLift wrapper
│   ├── projects/               # FeaturedProjectItem
│   ├── seo/                    # PersonJsonLd structured data
│   ├── shared/                 # PageHeader, SectionHeading
│   └── ui/                     # Button, Badge, ThemeMenu
├── content/
│   ├── config/site.ts          # Site name, URL, social links, email, resume path
│   ├── education/education.ts  # Education entries
│   ├── experience/experience.ts# Work history entries
│   ├── projects/*.mdx          # One MDX file per project
│   └── skills/skills.ts        # Skill groups and items
├── docs/                       # Product, UX, architecture, and design docs
│   └── resume.pdf              # Source resume (served from public/resume.pdf)
├── lib/
│   ├── content/                # Content query functions (projects, experience, etc.)
│   ├── schemas/                # Zod schemas for all content types
│   └── utils.ts                # cn() utility
├── public/
│   └── resume.pdf              # Publicly served resume PDF
├── tests/
│   ├── e2e/                    # Playwright E2E specs
│   └── unit/                   # Vitest unit specs
└── REVIEW_CHECKLIST.md         # Manual QA and design review checklist
```

---

## Local development

**Requirements:**

- Node.js ≥ 22
- npm ≥ 10

```bash
npm ci         # install from lockfile
npm run dev    # start dev server at http://localhost:3000
```

> **Windows PowerShell note:** If you see a script execution error for `npm.ps1`, use `npm.cmd` instead — e.g. `npm.cmd ci` and `npm.cmd run dev`. Alternatively, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process` in your terminal session.

---

## Production preview

```bash
npm run build
npm run start
```

Open `http://localhost:3000`. This runs the optimized production build locally without deploying.

> **Windows PowerShell note:** `&&` is not supported in older PowerShell versions. Run the two commands separately, or use a semicolon: `npm run build; npm run start`.

---

## Quality gates

Run the full non-browser suite in one command:

```bash
npm run check
```

This runs: format check → lint → type check → unit tests → production build.

Individual commands:

```bash
npm run format:check   # Prettier format check
npm run lint           # ESLint (zero warnings)
npm run typecheck      # TypeScript (no emit)
npm run test           # Vitest unit tests
npm run build          # Next.js production build
```

Browser E2E tests (run once after install):

```bash
npx playwright install chromium
npm run test:e2e
```

The E2E suite covers desktop and mobile navigation, dark/light themes, keyboard accessibility, ARIA landmarks, metadata, external links, MDX rendering, and runtime console errors.

A GitHub Actions workflow runs the same non-browser checks (`npm run check`) on every push — no deployment is triggered.

Use [`REVIEW_CHECKLIST.md`](./REVIEW_CHECKLIST.md) for the full manual QA and design-review pass before each release.

---

## Content architecture

All content lives in flat files under `content/`. No CMS, no database, no API.

### Site config — `content/config/site.ts`

Central source of truth for name, URL, email, social links, and resume path:

```ts
export const siteConfig = {
  name: "Vishal Manam",
  title: "Software & ML Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "vmanam1@asu.edu",
  resume: {
    path: "/resume.pdf", // set to null to show "pending" state
    updatedAt: "2026-07",
  },
  social: {
    github: "https://github.com/vmanam1",
    linkedin: "https://www.linkedin.com/in/vishal-manam/",
    leetcode: "https://leetcode.com/u/vmanam1/",
    instagram: "https://www.instagram.com/vmanam1",
    twitter: "https://x.com/VishalManam",
    letterboxd: "https://letterboxd.com/vmanam1/",
  },
};
```

### Projects — `content/projects/*.mdx`

Each project is a single MDX file. To add a project:

1. Copy `content/projects/_template.mdx` to `content/projects/<slug>.mdx`
2. Make the filename and `slug` frontmatter field identical
3. Fill in the frontmatter and write the project narrative
4. Set `draft: false` to publish
5. Set `featuredOrder` to a unique positive integer to feature it on the homepage, or `null` for the projects page only

The project index, detail route, sitemap, and homepage list all update automatically — no component changes needed.

**Frontmatter fields:**

```yaml
title: Project Name
slug: project-name
summary: One-sentence summary shown on cards and in meta descriptions.
status: Complete | In Progress | Active | Archived
publishedAt: 2026-01
updatedAt: 2026-07
displayOrder: 1 # Order on the /projects page (lower = first)
featuredOrder: 1 # Order on homepage (null = not featured)
draft: false # true = hidden everywhere
tags:
  - AI/ML
technologies:
  - Python
repositoryUrl: https://github.com/vmanam1/project-name # or null
demoUrl: https://example.com # or null
```

### Experience — `content/experience/experience.ts`

TypeScript array of experience entries validated by Zod. Set `featured: true` to include a role in the homepage preview. Set `current: true` for the active role.

### Education, Skills — `content/education/education.ts`, `content/skills/skills.ts`

TypeScript arrays of structured entries. Update directly — pages re-render automatically.

### Resume — `public/resume.pdf`

The resume PDF is served as a static file from `public/resume.pdf`. To update:

1. Replace `docs/resume.pdf` with the new version
2. Copy it to `public/resume.pdf`
3. Update `resume.updatedAt` in `content/config/site.ts`
4. Commit and push

To hide the resume (revert to "pending" state), set `resume.path: null` in the site config.

---

## Contact form

The contact form on `/contact` is powered by [Formspree](https://formspree.io). The endpoint is configured in [`components/contact/contact-form.tsx`](./components/contact/contact-form.tsx). Submissions are delivered to the email registered with the Formspree account.

---

## Theme system

Three modes are available: **Dark** (default), **Light**, and **System** (follows OS preference). The selection persists across sessions via `next-themes`. Design tokens are CSS custom properties defined in `app/globals.css` and scoped to `:root` (light) and `.dark`.

---

## Deployment

The `main` branch is deployment-ready. Recommended platform: **Vercel** (zero-config for Next.js).

Before deploying:

1. Set the `NEXT_PUBLIC_SITE_URL` environment variable to the production HTTPS origin (e.g. `https://vishalmanam.com`)
2. Verify metadata, canonical URLs, and sitemap output reflect the production domain
3. Confirm `public/resume.pdf` is the approved version
4. Review security headers in `next.config.ts`

---

## Documentation

Full product, UX, architecture, project structure, and design-system specifications are in [`docs/`](./docs/):

| File                                                              | Contents                                    |
| ----------------------------------------------------------------- | ------------------------------------------- |
| [`01-product-requirements.md`](./docs/01-product-requirements.md) | Goals, audience, content scope, constraints |
| [`02-ui-ux-design.md`](./docs/02-ui-ux-design.md)                 | Design language, layout, typography, motion |
| [`03-technical-design.md`](./docs/03-technical-design.md)         | Architecture, routing, rendering, data flow |
| [`04-project-structure.md`](./docs/04-project-structure.md)       | Directory and file conventions              |
| [`05-design-system.md`](./docs/05-design-system.md)               | Color tokens, spacing, components, patterns |
