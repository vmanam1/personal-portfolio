# Project Structure Specification

## 1. Proposed repository tree

This is the intended Phase 6 structure, not an instruction to create implementation files before approval.

```text
personal-portfolio/
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  ├─ pull_request_template.md
│  ├─ dependabot.yml
│  └─ workflows/
│     ├─ ci.yml
│     └─ lighthouse.yml
├─ .husky/
│  └─ pre-commit
├─ app/
│  ├─ (site)/
│  │  ├─ contact/page.tsx
│  │  ├─ education/page.tsx
│  │  ├─ experience/page.tsx
│  │  ├─ projects/
│  │  │  ├─ [slug]/page.tsx
│  │  │  └─ page.tsx
│  │  ├─ resume/page.tsx
│  │  ├─ skills/page.tsx
│  │  └─ page.tsx
│  ├─ globals.css
│  ├─ icon.svg
│  ├─ layout.tsx
│  ├─ manifest.ts
│  ├─ not-found.tsx
│  ├─ opengraph-image.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ contact/
│  │  ├─ contact-actions.tsx
│  │  └─ contact-form.tsx
│  ├─ education/
│  │  └─ education-item.tsx
│  ├─ experience/
│  │  ├─ experience-item.tsx
│  │  └─ experience-list.tsx
│  ├─ layout/
│  │  ├─ mobile-navigation.tsx
│  │  ├─ site-footer.tsx
│  │  ├─ site-header.tsx
│  │  └─ skip-link.tsx
│  ├─ mdx/
│  │  ├─ architecture-figure.tsx
│  │  ├─ callout.tsx
│  │  ├─ code-block.tsx
│  │  └─ mdx-components.tsx
│  ├─ projects/
│  │  ├─ project-card.tsx
│  │  ├─ project-filters.tsx
│  │  ├─ project-grid.tsx
│  │  └─ project-toc.tsx
│  ├─ search/
│  │  ├─ command-menu.tsx
│  │  └─ command-menu-trigger.tsx
│  ├─ shared/
│  │  ├─ empty-state.tsx
│  │  ├─ external-link.tsx
│  │  ├─ page-header.tsx
│  │  ├─ section.tsx
│  │  ├─ social-links.tsx
│  │  └─ technology-list.tsx
│  ├─ skills/
│  │  └─ skill-group.tsx
│  └─ ui/
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     └─ ...
├─ content/
│  ├─ config/
│  │  ├─ navigation.ts
│  │  └─ site.ts
│  ├─ education/
│  │  └─ education.ts
│  ├─ experience/
│  │  └─ experience.ts
│  ├─ projects/
│  │  ├─ _template.mdx
│  │  ├─ arizona-power-outage-archive.mdx
│  │  ├─ django-blog-platform.mdx
│  │  ├─ nyc-data-analytics-pipeline.mdx
│  │  └─ pdf-rag-pipeline.mdx
│  └─ skills/
│     └─ skills.ts
├─ docs/
│  ├─ README.md
│  ├─ 01-product-requirements.md
│  ├─ 02-ui-ux-design.md
│  ├─ 03-technical-design.md
│  ├─ 04-project-structure.md
│  └─ 05-design-system.md
├─ hooks/
│  ├─ use-copy-to-clipboard.ts
│  └─ use-media-query.ts
├─ lib/
│  ├─ analytics/
│  │  ├─ events.ts
│  │  └─ index.ts
│  ├─ content/
│  │  ├─ education.ts
│  │  ├─ experience.ts
│  │  ├─ projects.ts
│  │  ├─ search-index.ts
│  │  ├─ skills.ts
│  │  └─ types.ts
│  ├─ env.ts
│  ├─ metadata.ts
│  ├─ schemas/
│  │  ├─ education.ts
│  │  ├─ experience.ts
│  │  ├─ project.ts
│  │  ├─ site.ts
│  │  └─ skill.ts
│  └─ utils.ts
├─ public/
│  ├─ images/
│  │  ├─ projects/
│  │  └─ social/
│  └─ resume/
│     └─ README.md
├─ styles/
│  └─ syntax.css
├─ tests/
│  ├─ e2e/
│  │  ├─ accessibility.spec.ts
│  │  ├─ navigation.spec.ts
│  │  ├─ projects.spec.ts
│  │  └─ theme.spec.ts
│  ├─ fixtures/
│  └─ unit/
│     ├─ content.test.ts
│     ├─ dates.test.ts
│     └─ search.test.ts
├─ .editorconfig
├─ .env.example
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.json
├─ components.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ playwright.config.ts
├─ postcss.config.mjs
├─ README.md
├─ tsconfig.json
└─ vitest.config.ts
```

## 2. Ownership rules

- `app/` composes routes, metadata, and route-specific loading/error boundaries. It does not own portfolio records.
- `content/` is the editorial source of truth. It never imports React components except MDX through the controlled component map.
- `lib/content/` loads, validates, normalizes, sorts, and queries content.
- `lib/schemas/` owns external/content boundaries and inferred domain types.
- `components/ui/` contains generic primitives with no portfolio-domain knowledge.
- Feature component directories render domain concepts and may depend on UI/shared primitives.
- `components/shared/` contains reusable compositions with stable cross-feature meaning.
- `hooks/` contains browser-only reusable behavior; server logic is not placed there.
- `public/` contains approved immutable assets only. Asset provenance must be known.
- `tests/` owns cross-page browser tests and unit suites that do not naturally colocate.

## 3. Dependency direction

```text
app → feature components → shared/ui components
app → lib/content → schemas/content files
feature components → domain types
content files → no application modules
ui components → utilities only
```

Circular imports and imports from `app/` into reusable modules are prohibited.

## 4. Naming conventions

- Files and route slugs: kebab-case.
- React components and TypeScript types: PascalCase.
- Functions/variables: camelCase.
- Constants: camelCase unless a true environment/build constant benefits from uppercase.
- Content IDs/slugs remain stable after publication.
- Boolean names use `is`, `has`, `can`, or a domain adjective such as `featured` when frontmatter readability matters.

## 5. Project authoring workflow

1. Copy `content/projects/_template.mdx` to a unique slug.
2. Complete validated frontmatter.
3. Write only evidence-based case-study sections.
4. Place approved assets in `public/images/projects/<slug>/`.
5. Run content validation and tests.
6. Preview themes, responsive layouts, keyboard navigation, metadata, and social image.
7. Set `draft: false` only when required launch content is approved.

Adding a project must not require editing a component, route registry, sitemap, or search implementation.

## 6. Repository conventions

- Default branch is protected after GitHub setup.
- Changes use focused commits and pull requests once the initial repository baseline exists.
- Conventional-style commit subjects are preferred (`docs:`, `feat:`, `fix:`, `test:`, `chore:`).
- Generated output, environment secrets, browser artifacts, coverage, and local editor files are ignored.
- Lockfile changes accompany dependency changes.
- Husky provides developer feedback; CI is the enforcement boundary.

## 7. Architecture constraints

- No project/experience/education/skill arrays inside React components.
- No index barrel files that obscure dependency direction across features.
- No generic `helpers.ts` or `types.ts` dumping grounds outside a bounded domain.
- No premature repository/service abstraction where a pure loader function is sufficient.
- No client component solely because a descendant is interactive; move the client boundary down.
- No third-party component wrapper unless it enforces a real product convention.
