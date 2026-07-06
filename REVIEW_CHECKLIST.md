# Local Portfolio Review Checklist

Use this checklist after running either the development server (`npm run dev`) or the local production preview (`npm run build && npm run start`). Review with real browser zoom at 100% unless a step explicitly tests zoom.

Record issues with the route, viewport, theme, reproduction steps, expected result, actual result, and a screenshot when visual context matters.

## Review setup

- [ ] Run `npm ci` successfully from the committed lockfile.
- [ ] Confirm install completes with zero vulnerabilities and no unreviewed install-script warnings.
- [ ] Run `npm run check`; confirm formatting, ESLint, TypeScript, unit tests, and production build pass.
- [ ] Install Chromium once with `npx playwright install chromium`.
- [ ] Run `npm run test:e2e`; confirm the desktop and mobile projects pass.
- [ ] Start `npm run dev` and open `http://localhost:3000`.
- [ ] Also review `npm run build && npm run start` to test production behavior.
- [ ] Keep browser developer tools open and confirm the Console and Network panels show no unexpected errors.
- [ ] Confirm no Vercel project, domain, DNS, analytics, or deployment integration has been configured.

## General visual quality

- [ ] The homepage immediately communicates Vishal’s name, role, and engineering focus.
- [ ] The layout feels calm, premium, minimal, and engineering-focused.
- [ ] Typography is crisp and readable at normal browser zoom.
- [ ] Heading sizes establish a clear hierarchy without overwhelming smaller screens.
- [ ] Body copy has a comfortable line length and line height.
- [ ] Colors feel intentional in both themes rather than mechanically inverted.
- [ ] Teal is used consistently for actions, focus, and small emphasis—not decoration.
- [ ] Borders and surfaces create hierarchy without excessive card chrome.
- [ ] Section spacing is consistent from page to page.
- [ ] Content aligns to the same container and grid system across routes.
- [ ] Branding (`VM`, name, typography, icon) feels coherent and professional.
- [ ] No gradients, glass effects, floating decoration, or distracting visual gimmicks appear.
- [ ] There are no horizontal scrollbars at supported widths.
- [ ] Browser zoom at 200% remains usable without clipped content.

## Homepage

- [ ] Hero copy fits naturally above the fold on desktop and remains concise on mobile.
- [ ] “View projects” and “Résumé” actions are visually prioritized correctly.
- [ ] GitHub and LinkedIn links are discoverable without competing with primary actions.
- [ ] Current-focus copy is accurate and approved.
- [ ] Featured project ordering is intentional.
- [ ] Project cards have consistent heights, spacing, tags, and interaction feedback.
- [ ] Experience preview shows the most relevant roles and no unsupported claims.
- [ ] The transition between hero, focus, projects, experience, and footer feels balanced.

## Header and navigation

- [ ] Logo/name returns to the homepage.
- [ ] Every desktop navigation link opens the expected route.
- [ ] Active navigation states are accurate after direct loads and client navigation.
- [ ] Active states remain understandable without relying only on color.
- [ ] Header remains legible over every page while scrolling.
- [ ] Theme control opens, reports the current selection, and closes with Escape.
- [ ] Focus returns to the theme trigger after its menu closes.
- [ ] Header controls have comfortable mouse and touch targets.
- [ ] There are no duplicate or ambiguous controls at any breakpoint.

## Mobile navigation

- [ ] Menu trigger appears when desktop navigation no longer fits.
- [ ] Menu opens without layout shift or background scrolling.
- [ ] Focus moves into the menu and remains constrained while it is open.
- [ ] Every mobile link navigates and closes the menu.
- [ ] Escape and the close button dismiss the menu.
- [ ] Focus returns to the menu trigger after dismissal.
- [ ] Menu content is fully visible on short and landscape mobile screens.

## Footer

- [ ] Identity statement is concise and readable.
- [ ] GitHub and LinkedIn links open the correct external profiles.
- [ ] External links communicate that they open a new tab to assistive technology.
- [ ] Footer spacing and alignment work on desktop and mobile.
- [ ] Footer does not feel like a dense duplicate sitemap.

## Experience page

- [ ] Roles are in correct reverse-chronological order.
- [ ] Company, role, dates, location, and work mode match approved information.
- [ ] Current-role labeling is accurate.
- [ ] Experience descriptions are complete, readable, and do not hide key details.
- [ ] Technology badges are accurate and do not imply proficiency ratings.
- [ ] Roles with limited supplied detail do not contain fabricated filler.
- [ ] Long company names wrap without breaking alignment.

## Projects page

