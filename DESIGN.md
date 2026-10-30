---
name: Hajolong Solutions
description: Agentic AI and custom software, set in a multiplane dawn over the Chittagong Hill Tracts.
colors:
  lamp: "#f2b24a"
  lamp-hover: "#f6c066"
  lamp-ink: "#1a1410"
  lamp-deep: "#8a5a0c"
  focus-ring: "#c98a1f"
  pine: "#1e3a2e"
  pine-ink: "#eef2ee"
  pine-muted: "#c4c9bd"
  mist-ground: "#e9eeeb"
  pine-ink-text: "#13241d"
  paper-cel: "#f6f2e9"
  popover: "#f7f8f5"
  muted-mist: "#dde4df"
  muted-text: "#46594f"
  accent-wash: "#dbe4dd"
  border-pine: "rgb(30 58 46 / 0.16)"
  input-pine: "rgb(30 58 46 / 0.24)"
  destructive: "#b3261e"
  sky-top: "#b9c8d0"
  sky-low: "#e4e3d8"
  sun: "#f2c27a"
  plane-1: "#a6b6bd"
  plane-2: "#8a9e9c"
  plane-3: "#66806f"
  plane-4: "#3f5a45"
  plane-5-umber: "#2a211a"
  river: "#9fb7c3"
  river-light: "#dfe8ec"
  river-ink: "#5f8aa0"
  dusk-ground: "#17130f"
  dusk-text: "#e8e6df"
  dusk-cel: "#221c16"
  dusk-muted: "#1f1a14"
  dusk-muted-text: "#aeb2a6"
  dusk-haze: "#c7d3da"
  dusk-pine: "#1c3329"
  dusk-pine-muted: "#a9bbb1"
  dusk-border: "rgb(199 211 218 / 0.13)"
  dusk-destructive: "#e5675e"
  dusk-sky-top: "#0b1412"
  dusk-sky-low: "#23302b"
  dusk-sun: "#b8742a"
  dusk-plane-1: "#3b4a44"
  dusk-plane-2: "#2d3b35"
  dusk-plane-3: "#222e29"
  dusk-plane-4: "#19231f"
  dusk-plane-5-umber: "#1a1410"
typography:
  display:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.9rem, 6.4vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  display-page:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.9rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  headline-feature:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title-sm:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"kern\", \"liga\""
  button:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  check: "4px"
  sm: "8px"
  md: "10px"
  lg: "14px"
  2xl: "16px"
  xl: "18px"
  3xl: "24px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-sm: "32px"
  container: "80rem"
  nav-height: "64px"
  section-top: "96px"
  section-top-sm: "128px"
  seam-clearance: "calc(5rem + 8.75vw)"
  cel-pad: "24px"
  cel-pad-lg: "36px"
  stack: "24px"
components:
  button-lamp:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.lamp-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "40px"
  button-lamp-hover:
    backgroundColor: "{colors.lamp-hover}"
    textColor: "{colors.lamp-ink}"
  button-lamp-lg:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.lamp-ink}"
    rounded: "{rounded.xl}"
    padding: "0 24px"
    height: "48px"
  button-default:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.pine-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    height: "40px"
  button-outline:
    backgroundColor: "{colors.paper-cel}"
    textColor: "{colors.pine-ink-text}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    height: "40px"
  button-outline-hover:
    backgroundColor: "{colors.accent-wash}"
  button-ghost-hover:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.pine-ink-text}"
  card-cel:
    backgroundColor: "{colors.paper-cel}"
    textColor: "{colors.pine-ink-text}"
    rounded: "{rounded.xl}"
    padding: "{spacing.cel-pad}"
  card-cel-pine:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.pine-ink}"
    rounded: "{rounded.xl}"
    padding: "28px"
  input:
    backgroundColor: "{colors.paper-cel}"
    textColor: "{colors.pine-ink-text}"
    rounded: "{rounded.lg}"
    padding: "4px 14px"
    height: "44px"
  chip:
    backgroundColor: "{colors.paper-cel}"
    textColor: "{colors.pine-ink-text}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  chip-selected:
    backgroundColor: "{colors.pine-ink-text}"
    textColor: "{colors.mist-ground}"
    rounded: "{rounded.full}"
  checkbox-checked:
    backgroundColor: "{colors.pine-ink-text}"
    textColor: "{colors.mist-ground}"
    rounded: "{rounded.check}"
    size: "20px"
  nav-link:
    textColor: "{colors.pine-ink-text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
---

# Design System: Hajolong Solutions

