# Design System Specification

## 1. Foundations

The design system uses semantic tokens. Raw palette values are allowed only in the token definition layer. Components consume roles such as `background`, `surface`, `foreground`, `muted`, `border`, `accent`, and `focus` so light and dark themes can be tuned independently.

The values below are initial design targets and must be visually and programmatically contrast-tested during implementation.

## 2. Color palettes

### Light theme

| Token               | Value     | Use                               |
| ------------------- | --------- | --------------------------------- |
| `background`        | `#F7F5F0` | Warm page canvas                  |
| `foreground`        | `#17211F` | Primary text                      |
| `surface`           | `#FCFBF8` | Cards and raised sections         |
| `surface-subtle`    | `#EFEEE8` | Quiet grouped regions             |
| `muted-foreground`  | `#5C6663` | Secondary copy                    |
| `border`            | `#D8D9D3` | Dividers and controls             |
| `accent`            | `#087F68` | Primary action and selected state |
| `accent-hover`      | `#066B58` | Accent interaction                |
| `accent-foreground` | `#FFFFFF` | Text on accent                    |
| `focus`             | `#0A8F76` | Focus ring                        |
| `selection`         | `#C7E9DF` | Text selection                    |
| `danger`            | `#B42318` | Error text/actions                |
| `danger-surface`    | `#FEE4E2` | Error background                  |

### Dark theme

| Token               | Value     | Use                               |
| ------------------- | --------- | --------------------------------- |
| `background`        | `#08111B` | Deep navy page canvas             |
| `foreground`        | `#E7ECEA` | Primary text                      |
| `surface`           | `#0D1925` | Cards and raised sections         |
| `surface-subtle`    | `#122230` | Quiet grouped regions             |
| `muted-foreground`  | `#A3AFAC` | Secondary copy                    |
| `border`            | `#263746` | Dividers and controls             |
| `accent`            | `#42C7A5` | Primary action and selected state |
| `accent-hover`      | `#68D5B9` | Accent interaction                |
| `accent-foreground` | `#061510` | Text on accent                    |
| `focus`             | `#5FE0BD` | Focus ring                        |
| `selection`         | `#164D43` | Text selection                    |
| `danger`            | `#FDA29B` | Error text/actions                |
| `danger-surface`    | `#451A1A` | Error background                  |

Accent text on the page may require the hover/lighter token in dark mode and the base/darker token in light mode. Filled-button foreground pairs must be tested independently.

## 3. CSS semantic contract

Planned variables:

```text
--color-background
--color-foreground
--color-surface
--color-surface-subtle
--color-muted-foreground
--color-border
--color-accent
--color-accent-hover
--color-accent-foreground
--color-focus
--color-selection
--color-danger
--color-danger-surface
```

Interactive components may derive additional roles (`input`, `ring`, `popover`, `overlay`) from tested theme-specific values. They must not assume that dark mode is a mathematical inversion.

## 4. Typography tokens

### Families

- `font-sans`: Geist Sans, then a carefully selected system fallback stack.
- `font-mono`: Geist Mono, then a system monospace fallback stack.

### Fluid scale

| Token       | Target definition              | Typical use          |
| ----------- | ------------------------------ | -------------------- |
| `text-xs`   | `0.75rem / 1rem`               | Compact metadata     |
| `text-sm`   | `0.875rem / 1.35rem`           | Labels, secondary UI |
| `text-base` | `1rem / 1.65rem`               | Default body         |
| `text-lg`   | `1.125rem / 1.8rem`            | Lead body            |
| `text-xl`   | `1.25rem / 1.75rem`            | Card title           |
| `text-2xl`  | `clamp(1.5rem, 2vw, 1.875rem)` | Section title        |
| `text-3xl`  | `clamp(1.875rem, 3vw, 2.5rem)` | Page title           |
| `text-4xl`  | `clamp(2.5rem, 6vw, 4.75rem)`  | Hero display         |

### Weight and tracking

- Regular `400`: body.
- Medium `500`: labels and navigation.
- Semibold `600`: headings and primary emphasis.
- Avoid `700+` as a default visual shortcut.
- Body tracking is normal; display headings may use `-0.02em`; compact uppercase metadata uses approximately `0.08em`.

## 5. Spacing

Base unit: `4px`.

```text
0: 0
1: 4px
2: 8px
3: 12px
4: 16px
5: 20px
6: 24px
8: 32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
32: 128px
```