- [ ] All four projects appear exactly once.
- [ ] Titles and GitHub destinations are correct.
- [ ] Missing screenshots use the deliberate project treatment, not fake imagery.
- [ ] Cards remain aligned with short and long summaries.
- [ ] Card hover, focus, and touch behavior provide equivalent access.
- [ ] The entire intended card link area is usable without invalid nested links.
- [ ] TODO language is honest but not visually dominant.

## Project detail pages

Review each route:

- [ ] PDF RAG Pipeline
- [ ] NYC Data Analytics Pipeline
- [ ] Django Blog Platform
- [ ] Arizona Power Outage Archive

For every project:

- [ ] Title, summary, tags, status, and repository link are correct.
- [ ] GitHub opens the correct repository in a new tab.
- [ ] Live-demo TODO appears only because no approved URL exists.
- [ ] Overview, Problem, Solution, Architecture, Features, Tech Stack, Implementation, Challenges, Lessons Learned, and Future Improvements render in order.
- [ ] MDX headings, paragraphs, lists, links, and spacing are consistent.
- [ ] The status sidebar is readable and sticky only when appropriate.
- [ ] Back navigation and next-project navigation work correctly.
- [ ] Directly loading or refreshing the route returns the same page.
- [ ] Unknown project slugs return the custom 404.

## Skills page

- [ ] Every supplied skill appears in an appropriate category.
- [ ] Names are normalized correctly (for example, NVIDIA DeepStream and VS Code).
- [ ] Categories are ordered intentionally.
- [ ] Badges wrap cleanly without awkward single-item rows.
- [ ] There are no ratings, progress bars, or implied proficiency scores.
- [ ] The complete list remains scannable on mobile.

## Education page

- [ ] Institution, degree, field, location, and dates are correct.
- [ ] Coursework matches approved profile information.
- [ ] Coursework disclosures work with keyboard and pointer input.
- [ ] Activity/leadership information is accurate.
- [ ] Cards maintain consistent internal spacing despite different content lengths.

## Résumé page

- [ ] The route loads and appears in desktop and mobile navigation.
- [ ] The pending-PDF state clearly explains why preview/download/print controls are unavailable.
- [ ] No fake, blank, or broken document embed appears.
- [ ] After a résumé is supplied in a future review, verify embed, fallback, download filename, print behavior, file size, and update date.

## Contact page

- [ ] LinkedIn and GitHub cards open the correct verified profiles.
- [ ] External-link feedback and focus states are clear.
- [ ] Subtle card motion is not distracting.
- [ ] Reduced-motion preference disables card movement.
- [ ] Email/form TODO accurately reflects the missing approved address and provider decision.
- [ ] No nonfunctional form or invented contact detail appears.

## 404 page

- [ ] An unknown route returns an HTTP 404 response.
- [ ] The page explains the problem clearly.
- [ ] Home and Projects recovery links work.
- [ ] Header, footer, theme, and responsive behavior remain available.

## Dark theme

- [ ] Dark mode is the initial default on a first visit.
- [ ] Deep navy surfaces remain distinguishable without looking gray or washed out.
- [ ] Primary, muted, accent, border, focus, and danger colors remain legible.
- [ ] Cards, popovers, mobile navigation, and active states are visually consistent.
- [ ] Browser controls and the declared color scheme match the dark interface.

## Light theme

- [ ] Warm off-white background feels intentional rather than like inverted dark mode.
- [ ] Dark text and muted text have comfortable contrast.
- [ ] White/surface cards remain distinguishable from the page background.
- [ ] Accent fill and accent text remain readable.
- [ ] Borders, popovers, mobile navigation, and active states are visually consistent.

## Theme behavior

- [ ] System, Light, and Dark options all work.
- [ ] Explicit theme choice persists after refresh and route navigation.
- [ ] System mode tracks the operating-system preference.
- [ ] Initial load has no incorrect-theme flash.
- [ ] Theme changes produce no console warnings or hydration errors.

## Responsive layouts

Review at minimum:

- [ ] 320 × 568 mobile
- [ ] 390 × 844 mobile
- [ ] 768 × 1024 tablet portrait
- [ ] 1024 × 768 tablet landscape/small laptop
- [ ] 1366 × 768 laptop
- [ ] 1440 × 900 desktop
- [ ] 1920 × 1080 desktop
- [ ] 2560 × 1440 ultra-wide

At each size:

- [ ] No horizontal overflow, clipped text, or overlapping controls.
- [ ] Container width and side gutters feel balanced.
- [ ] Cards move to the intended column count.
- [ ] Text line lengths remain readable.
- [ ] Header switches modes before links collide.
- [ ] Sticky elements do not hide content.
- [ ] Touch targets remain at least 44 px on touch layouts.

## Keyboard and accessibility