## Overview

**Creative North Star: "The Multiplane Dawn"**

The site is a cel-animation multiplane camera pointed at the Chittagong Hill Tracts. Authored SVG ridge planes stack from far to near: haze blue at the back, through fern and moss, down to an umber forest floor. Content sits on the nearest plane. The far planes drift a little as you scroll, mist pools between them, and the only warm light in the scene is the lamp-amber of the next step. Light theme is dawn: haze sky, pine ink, paper-warm cards. Dark theme is dusk: pine and umber ground, haze text, the same amber lamps.

Density is calm and editorial. Large Alegreya headlines run across seven of twelve columns, set beside one sentence of Alegreya Sans and one action. The page steps down through nearer hills instead of cutting between flat bands, because each section opens with a ridge seam rising out of the one above. Surfaces are painted cels: matte tinted fill, a 1px inner edge highlight, a soft plane shadow. Fine grain lies over everything.

Motion belongs to the world. The ridges move by transform only, mist drifts on a 48s loop, content rises once as it arrives, and Genghuli the mascot waves once and breathes. Under `prefers-reduced-motion` the whole scene freezes into its static composition. The world rejects the dark-neon AI-startup hero and the centred-headline-over-a-card-row agency template.

**Key Characteristics:**
- Five authored SVG ridge planes, a sun-warmed sky gradient, mist bands, a river in the footer.
- One warm accent (lamp amber), reserved for the primary action and live status.
- Alegreya extrabold display over Alegreya Sans body, with wide-tracked caps for metadata only.
- Painted-cel cards with an inner edge highlight and a soft, low, wide shadow; 2px hover lift.
- Dawn and dusk themes on `html[data-theme]`; the nearest plane is umber in both.
- A fixed grain overlay at 7% (dawn) and 9% (dusk) opacity.

## Colors

A cool, desaturated mountain palette of haze, fern, moss, pine and umber, with one warm lamp.

### Primary
- **Lamp Amber** (lamp): The fill of the primary action (`Button variant="lamp"`: "Start a project", "Send to the team", "Send this scope to the team") and the small dots that mean something is live (Genghuli's speech card, the assistant's "Online" status). It is the same value in both themes. Its hover brightens to **Lamp Glow** (lamp-hover), and the text on it is always **Umber Ink** (lamp-ink).
- **Lamp Deep** (lamp-deep): Text caret in fields on dawn. On dusk it collapses to Lamp Amber.
- **Focus Ember** (focus-ring): The 2px focus outline and 3px focus ring on dawn. On dusk the ring is Lamp Amber.

### Secondary
- **Deep Pine** (pine / dusk-pine): The second surface material. It fills the scope summary cel, icon wells (service list, solution sections, process handoff), and the default button. Text on it is **Pine Ink** (pine-ink) and **Pine Lichen** (pine-muted / dusk-pine-muted) for secondary lines.

### Tertiary (scenery)
- **Sky** (sky-top to sky-low, with **Low Sun** (sun) as a radial glow at 74% / 62%): The `.sky` gradient behind every hero scene. On dusk it darkens to dusk-sky-top, dusk-sky-low and an ember sun (dusk-sun).
- **Ridge Planes** (plane-1 to plane-4): Far to near, haze-blue to moss. On dusk: dusk-plane-1 to dusk-plane-4.
- **Umber Forest Floor** (plane-5-umber / dusk-plane-5-umber): The nearest ridge and the ground that forest sections stand on: the agent demo, consulting pillars and footer.
- **Hajolong River** (river, river-light, river-ink): The footer river scene and the river through the emblem.

### Neutral
- **Morning Mist** (mist-ground / dusk-ground): Page background.
- **Pine Ink Text** (pine-ink-text / dusk-text): Body text, headings, and every *selected* state.
- **Paper Cel** (paper-cel / dusk-cel): Card, input and chip fills. Warmer than the ground, so cels read as painted paper laid on the mist.
- **Muted Mist** (muted-mist / dusk-muted): Alternating section band (process section).
- **Fern Text** (muted-text / dusk-muted-text): Supporting copy and placeholders.
- **Accent Wash** (accent-wash): Hover fill for ghost and outline buttons and ruled-list rows.
- **Pine Hairline** (border-pine / dusk-border) and **Input Hairline** (input-pine): All borders and dividers, at 16% and 24% pine.
- **Brick** (destructive / dusk-destructive): Field error text and invalid borders.