Use adjacent steps first. One-off values require a layout reason, not visual nudging.

## 6. Size and layout tokens

```text
--container-reading: 65ch
--container-content: 70rem (1120px)
--container-wide: 80rem (1280px)
--header-height: 4rem
--control-height-sm: 2.25rem
--control-height-md: 2.75rem
--control-height-lg: 3rem
--touch-target-min: 2.75rem
```

Horizontal gutters use responsive tokens equivalent to `20px`, `32px`, and `48px`.

## 7. Radius, border, and shadow

### Radius

```text
sm: 6px
md: 10px
lg: 14px
pill: 999px
```

Cards default to `lg`; controls use `sm` or `md`; badges use `sm` or pill according to meaning. Excessively rounded containers are avoided.

### Border

- Standard: `1px solid var(--color-border)`.
- Strong/selected borders use a tested mixed accent role, not arbitrary opacity.
- Dividers should be quieter than input boundaries.

### Shadow

- Most surfaces use no shadow.
- Popovers/dialogs use one theme-tuned elevation token.
- Cards may gain a minimal shadow on hover only if border/surface feedback is insufficient.

## 8. Motion tokens

```text
duration-instant: 0ms
duration-fast: 120ms
duration-base: 180ms
duration-slow: 240ms
duration-page: 320ms
ease-standard: cubic-bezier(0.2, 0, 0, 1)
ease-out: cubic-bezier(0.22, 1, 0.36, 1)
```

Reduced-motion mode maps transform-based transitions to instant state changes or brief opacity changes and disables stagger.

## 9. Focus and interaction states

- Focus ring: `2px` visual ring plus sufficient offset from the control boundary.
- Hover never causes content reflow.
- Active state may use a subtle scale no smaller than `0.98`, disabled in reduced motion.
- Disabled state combines semantic attributes, cursor treatment, muted surface/text, and explanatory context when needed.
- Visited styles are optional for navigation but recommended for long-form external resource links when they aid orientation.

## 10. Core component tokens

### Button

- Heights: `36px`, `44px`, `48px`.
- Inline padding: `12px`, `16px`, `20px` respectively.
- Variants: primary, secondary, ghost, destructive, link.
- Icon-only button is at least `44×44px` and always has an accessible name.

### Card

- Padding: `20px` compact, `24–32px` larger screens.
- Gap between content groups: `12–20px`.
- Background uses `surface`; border uses `border`.

### Badge

- Height approximately `24–28px`.
- Inline padding `8–10px`.
- `text-xs` or `text-sm`; do not compress letter spacing excessively.

### Input

- Minimum height `44px`.
- Persistent visible label and optional description.
- Error boundary, text, and icon use danger roles; error message explains recovery.

### Dialog/command menu

- Compact viewport: near-full-width with `16–20px` margin.
- Desktop maximum width approximately `640px`.
- Overlay and elevation are theme-specific.
- Result rows meet touch target and focus visibility requirements.

## 11. Iconography

- Lucide icons use a consistent default `1.5px` or `2px` stroke selected during visual testing.
- Common sizes: `16`, `20`, and `24px`.
- Icons supplement text; they do not replace unfamiliar actions.
- Brand icons are separate approved assets rather than approximations from Lucide.

## 12. Content imagery

- Project covers default to `16:10`; detail heroes may use `16:9` or intrinsic documented media.
- Every informative image requires useful alt text; decorative generated patterning uses empty alt.
- Screenshots are never invented. A missing cover displays a code-generated title treatment explicitly styled as a project identity panel.
- Institution/employer marks require source and usage approval; text labels are the fallback.

## 13. Implementation guardrails

- Validate all final foreground/background and control-state pairs with automated contrast tooling and manual inspection.
- Components use semantic tokens only.
- Light and dark snapshots are reviewed separately.
- Tailwind arbitrary values require a documented exception.
- Design tokens live in one CSS source of truth, with Tailwind exposing aliases rather than duplicating values.
- shadcn/ui defaults are adapted to this system; they are not accepted unchanged.

## 14. Decisions requiring approval

- Final accent direction: teal (`#087F68` family) as proposed, or an emerald alternative.
- Final font after real-content rendering and performance review.
- Whether project identity panels should use only typography or allow restrained technical motifs.
- Whether the header remains always sticky or becomes sticky only after scrolling.