- [ ] First Tab reveals the “Skip to main content” link.
- [ ] Activating the skip link moves focus to the main region.
- [ ] Every interactive element is reachable in a logical order.
- [ ] Focus states are clearly visible in both themes.
- [ ] Enter and Space activate appropriate controls.
- [ ] Escape closes menus and dialogs.
- [ ] Focus is not trapped outside an open dialog and returns after closing.
- [ ] Headings form a logical hierarchy with one page-level H1.
- [ ] Header, navigation, main, and footer landmarks are announced correctly.
- [ ] Icon-only buttons have useful accessible names.
- [ ] Decorative icons are hidden from screen readers.
- [ ] Link names describe their destination.
- [ ] Content remains understandable without color.
- [ ] Text and UI contrast meet WCAG AA in both themes.
- [ ] Test with a screen reader: NVDA on Windows, VoiceOver on macOS/iOS, or TalkBack on Android.
- [ ] At 200% zoom, navigation and page tasks remain possible.

## Motion and interaction

- [ ] Motion is limited to subtle feedback and never delays navigation.
- [ ] Hover movement is small and causes no layout shift.
- [ ] `prefers-reduced-motion: reduce` removes spatial movement.
- [ ] Theme and navigation interactions feel immediate.
- [ ] There are no animated backgrounds, scroll-jacking, parallax, or perpetual effects.

## Assets, icons, and images

- [ ] Favicon loads without a 404 and remains recognizable at small sizes.
- [ ] Open Graph image route renders correctly.
- [ ] Lucide icons have consistent visual weight and alignment.
- [ ] No icon appears as a missing-glyph box.
- [ ] No employer or institution logo is used without approved provenance.
- [ ] No fabricated project screenshot appears.
- [ ] When genuine images are later added, verify aspect ratio, alt text, intrinsic dimensions, lazy loading, and compression.

## SEO and technical metadata

- [ ] Every page title is unique and ends with Vishal Manam consistently.
- [ ] Every primary page has a meaningful meta description.
- [ ] Canonical URLs are correct for the current local/production base URL.
- [ ] Project pages expose project-specific Open Graph metadata.
- [ ] Person structured data contains only verified information.
- [ ] `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, favicon, and Open Graph image return HTTP 200.
- [ ] Sitemap includes every primary route and all four projects.
- [ ] No production-domain claim is made before a domain is selected.

## Performance and stability

- [ ] Initial page load feels immediate on a normal connection.
- [ ] Route navigation remains responsive.
- [ ] Scrolling remains smooth without dropped frames.
- [ ] There is no visible layout shift as fonts or client components initialize.
- [ ] Network panel shows no unexpected 4xx/5xx responses.
- [ ] Console shows no runtime, hydration, React, accessibility, or asset warnings.
- [ ] Production Lighthouse target remains: Performance >95; Accessibility, Best Practices, and SEO 100.
- [ ] Static routes and project pages build successfully.
- [ ] Dependency audit reports no moderate, high, or critical vulnerabilities.

## Content review

- [ ] Grammar, punctuation, capitalization, and terminology are consistent.
- [ ] Voice is direct, professional, specific, and free of unsupported superlatives.
- [ ] Role descriptions match approved sources.
- [ ] Dates and locations are consistent across pages and résumé when supplied.
- [ ] Technology names are accurate and consistently styled.
- [ ] TODOs are easy for the owner to locate and do not read as completed claims.
- [ ] Project descriptions, screenshots, links, email, and résumé information are complete and accurate.
- [ ] No fabricated metrics, achievements, screenshots, experience, or technologies appear.

## Overall design assessment

- [ ] Does the site feel premium, calm, and credible?
- [ ] Does it reflect the restraint and clarity associated with Brittany Chiang, Linear, and Vercel without copying them?
- [ ] Does the information hierarchy prioritize projects and relevant engineering work?
- [ ] Is anything visually distracting, ornamental, or unnecessary?
- [ ] Is any section too dense, too sparse, or inconsistently spaced?
- [ ] Is anything difficult to scan or read?
- [ ] Do both themes feel equally finished?
- [ ] Does mobile feel intentionally designed rather than compressed desktop?
- [ ] Would a recruiter understand the professional focus within one minute?
- [ ] Would an engineer understand how to navigate to technical evidence quickly?
- [ ] Are there any changes that should be made before adding more features?

## Review outcome

- [ ] All blocking functional defects are documented.
- [ ] All visual-polish feedback is grouped by route/component.
- [ ] Content corrections are separated from design changes.
- [ ] Each requested iteration is scoped to the smallest focused change.
- [ ] Final production approval has **not** been given unless the owner explicitly says “Approve for production.”
