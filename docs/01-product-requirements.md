# Product Requirements Document

## 1. Product summary

Build a premium, content-driven engineering portfolio for Vishal Manam. The product should communicate his experience in software engineering, machine learning, computer vision, data systems, cloud platforms, and intelligent energy systems. It must feel dependable and deliberately engineered rather than decorative or trend-driven.

The initial release is a statically generated Next.js application deployed to Vercel. It supports rich project documentation, structured professional history, theme selection, keyboard navigation, search, filtering, resume access, and future publishing without coupling content to presentation.

## 2. Goals

1. Explain Vishal's professional focus within the first viewport.
2. Make projects the strongest evidence of engineering ability.
3. Present verified experience, education, and skills without exaggeration.
4. Give recruiters and engineers fast paths to resume, GitHub, LinkedIn, email, and project details.
5. Keep routine content additions independent from component changes.
6. Meet a high bar for accessibility, performance, metadata, testability, and maintainability.
7. Establish an architecture that can add a technical blog without restructuring the application.

## 3. Non-goals

- A social network, CMS administration interface, or authenticated user system.
- A visually experimental showcase with heavy animation or WebGL.
- Skill ratings, progress bars, vanity counters, or unsupported metrics.
- A server-dependent contact system in the first implementation unless a provider is selected.
- Fabricated project narratives, screenshots, achievements, or employment details.
- Replicating Brittany Chiang, Linear, Vercel, or another site's visual identity.

## 4. Audiences and jobs to be done

### Recruiter or hiring manager

- Understand role fit in under one minute.
- Scan recent experience, education, primary skills, and project outcomes.
- Download or print the resume and reach Vishal with minimal friction.

### Engineer or technical interviewer

- Evaluate system thinking through detailed project documentation.
- Review architecture, technical decisions, constraints, challenges, and source code.
- Distinguish demonstrated technologies from a generic keyword inventory.

### Collaborator or peer

- Discover current focus and relevant work.
- Find GitHub, LinkedIn, and email.
- Share a stable URL for a project or section.

### Site owner

- Add a project by creating one validated MDX file plus referenced assets.
- Update structured profile content without editing UI components.
- preview and validate changes locally and in CI.

## 5. Product principles

Priority order:

1. Simplicity
2. Readability
3. Performance
4. Accessibility
5. Maintainability
6. Engineering quality
7. Responsiveness
8. Scalability

Every visual or interactive element must improve comprehension, navigation, feedback, or brand recognition.

## 6. Verified content baseline

The supplied profile material supports the following baseline. Copy must remain editable before launch.

### Identity and positioning

- Name: Vishal Manam
- Working position: Software/ML engineer focused on computer vision, edge AI, and intelligent energy systems
- LinkedIn: `https://www.linkedin.com/in/vishal-manam/`
- GitHub username: `vmanam1`
- Email, resume file, canonical production URL, and optional portrait: `TODO`

### Experience

- Software Engineer, ASU Laboratory for Energy and Power Solutions (LEAPS), June 2026–present, Mesa, Arizona
- Store Associate, Follett Higher Education, August 2025–May 2026, Tempe, Arizona
- Assembly Member, Arizona State University Graduate Student Government, June 2025–May 2026, Tempe, Arizona
- Graduate Services Assistant, Ira A. Fulton Schools of Engineering, May 2025–July 2025, Tempe, Arizona
- Computer Vision Engineer Intern, Eternal Robotics, December 2023–June 2024, Hyderabad, India
- Digital Solutions Consultant Intern, Worley, May 2023–September 2023, Hyderabad, India
- PHP Developer Intern, Fore Edge Services, May 2022–July 2022, Hyderabad, India

Full descriptions must be transcribed from user-approved sources and reviewed before launch.

### Education

- MS, Computer Science, Arizona State University, August 2024–May 2026
- BTech, Information Technology, International Institute of Information Technology, Bhubaneswar, December 2020–May 2024

### Initial projects

The product must provide a complete project-detail structure for:

1. PDF RAG Pipeline
2. NYC Data Analytics Pipeline
3. Django Blog Platform
4. Arizona Power Outage Archive

Only titles are currently verified. Descriptions, stacks, links, images, and project claims remain `TODO` until provided.

## 7. Information architecture

### Primary routes

| Route              | Purpose                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `/`                | Positioning, current focus, selected projects, recent experience, primary calls to action |
| `/experience`      | Complete professional timeline with expandable details                                    |
| `/projects`        | Filterable project index                                                                  |
| `/projects/[slug]` | Individual project details                                                                |
| `/skills`          | Categorized skill inventory without ratings                                               |
| `/education`       | Degrees, coursework, activities, and verified achievements                                |
| `/resume`          | Embedded preview with download and print actions                                          |
| `/contact`         | Direct channels and a minimal contact form or mail fallback                               |
| `not-found`        | Helpful recovery path for unknown routes                                                  |

### Future-ready routes

- `/writing`
- `/writing/[slug]`
- `/feed.xml`

These are architectural extension points, not initial navigation items.

## 8. Functional requirements

### Global shell

- Persistent skip link, header, primary navigation, theme control, and footer.
- Current-route indication must not rely on color alone.
- Responsive navigation must be fully keyboard operable and restore focus when closed.
- Theme supports `light`, `dark`, and system preference; explicit choice persists.
- Command interface opens with `Ctrl+K` and `Cmd+K`, supports route/project search, and is not required for ordinary navigation.
- Page transitions and micro-interactions respect `prefers-reduced-motion`.

### Home