### Named Rules
**The Lamp Rule.** Amber fills exactly two things: the primary action button and live-status dots. Nothing else gets an amber fill: no icons, headings, borders, selected states, illustrations or badges. The scenery sun is its own token (sun), not the lamp. The only other amber-family uses are interaction feedback: the focus ring and the text selection highlight.

**The Ink Selection Rule.** Selected and checked states use ink, not amber. A checked checkbox fills with Pine Ink Text, a pressed chip inverts to ink on mist, the active nav link gets an ink underline, and the current mobile-menu item gets an ink dot. On umber ground, the pressed question chip uses a pine-ink border over a 10% pine-ink wash.

**The Umber Ground Rule.** The nearest plane is umber in both themes. Any section that stands "on the forest" uses `--plane-5` as its background, with Pine Ink and Pine Lichen text and white hairlines at 10%.

## Typography

**Display Font:** Alegreya (with Georgia, serif), weights 500 to 800, italic available
**Body Font:** Alegreya Sans (with system-ui, sans-serif), weights 400 to 800
**Label Font:** Alegreya Sans in wide-tracked caps

**Character:** A calligraphic, title-card serif with real stroke contrast, paired with its own humanist sans. Together they read like a hand-lettered film title over a gouache plate: warm and literate, never techy.

### Hierarchy
- **Display** (800, clamp(2.9rem, 6.4vw, 5.75rem), 0.98): The home hero headline only, across seven columns.
- **Display Page** (800, clamp(2.6rem, 5.6vw, 4.9rem), 1): Inner-page hero headlines, max 56rem wide.
- **Headline Feature** (800, clamp(2.2rem, 4.4vw, 3.6rem), 1.04): Headlines on the umber forest sections and the closing call (closing call runs up to 4.2rem).
- **Headline** (800, clamp(2rem, 3.6vw, 3rem), 1.06): The standard section h2.
- **Title** (700, 1.5rem) and **Title Small** (700, 1.25rem): h3s, card titles, list item titles, the definition terms in principle grids. Service list rows use 1.35rem.
- **Lead** (400, 1.2rem to 1.3rem, relaxed): One sentence under each hero headline, max 38 to 40rem, at 80% foreground.
- **Body** (400, 1.0625rem, 1.6): Running copy. Section intros run at 1.125rem in Fern Text, max 40rem. Paragraphs use `text-wrap: pretty`; headings use `balance`.
- **Label** (700, 0.75rem, 0.14em, uppercase): Metadata only. Seen on footer column titles, the "Solutions" line under the wordmark, the Genghuli name on its speech card, and the "Example conversation" tag (0.65rem there).

### Named Rules
**The Label Is Metadata Rule.** Wide-tracked caps tag *things* (a column, a speaker, a status). They never sit above a headline as an eyebrow or kicker. A section opens with its headline, or with an icon well and then its headline.

**The Extrabold Title-Card Rule.** Every h1 and h2 is Alegreya 800 with negative tracking (-0.015em to -0.025em) and tight leading (0.98 to 1.06). h3s drop to 700. Display type is never set in the sans.

## Layout

One centred container (80rem max) with 20px gutters, 32px from 640px up, on a 12-column grid at 1024px and above. Hero copy takes columns 1 to 7, with Genghuli standing on the near ridge to the right. Section intros take 4 sticky columns beside 8 of content (services), or a 6 + 5 split with the paragraph offset to column 8 (process). Content sections open at 96px top padding (128px from 640px).

The ridge seam sets the vertical rhythm. A `RidgeSeam` overhangs the top of the next section at an exact 1600:140 aspect, so it is 8.75vw tall. Any section that a seam rises into ends with `calc(5rem + 8.75vw)` bottom padding, so the seam never covers content. Hero scenes pull up under the transparent 64px sticky nav (`-mt-16`) and reserve generous bottom padding for the ridge planes.

**The Seam Clearance Rule.** If the next section opens with a ridge seam, this section's bottom padding is `calc(5rem + 8.75vw)`. Never less.

Responsive: below 1024px the grid collapses to one column. AgentDemo's side callouts move into a 2-column grid under the chat. ProcessLine switches from a horizontal line at 768px to a vertical rail on phones. The nav collapses to a right-side sheet below 768px, set in 1.5rem display type.

## Elevation & Depth

Depth comes from the scene, not from stacked shadows. Planes recede through value and parallax: each far ridge translates by `--scroll × depth`, with depths of 150, 110, 70 and 34px, so the farthest moves most against the page. Mist gradients sit between the planes. Cels add one quiet layer on top: a 1px white inner edge highlight (70% on dawn, 8% haze on dusk) plus a two-part shadow that stays tight to the surface and spreads low and wide beneath it, as if lit from above.

