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

## Content architecture

- `content/projects/*.mdx`: project frontmatter and case-study content
- `content/experience`: professional history
- `content/education`: degrees and coursework
- `content/skills`: categorized technologies
- `content/config`: site and navigation configuration
- `lib/schemas`: build-time Zod validation
- `lib/content`: content queries and normalization

Adding a project requires one MDX file. The project index, detail route, sitemap, and home-page feature grid derive from validated content automatically.

## Documentation

The approved product, UI/UX, architecture, structure, and design-system specifications are indexed in [`docs/README.md`](./docs/README.md).

## Deployment boundary

No deployment is authorized. When a production domain is selected, set `NEXT_PUBLIC_SITE_URL` to its HTTPS origin and review metadata, sitemap output, security policy, and resume/contact assets before publishing.