- Name, concise role, one short evidence-based description, and current focus.
- Actions for projects, resume, GitHub, LinkedIn, and email.
- Featured projects selected in content metadata.
- Recent/relevant experience preview and links to complete sections.
- No unverified claims, auto-rotating copy, or decorative hero animation.

### Experience

- Reverse-chronological experience cards or timeline.
- Role, organization, location, employment type, dates, summary, technologies, contributions, and external links when available.
- Details are expandable without hiding core identity and dates.
- Expanded state is accessible and usable without JavaScript where practical.

### Projects

- Responsive card grid with title, verified summary, stack, status, links, and a genuine image when supplied.
- Missing screenshots use a deliberate typographic project cover, not fabricated UI.
- Filters derive from content tags and update a result count.
- Filtering is keyboard accessible and may be represented in the URL.
- Project detail pages contain overview, problem, solution, architecture, stack, features, implementation, challenges, lessons, future improvements, media, source, demo, and back navigation.
- Empty project sections render a clearly labeled "Details forthcoming" state or remain excluded according to content metadata.

### Skills

- Categories: Languages, Frontend, Backend, Cloud, DevOps, Databases, AI/ML & Data, and Tools.
- Display compact text badges or lists; no proficiency scores.
- Normalize naming (for example, NVIDIA DeepStream) while preserving truthful scope.

### Education

- Institution, degree, field, dates, coursework, activities, and verified achievements.
- Long coursework lists remain scannable and subordinate to degree information.

### Resume

- Native PDF embed where supported, fallback link otherwise.
- Explicit download and print actions.
- File size and updated date shown when known.
- Resume is excluded until an actual PDF is supplied.

### Contact

- Email, LinkedIn, and GitHub must remain usable without the form.
- Copy-email control provides an accessible status announcement.
- If a form is enabled, validate client and server inputs, provide pending/success/error states, add abuse protection, and avoid exposing secrets.
- Until a form provider and privacy treatment are approved, use a `mailto:` path rather than a nonfunctional form.

### SEO and discovery

- Unique title, description, canonical URL, and social metadata per route.
- Dynamic project Open Graph metadata from content.
- `sitemap.xml`, `robots.txt`, web manifest, and structured data.
- RSS architecture ready; publish a feed only when writing exists.
- Analytics adapter disabled until a provider is selected and privacy implications are approved.

### GitHub integration

- Initial release links to source repositories from content metadata.
- Build-time repository data may be added later behind a cached adapter.
- The page must not depend on live GitHub API availability for core rendering.

## 9. Content requirements

- Detailed project pages use MDX with validated frontmatter.
- Experience, education, skills, navigation, and site settings use validated TypeScript/JSON-compatible content modules.
- Content schemas reject missing required fields, invalid dates, duplicate slugs, unsafe URLs, and unknown enum values during build.
- Draft content is excluded from production.
- Dates store machine-readable values and display human-readable ranges.
- External links declare their destination and are visually distinguishable.
- TODO content is explicit and must not appear as a factual claim in production.

## 10. Quality attributes and acceptance criteria

### Accessibility

- Target WCAG 2.2 AA.
- Complete keyboard access, logical focus order, visible focus, semantic landmarks, accessible names, and adequate target sizes.
- Text and controls meet contrast requirements in both themes.
- Automated accessibility checks cover critical pages; manual keyboard and screen-reader smoke tests are documented.

### Performance

- Static generation for public content pages.
- Minimal client JavaScript; client boundaries limited to interactive features.
- Responsive optimized images with stable dimensions.
- Fonts self-hosted or provided through an optimized Next.js integration.
- Production Lighthouse targets on representative mobile runs: Performance ≥95, Accessibility 100, Best Practices 100, SEO 100. Scores are release targets, not guaranteed claims.

### Reliability and compatibility

- Latest two stable versions of Chrome, Edge, Firefox, and Safari; current iOS Safari and Android Chrome.
- Functional layout from 320 px through large desktop widths.
- CI verifies formatting, lint, types, unit tests, production build, and critical browser tests.
- Unknown routes return a real 404 response and recovery options.

### Security and privacy

- No secrets in client bundles or repository content.
- External content and MDX are trusted-owner authored; raw HTML is disabled by default.
- Security headers configured at deployment.
- Contact submissions, if introduced, collect the minimum information and state handling expectations.
- Analytics is opt-in at the product level and documented.

## 11. Success measures

Initial success is evaluated through product quality and user behavior, without inventing target business metrics:

- All release acceptance criteria pass.
- Recruiters can find resume/contact paths and featured work in usability review.
- Site owner can add a project through one MDX file and assets with no component edit.
- Search and filters return deterministic, relevant results.
- Analytics measurements, if enabled later, may include project opens, resume actions, and contact actions; numerical targets require baseline data.

## 12. Delivery phases

1. Product requirements approval.
2. UI/UX specification approval.
3. Technical design approval.
4. Folder structure approval.
5. Design system approval.
6. Implementation in vertical slices.
7. Content verification and accessibility/performance hardening.
8. Production deployment.

## 13. Open decisions before implementation

- Confirm professional headline and home-page introduction.
- Supply email address, resume PDF, and canonical domain.
- Confirm whether all listed roles should appear or whether nontechnical roles should be de-emphasized.
- Supply complete, approved project content, links, repositories, and genuine media.
- Decide contact approach: mail link only or a named form provider.
- Decide analytics provider and privacy expectations.
- Confirm whether a portrait is desired.
- Confirm deployment ownership and Vercel project.