### Shadow Vocabulary
- **Cel rest** (`inset 0 1px 0 var(--cel-edge), var(--cel-shadow)`): Every `.cel` and `.cel-pine` surface.
- **Cel lift** (`inset 0 1px 0 var(--cel-edge), var(--cel-shadow-lift)` with `translateY(-2px)`): Hover on interactive cels, 0.4s expo-out.
- **Lamp glow** (inset white top edge plus an amber-tinted drop `0 8px 18px -8px rgb(201 138 31 / 0.7)`): Only on the lamp button; it deepens on hover.
- **Forest panel** (`inset 0 1px 0 rgb(255 255 255 / 0.07), 0 30px 60px -30px rgb(0 0 0 / 0.7)`): The agent chat window on umber ground.
- **Field inset** (`inset 0 1px 2px rgb(19 36 29 / 0.06)`): Inputs, textareas, selects, pressed into the cel.

### Named Rules
**The Painted Cel Rule.** A surface is a cel: tinted matte fill, a 1px hairline border, a 1px inner top highlight, and a soft plane shadow. On hover it lifts by exactly 2px. No glass, no glow, no hard offset shadows.

**The Transform-Only Parallax Rule.** Scenery moves only through `transform` driven by one rAF-throttled `--scroll` value per `[data-scene]`. Under reduced motion every plane resets to `transform: none`.

## Shapes

Gently rounded, never pill-shaped except chips and dots. The base radius is 14px. Buttons and inputs use 14px, large buttons and cels use 18px, and the brief form and agent chat window use 16px. Chat bubbles are 16px with one 2px "tail" corner on the speaker's side, which Genghuli's speech card repeats. Icon wells are 10 to 12px squircles (40 to 48px) in pine, or 10% white on umber. Chips and status dots are fully round; process step markers are 37px circles with a 2px ink ring. Ridge, river and emblem silhouettes are hand-authored SVG paths, never raster images.

## Components

### Buttons
Tactile and quiet. Only the lamp is warm.
- **Shape:** Gently rounded (14px; 18px at the 48px large size), 0.95rem semibold sans, 8px gap with a trailing arrow icon.
- **Lamp (primary):** Lamp Amber fill, Umber Ink text, an inset white top edge and an amber-tinted drop shadow. Use one per view region: nav, hero brief, scope summary, contact submit, closing call.
- **Hover / Focus:** Lamp brightens to Lamp Glow, its shadow deepens, and the trailing arrow nudges 2px right (0.3s expo-out). Every button presses 1px down when active. Focus shows a 3px ring at 50% ring colour.
- **Outline (secondary):** Input Hairline border over Paper Cel at 60%, with the cel inner edge. On hover the fill becomes Accent Wash and the border goes to 30% ink. It is the partner to the lamp ("Meet the team", "See every solution", "Ask about this").
- **Ghost:** Icon-only nav controls (LinkedIn, theme toggle, menu), 40px square, Accent Wash on hover, with tooltips.
- **Default:** A Deep Pine fill. It exists in the API but rarely ships.

### Chips
- **Style:** Fully round, 1px Input Hairline border, Paper Cel fill, 0.95rem, 8px × 14px padding.
- **State:** `aria-pressed`. A pressed chip inverts to an ink fill with mist text and a trailing ×. On umber ground (agent demo questions), a pressed chip gets a 70% pine-ink border over a 10% pine-ink wash; unpressed chips use a 15% white border and Pine Lichen text. Anchor chips (solutions on-page nav) use a 20% ink border over 70% Paper Cel.

### Cards / Containers
- **Corner Style:** 18px.
- **Background:** Paper Cel (`.cel`) or Deep Pine (`.cel-pine`).
- **Shadow Strategy:** Cel rest, plus Cel lift on hover where the card is interactive (see Elevation & Depth).
- **Border:** 1px Pine Hairline; on `.cel-pine`, 6% white.
- **Internal Padding:** 24px default, 16 to 20px for list cels, 28 to 36px for form and summary cels.
- **Selected cel (scope picker):** The border goes to 45% ink and the icon well turns from muted to Deep Pine. The checkbox carries the state.

