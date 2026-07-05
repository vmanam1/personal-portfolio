# UI/UX Design Specification

## 1. Experience direction

The interface is calm, precise, and content-forward. It takes inspiration from the restraint and readability of established engineering products without copying their composition, typography, or branding. The portfolio should feel current for years because hierarchy, spacing, and language do the work—not visual effects.

Three attributes guide design review:

- **Credible:** evidence precedes decoration; copy is specific and restrained.
- **Efficient:** important information and actions are easy to scan and reach.
- **Crafted:** alignment, type, focus, motion, and responsive behavior are consistent.

## 2. Visual language

- A centered editorial column with wider breakout regions for project grids and media.
- Deep navy dark theme and warm off-white light theme designed as separate palettes.
- One teal/emerald accent reserved for actions, focus, selected states, and small highlights.
- Thin borders and subtle surface shifts establish grouping; shadows are rare.
- No ornamental gradients, glass panels, floating shapes, animated backgrounds, or 3D effects.
- Project imagery uses real supplied media. Until then, restrained generated-by-code typographic covers identify projects without pretending to be screenshots.

## 3. Layout system

### Breakpoints

Use content-driven breakpoints rather than device labels:

- Compact: `320–639px`
- Small: `640–767px`
- Medium: `768–1023px`
- Large: `1024–1279px`
- Wide: `1280px+`

### Containers

- Reading measure: approximately `65ch`.
- Standard content width: `1120px` maximum.
- Wide project/media width: `1280px` maximum.
- Inline gutters: `20px` compact, `32px` medium, `48px` large.
- Vertical section rhythm: `64px` compact, `96px` medium, `128px` large.

Ultra-wide screens retain centered bounded content; they do not stretch text or card grids indefinitely.

## 4. Typography

- Primary sans: Geist Sans or a technically neutral system-compatible alternative.
- Monospace accent: Geist Mono for metadata, commands, and technical labels—not body copy.
- Body text defaults to `16–18px` with `1.6–1.7` line height.
- Display headings use responsive type through `clamp()` and conservative tracking.
- Heading levels follow document structure, not visual size.
- Uppercase is limited to short metadata labels with increased letter spacing.

## 5. Global shell

### Skip link

- First focusable element.
- Hidden until focused, then placed visibly at the upper-left with strong contrast.

### Header

- Desktop: name/wordmark left, route navigation center/right, search and theme actions at end.
- Compact: name left; search, theme, and menu icon actions right.
- Sticky after initial viewport movement only if it does not reduce available space; use an opaque theme surface and border.
- Active route uses weight, text color, and a small indicator—not color alone.
- Header height remains consistent; targets are at least `44×44px`.

### Mobile navigation

- Opens as an anchored sheet or full-width panel below the header.
- Focus enters the panel, remains trapped while open, and returns to the trigger.
- Escape and backdrop interaction close it.
- Body scroll is locked without layout shift.

### Footer

- Compact identity statement, primary social links, and build/source note.
- No dense duplicate sitemap.
- Current year may be generated; claims are not.

## 6. Page specifications

### Home

#### Hero

- Desktop hero occupies roughly `70–80vh` but never forces useful content below an arbitrary full screen.
- Eyebrow: current availability/focus only if verified.
- H1: “Vishal Manam”.
- Lead: role positioning in one sentence.
- Supporting copy: no more than three lines at standard desktop width.
- Primary action: “View projects”. Secondary: “View résumé”. Tertiary icon/text links: GitHub, LinkedIn, email.
- A quiet “Current focus” row can name intelligent energy systems, computer vision, or another approved focus.

#### Featured projects

- Two-column grid at large widths, one column below medium.
- First one or two featured projects may span more visual area only when real media supports it.
- Each card exposes title, concise summary/TODO state, stack chips, project link, and optional source/demo links.

#### Experience preview

- Up to three relevant roles, not necessarily every recent nontechnical role.
- Role/company and date remain visible; one concise contribution and technology list follow.

### Experience

- Intro explains the scope in one sentence.
- Cards form a vertical chronological list with a stable date column on large screens.
- Core details are visible without expansion. “More details” reveals contributions, technologies, and links.
- Expansion uses a native button with `aria-expanded` and subtle height/opacity transition.

### Projects index

- Heading and short explanation precede filters.
- Filter row wraps and remains visible without horizontal scrolling.
- Selected filter has check/indicator plus color and exposes pressed state.
- Result count announces changes through a polite live region.
- Empty state offers “Clear filters”.

### Project detail

