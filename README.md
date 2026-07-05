# Vishal Manam — Personal Portfolio

A production-oriented portfolio built with Next.js, TypeScript, Tailwind CSS, MDX, and a server-first content architecture.

## Status

The MVP is under implementation. It is deployment-ready by design but is not connected to Vercel, a custom domain, analytics, or any deployment workflow.

Known content TODOs:

- Approved public email address
- Résumé PDF
- Complete project narratives, confirmed stacks, genuine screenshots, and live-demo URLs
- Canonical production domain

## Local development

Requirements:

- Node.js 24 or newer
- npm 11 or newer

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell systems that block `npm.ps1`, use `npm.cmd` in the same commands—for example, `npm.cmd install` and `npm.cmd run dev`.

## Production preview

Build and run the optimized production application locally:

```bash
npm run build
npm run start
```

Open `http://localhost:3000`. Stop the server with `Ctrl+C`. This does not deploy or publish the application.

## Quality gates

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npx playwright install chromium
npm run test:e2e
```

The GitHub Actions workflow runs the same checks without deploying.

For the complete non-browser quality suite, run:

```bash
npm run check
```

For browser tests, install Chromium once with `npx playwright install chromium`, start from a free port 3000, and run `npm run test:e2e`. The browser suite covers desktop and mobile navigation, themes, accessibility, metadata, links, MDX, keyboard behavior, and runtime console errors.

Use [`REVIEW_CHECKLIST.md`](./REVIEW_CHECKLIST.md) for the manual QA and design-review pass.

## Content architecture

- `content/projects/*.mdx`: project frontmatter and detailed project content
- `content/experience`: professional history
- `content/education`: degrees and coursework
- `content/skills`: categorized technologies
- `content/config`: site and navigation configuration
- `lib/schemas`: build-time Zod validation
- `lib/content`: content queries and normalization

Adding a project requires one MDX file:

1. Copy `content/projects/_template.mdx` to `content/projects/<slug>.mdx`.
2. Make the filename and frontmatter `slug` identical.
3. Complete the frontmatter and project sections, then set `draft: false`.
4. Use `featuredOrder: null` for the Projects page only, or a unique positive number to feature and order it on the homepage.

The project index, detail route, sitemap, and homepage list update automatically without component changes.

## Documentation

The approved product, UI/UX, architecture, structure, and design-system specifications are indexed in [`docs/README.md`](./docs/README.md).

## Deployment boundary

No deployment is authorized. When a production domain is selected, set `NEXT_PUBLIC_SITE_URL` to its HTTPS origin and review metadata, sitemap output, security policy, and resume/contact assets before publishing.