### Inputs / Fields
- **Style:** 44px tall, 14px radius, 1px Input Hairline border, Paper Cel fill, field inset shadow, 1rem text, Fern Text placeholder. Textareas auto-size from 8rem.
- **Focus:** The border shifts to the ring colour, with a 3px ring at 50%. The brief form puts the ring on the whole cel (`focus-within`) and keeps the inner field borderless.
- **Error:** `aria-invalid` turns the border Brick with a 20% Brick ring. Messages sit below the field in 0.875rem medium Brick, linked by `aria-describedby`, and are written as plain-English guidance.
- **Checkbox:** 16px (20px in the scope picker), 4px radius, Paper Cel. When checked it fills with ink and shows a mist check, never amber.

### Navigation
- **Style:** A sticky 64px row, transparent over the hero sky. After 12px of scroll it gains 92% background, a backdrop blur and a hairline.
- **Links:** 0.95rem medium at 75% ink. Hover goes to full ink and draws a 2px ink underline from the left (0.5s expo-out). The current page holds the underline and sets `aria-current`.
- **Actions:** Ghost icon buttons, then the single lamp "Start a project". Mobile: a right-side sheet (86vw, max 24rem) with 1.5rem display links, an ink dot on the current page, and a lamp button plus an outline button at the foot.

### Scenery (signature)
- **FarRidges:** Four parallax planes with a mist band in each valley, drifting ±3% over 48s on staggered delays.
- **NearRidge:** The static umber ridge that heroes end on and Genghuli stands on.
- **RidgeSeam:** The section transition. A softened mid-plane ridge, a mist wash, then the next section's ground colour rising as a ridge. It flips horizontally on alternate sections.
- **Footer river:** Banks in plane-3, plane-4 and umber, with the Hajolong river in a light-to-river gradient, a pale bank line and a mist band.

### Ruled Service List
Services appear as one ruled list, not a card grid. Each row has a pine icon well, a 1.35rem display title, a short line and a trailing arrow, split by hairlines. On hover the row gets Accent Wash at 70%, the icon well tilts -6°, and the arrow slides 4px.

### Process Line
Numbered steps sit on one 2px rail that fades from hairline to ink, ending at a pine "handoff" marker with a key icon. The rail is horizontal from 768px and vertical on phones.

### Genghuli and the Agent Demo
Genghuli is layered raster art, warmed by a CSS filter. He waves once 0.6s after arrival and again on hover or click (1.4 to 1.6s expo-out). Otherwise he breathes 5px over 6s, and his head leans up to 5° toward the pointer. His speech card is a cel with a label-caps name and a lamp status dot. The agent demo is a forest panel with a mist user bubble, a 7% white agent bubble that types at 3 characters every 16ms with a blinking caret, a trace pill that fades in once the answer finishes, and `aria-pressed` question chips.

### Motion
One easing for everything: expo-out `cubic-bezier(0.16, 1, 0.3, 1)`. `.reveal` elements rise 14px and fade over 0.9s, once, staggered with `--delay` steps of 60 to 80ms. Content is visible by default and only hidden once `js-motion` is set. Under `prefers-reduced-motion: reduce`, parallax, mist, the wave and the breath stop, reveals show at once, typing completes instantly, and transitions drop to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** reserve Lamp Amber for the primary action button and live-status dots, one lamp per view region.
- **Do** use ink (Pine Ink Text) for every selected, checked or current state.
- **Do** build surfaces as cels: Paper Cel or Deep Pine, 1px hairline, inner top highlight, soft plane shadow, 18px radius, 2px hover lift.
- **Do** open content sections with a `RidgeSeam` and end the section above it with `calc(5rem + 8.75vw)` bottom padding.
- **Do** set every h1 and h2 in Alegreya 800 with negative tracking, and keep body copy in Alegreya Sans at 1.0625rem / 1.6.
- **Do** put "forest" sections on `--plane-5` umber with Pine Ink and Pine Lichen text.
- **Do** author scenery as SVG paths filled from the plane, sky, mist and river tokens so both themes repaint it.
- **Do** move scenery only with `transform`, and freeze all of it under `prefers-reduced-motion`.

### Don't:
- **Don't** fill icons, headings, borders, chips, checkboxes or illustrations with amber; the lamp is the next step, not decoration.
- **Don't** put label caps above a heading as an eyebrow or kicker; they label metadata only.
- **Don't** use the dark-neon AI-startup hero or a centred headline over a row of cards.
- **Don't** add hard offset shadows, glassmorphism or glow effects to cels.
- **Don't** cut between sections with flat colour bands where a ridge seam belongs.
- **Don't** add a second entrance animation; content rises once, with the single 14px reveal.
- **Don't** set display headlines in the sans or in a system face.
