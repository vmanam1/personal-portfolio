# Technical Design Document

## 1. Architecture summary

Use a current stable Next.js App Router release with TypeScript and React Server Components as the default. Most routes are statically generated from local validated content. Client components are isolated to theme selection, command search, filters, disclosures that require enhanced behavior, clipboard feedback, and optional contact submission.

The system has four layers:

1. **Content:** MDX case studies and typed structured records.
2. **Domain:** schemas, normalization, sorting, filtering, search indexing, and metadata derivation.
3. **Presentation:** reusable server-first page sections and UI primitives.
4. **Platform:** Next.js routing, Vercel deployment, CI, observability adapters, and security configuration.

No UI component imports raw files directly. Pages request normalized domain models from `lib/content`.

## 2. Technology choices

| Area | Choice | Rationale |
| --- | --- | --- |
| Framework | Next.js App Router | Static generation, metadata, image/font optimization, file routing, Vercel fit |
| Language | TypeScript, strict mode | Content and component contracts fail early |
| Styling | Tailwind CSS with CSS variables | Token-driven styling and low runtime cost |
| Components | shadcn/ui source components | Accessible primitives remain owned and adaptable |
| Motion | Motion for React (Framer Motion package lineage) | Limited progressive micro-interactions |
| Content | MDX for projects; typed data modules for records | Rich case studies plus maintainable structured data |
| Validation | Zod | Build-time validation and inferred types |
| Theme | next-themes | Persistent system/light/dark modes without flash |
| Icons | Lucide React | Consistent, tree-shakeable icon system |
| Unit tests | Vitest + Testing Library | Fast domain/component behavior tests |
| Browser tests | Playwright + axe integration | Critical journeys and automated accessibility checks |
| Formatting/lint | Prettier + ESLint | Deterministic source quality |
| Git hooks | Husky + lint-staged | Fast staged-file checks; CI remains authoritative |
| Deployment | Vercel | Preview deployments and Next.js-native platform |

Versions are selected and locked at implementation time after checking current compatibility. “Latest” never means an unreviewed prerelease.

## 3. Rendering strategy

- Static generation for home, experience, project index/detail, skills, education, resume shell, contact shell, and 404.
- `generateStaticParams` emits every published project slug.
- `generateMetadata` derives canonical/social metadata from validated records.
- Server Components read, sort, and render content.
- Client-side project filtering receives a compact serializable index; the full MDX body never enters the client search bundle.
- Contact form server handling is omitted until provider selection. A mail link is the safe initial behavior.
- GitHub repository enrichment is optional build-time data with deterministic fallback; it cannot make builds dependent on rate-limited live data.

## 4. Content model

### Site configuration

Required fields include name, title, description, canonical URL, locale, social links, email, navigation, and analytics feature flag. Unknown values remain nullable and related UI is omitted.

### Project frontmatter

```text
title, slug, summary, status, publishedAt, updatedAt,
featured, draft, tags, technologies, repositoryUrl,
demoUrl, coverImage, coverAlt, seoTitle, seoDescription
```

The MDX body uses named semantic sections or a required heading contract:

```text
Overview, Problem, Solution, Architecture, Tech Stack,
Features, Implementation, Challenges, Lessons Learned,
Future Improvements, Screenshots
```

Sections without approved content contain an author-facing TODO and are excluded or labeled in the rendered draft. Production validation may prevent featured status until minimum content is complete.

### Experience record

```text
id, company, role, employmentType, location, locationType,
startDate, endDate, current, summary, responsibilities,
contributions, technologies, links, featured, sortOrder
```

### Education record

```text
id, institution, degree, field, startDate, endDate,
location, coursework, activities, achievements, links
```

### Skill group

```text
id, label, order, skills[{ name, aliases?, url? }]
```

Schemas enforce ISO `YYYY-MM` dates, HTTPS external links, unique IDs/slugs, coherent current/end-date rules, nonempty strings, and supported status values.

## 5. MDX pipeline

- Compile local trusted MDX at build time using an App Router-compatible loader.
- Support a restricted component map: links, images, callouts, code blocks, architecture figure, and table wrapper.
- Disable raw arbitrary HTML.
- Add syntax highlighting at build time so code blocks require no client runtime.
- Derive heading IDs and a table of contents through a controlled rehype plugin.
- Validate frontmatter before compilation and aggregate errors into actionable build output.
- Keep authoring conventions documented in a project template.

## 6. Routing

```text
app/
  (site)/
    page.tsx
    experience/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    skills/page.tsx
    education/page.tsx
    resume/page.tsx
    contact/page.tsx
  api/                 # added only for an approved server feature
  layout.tsx
  not-found.tsx
  robots.ts
  sitemap.ts
  manifest.ts
  opengraph-image.tsx
```

The route group organizes code without changing public URLs. Blog routes can be added as a sibling feature using the same content interfaces.

## 7. Component hierarchy

```text
RootLayout
├─ ThemeProvider
├─ SkipLink
├─ SiteHeader
│  ├─ Brand
│  ├─ DesktopNavigation
│  ├─ CommandMenuTrigger
│  ├─ ThemeMenu
│  └─ MobileNavigation
├─ Route main content
│  ├─ PageHeader / Hero
│  ├─ Section
│  ├─ ProjectCard / ProjectGrid
│  ├─ ExperienceItem / ExperienceList
│  ├─ SkillGroup
│  ├─ EducationItem
│  └─ MDXContent
└─ SiteFooter
```

`components/ui` owns low-level primitives. `components/shared` owns cross-feature compositions. Feature directories own components that encode a specific domain concept.

## 8. State and URL design