- Breadcrumb/back link, title, status, concise summary, stack, and source/demo actions lead.
- Hero media uses a fixed aspect-ratio container; omit it when no real image exists.
- Desktop body uses a primary article column and sticky table of contents when enough sections exist.
- Architecture can accept a real diagram later; textual explanation is always available.
- Previous/next project navigation appears after the article.

### Skills

- Category sections use a two-column label/content layout on large screens and stack on compact screens.
- Badges are neutral by default; no logo wall, ratings, or implied ordering by expertise.
- High-value skills may be introduced in prose elsewhere only when supported by experience/projects.

### Education

- Degree cards prioritize institution, degree, and date.
- Coursework appears as a compact list or expandable region.
- Activities and verified leadership use separate labels.

### Resume

- Page header contains update metadata and download/print actions.
- PDF viewer sits in a bordered document surface with a useful minimum height.
- On unsupported/mobile browsers, replace the embed with a clear open/download panel.

### Contact

- Two-column layout at large sizes: invitation and direct channels; form or mail action.
- Direct email remains primary and supports copy feedback.
- Form labels stay visible; placeholders are examples, not labels.
- Success does not erase submitted content until acknowledged; errors are actionable.

### 404

- Plain statement, short explanation, and links to home/projects.
- Search action is available.
- No joke that impairs clarity.

## 7. Component behavior

### Buttons and links

- Primary button: accent fill with high-contrast text.
- Secondary button: surface/border treatment.
- Text link: underline on hover/focus and external-link indicator where useful.
- Disabled controls are rare, explain why, and never use opacity alone to signal state.

### Cards

- Entire project-card heading/link area may be stretched, while nested actions remain valid and separate.
- Hover treatment: small border/surface change and at most `translateY(-2px)`.
- Touch and keyboard states receive equivalent feedback.

### Badges

- Small radius, neutral surface, compact type.
- Meaningful status badges include text and, if applicable, an icon.

### Command search

- Modal dialog with text input and grouped results for navigation and projects.
- Initial focus goes to input; arrows move through results; Enter activates; Escape closes.
- Query searches title, summary, tags, company, and route label.
- Shortcut hint is hidden from touch-first compact layouts.

### Theme control

- Menu options: System, Light, Dark.
- Current selection is announced and checked.
- Avoid a misleading binary toggle when system mode exists.

### Toast/status feedback

- Use inline or polite live-region feedback for copy-email and form status.
- Do not use transient toast notifications for critical errors.

## 8. Motion

- Default duration range: `120–240ms`; page-level entrance up to `320ms`.
- Preferred easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; standard ease for color transitions.
- Animate opacity and transform; avoid layout-heavy animation where possible.
- Initial page entrance may stagger only major sections by `30–50ms`, capped at a small number.
- No scroll-jacking, parallax, cursor followers, perpetual motion, or animated counters.
- Under reduced motion, remove movement and use instant or short opacity changes.

## 9. Responsive behavior

- Navigation collapses before labels overlap.
- Multi-column layouts become one column in reading order.
- Tables of contents become an inline disclosure.
- Project filters wrap; they never require precision horizontal swiping.
- Code and diagrams scroll within their region without widening the page.
- Resume embed uses a fallback on constrained screens.
- Touch targets remain at least `44px`; body copy never drops below `16px`.

## 10. Accessibility specification

- One H1 per page and logical heading hierarchy.
- Landmarks: header, nav, main, complementary only where meaningful, footer.
- Visible `:focus-visible` ring in both themes with at least 3:1 adjacent contrast.
- Text contrast meets 4.5:1; large text and UI boundaries meet applicable WCAG thresholds.
- Icons require accessible labels when no adjacent text exists; decorative icons are hidden.
- Color never carries status alone.
- Dynamic filter/search/copy states are announced appropriately.
- Modal focus management, escape behavior, and background inertness are required.
- Form errors connect through `aria-describedby`, focus summary/first invalid field, and persist until resolved.

## 11. Content voice

- Direct, specific, and first-person where appropriate.
- Prefer “Built a retrieval pipeline…” to generic phrases such as “passionate developer”.
- Use short headings and sentences; explain acronyms on first use when audience may not know them.
- Avoid superlatives, self-ratings, unsupported impact claims, and keyword stuffing.
- TODO states are honest but should be removed from prominent launch surfaces when they diminish trust.

## 12. Design review checklist

- Both themes are reviewed independently on every route.
- All breakpoints preserve hierarchy and reading order.
- Keyboard-only navigation completes every task.
- Reduced-motion mode removes spatial motion.
- Empty, loading, error, draft, and missing-media states are designed.
- Real content lengths do not overflow.
- No invented imagery or metrics appear.