- Avoid a global state library.
- Theme state is managed by `next-themes`.
- Command menu open/query state is local.
- Project filter state uses URL search parameters (`?tag=...`) for shareability and navigation history.
- Disclosure state is local and progressive; content remains in the document.
- Server state is unnecessary for static content.

## 9. Search

- Generate a compact build-time search index containing route, title, summary, category, and normalized keywords.
- Use deterministic token matching with weighted fields; a small fuzzy matcher may be added only if bundle impact is acceptable.
- Search operates locally for privacy and availability.
- Lazy-load the command dialog and index after interaction or idle time.
- Keep result groups and keyboard semantics independent from matching implementation.

## 10. Themes and styling

- Semantic CSS custom properties define background, foreground, surfaces, borders, accent, focus, and status colors.
- Tailwind utilities consume semantic variables; feature components do not use raw palette values.
- `next-themes` sets a class/data attribute on `<html>` and honors system preference.
- An inline-safe initialization prevents theme flash.
- Component variants use `class-variance-authority`; class merging is centralized.
- Global CSS is limited to tokens, resets/base styles, typography defaults, selection, and focus behavior.

## 11. Images, fonts, and assets

- Use `next/image` for raster content with correct `sizes`, dimensions/aspect ratio, modern formats, and lazy loading below the fold.
- Above-fold priority is used only for the actual largest contentful image.
- SVG icons use Lucide; brand marks are locally owned, accessible assets.
- Do not hotlink employer or institution logos without an approved source/license.
- Use `next/font` for optimized local/package fonts and variable font subsets.
- Resume PDF is a versioned public asset with a stable download filename.

## 12. Metadata and structured data

- Central metadata helper combines route data with site defaults.
- Project pages produce `CreativeWork`/`SoftwareSourceCode` JSON-LD only when fields are supported.
- Person JSON-LD includes verified identity and social links.
- Open Graph images use a consistent generated typographic template unless genuine project media is approved.
- Canonical URL comes from environment-validated site configuration.

## 13. Testing strategy

### Unit

- Schema acceptance/rejection.
- Date formatting and chronological sorting.
- Project filtering and search ranking.
- Metadata and URL helpers.
- Theme-independent class/variant behavior where meaningful.

### Component

- Navigation current-state semantics.
- Experience disclosure keyboard and ARIA behavior.
- Filter selection/result announcements.
- Copy-email success/failure feedback.
- Command menu focus and keyboard interaction.

### Browser

- Navigate all primary routes from compact and desktop viewports.
- Switch and persist each theme.
- Open/search/close command interface by keyboard.
- Filter projects and open a detail page.
- Download/open resume fallback.
- Complete contact path.
- Verify 404 behavior.
- Run axe on representative routes in both themes.

### Visual and performance

- Playwright screenshots for high-risk layouts/themes may be added after visual approval.
- Lighthouse CI checks representative pages with budgets. Environment variance is handled through thresholds and retained reports, not ignored failures.

## 14. CI/CD

### Pull request workflow

1. Install with locked dependencies.
2. Validate formatting.
3. Lint.
4. Type-check.
5. Run unit/component tests with coverage reporting.
6. Build production output and validate content.
7. Install Playwright browser and run critical E2E/accessibility tests.
8. Upload test and Lighthouse artifacts on failure.

### Deployment

- Vercel Git integration creates previews for branches/PRs and production deployment from the protected default branch.
- GitHub Actions performs quality gates. Vercel performs deployment; duplicating deploy commands in Actions is avoided unless organizational requirements demand it.
- Environment variables are defined separately for preview and production and validated at build/start.
- A deployment job may verify the production URL after Vercel reports success.

This interpretation satisfies automatic Vercel deployment while keeping credentials and platform responsibilities simple.

## 15. Security

- Configure Content Security Policy after inventorying required Vercel/analytics domains.
- Add `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and frame restrictions appropriate to resume embedding.
- Use `rel="noopener noreferrer"` where required and validate external protocols.
- Never expose GitHub, mail, or analytics secrets through `NEXT_PUBLIC_*`.
- If a contact API is approved: server validation, honeypot/time checks, rate limiting, origin checks, sanitized provider payloads, generic client errors, and structured server logging.
- Dependabot/Renovate choice is an implementation-time repository decision.

## 16. Observability and analytics

- Core Web Vitals may be recorded through a provider adapter.
- Analytics calls use a small typed event interface; components do not import vendor SDKs.
- Events contain no message content or unnecessary personal data.
- Build/deployment failures remain visible through GitHub and Vercel checks.
- Runtime error reporting is optional and requires provider/privacy approval.

## 17. Extensibility

- Writing uses a second MDX collection implementing the same content-source interface.
- A headless CMS can replace filesystem content behind repository functions without page rewrites.
- New project metadata fields require schema migration and template documentation.
- Internationalization is not implemented initially, but user-visible site copy is kept centralized enough to permit later extraction.

## 18. Implementation sequence after approval

1. Toolchain, repository policy, tokens, root layout, and CI baseline.
2. Content schemas/loaders plus verified structured data.
3. Global shell, themes, accessibility primitives, and responsive navigation.
4. Home and shared project/experience components.
5. Project index, filtering, MDX details, and search.
6. Experience, skills, education, resume, contact, and 404 routes.
7. Metadata, sitemap, robots, structured data, and Open Graph.
8. Test coverage, browser validation, accessibility review, and performance tuning.
9. Content approval and Vercel production release.

Each slice should leave lint, types, tests, and build green.

## 19. Technical open decisions

- Exact stable package versions and MDX integration after compatibility review.
- Contact provider or mail-only launch.
- Analytics/error provider or disabled launch.
- Canonical domain and Vercel project.
- Resume embed constraints and CSP after the PDF is supplied.
- Whether repository enrichment provides enough value to justify token/cache management.
