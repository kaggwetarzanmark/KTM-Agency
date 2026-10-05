# KTM Agency — Design System Reference
> Complete reference for every token, class, component and pattern extracted from the design mockup.
> Use this when building Astro components. CSS lives in `src/styles/global.css`. Tokens in `tailwind.config.mjs`.

---

## FONTS

Two fonts. Load both from Google Fonts (already in BaseLayout head).

| Role | Family | Weights |
|------|--------|---------|
| Display / Body | Instrument Sans | 400, 500, 600 |
| Mono | Geist Mono | 400, 500 |

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

CSS vars:
```css
--font-display: 'Instrument Sans', system-ui, sans-serif;
--font-body:    'Instrument Sans', system-ui, sans-serif;
--font-mono:    'Geist Mono', ui-monospace, Menlo, monospace;
```

Usage rules:
- `.mono` class: all labels, eyebrows, keyword tags, footer column headings, trust lines, nav phone number
- `.font-display` / `--font-display`: all headings H1–H3, the `.h2`, `.statement`, `.svc-name`, `.quote p`, `.pv-art h3`, logo
- `--font-body`: everything else (body copy, buttons, chips, nav links)

---

## COLOR TOKENS

### Light mode (default)

| Token | CSS Var | Hex | Use |
|-------|---------|-----|-----|
| Background | `--bg` | `#FFFFFF` | Page background |
| Surface | `--surface` | `#F3F1EF` | Pain points section bg |
| Foreground | `--fg` | `#0B0A0A` | Default text, `.btn-ink` bg |
| Muted | `--muted` | `#A09B97` | `.statement span` dimmed text |
| Muted text | `--muted-text` | `#67625F` | Lead paragraphs, stat descriptions, `.proj p` |
| Line | `--line` | `rgba(11,10,10,.18)` | Borders, dividers, dashed lines |
| Accent | `--accent` | `#D93225` | CTAs, `.sq` dot, active states, audit bg, `.svc` dashed border |
| On accent | `--on-accent` | `#FFFFFF` | Text on red buttons |

### Dark sections (services block, footer, nav dropdown)

| Token | CSS Var | Hex | Use |
|-------|---------|-----|-----|
| Dark bg | `--dark` | `#0B0A0A` | Services section, footer bg |
| Deeper dark | (footer) | `#050404` | Footer in dark mode |
| Dark surface | `--surface` (dark) | `#171515` | Preview panel bg |
| Dark elevated | | `#151312` | Nav dropdown, hero bg |
| Dark card | | `#15110F` | Ads/leads card in showcase |
| On dark | `--on-dark` | `#F4F1EE` | Primary text on dark |
| Dark text | `--dark-text` | `#A39D98` | Muted text on dark, svc descriptions |
| Dark line | `--dark-line` | `rgba(255,255,255,.16)` | Borders on dark surfaces |

### Dark mode (prefers-color-scheme / `data-theme="dark"`)

| Token | Value |
|-------|-------|
| `--bg` | `#0E0D0D` |
| `--fg` | `#F4F1EE` |
| `--muted` | `#6F6A66` |
| `--muted-text` | `#A39D98` |
| `--line` | `rgba(255,255,255,.18)` |
| `--surface` | `#171515` |
| `--dark` | `#050404` |

### Special colors (not tokenised, used once)

| Use | Value |
|-----|-------|
| Hero dark bg | `#0A0909` |
| WhatsApp button | `#25D366` |
| Hero eyebrow text | `#ECE8E4` |
| Hero tag text | `#D9D4CF` |
| Hero trust text | `#C9C3BE` |
| Form error text | `#FFB4AB` |
| Form label text | `#B4AEA9` |
| Dashboard highlight | `#FFB36B` |

---

## LAYOUT

### Site variables

| Token | Value | Use |
|-------|-------|-----|
| `--maxw` | `1320px` | Max site width |
| `--gutter` | `clamp(16px, 3vw, 40px)` | Horizontal page padding |
| `--radius` | `28px` | Large section border radius (hero, dark block, pain, audit) |
| `--nav-h` | `68px` | Nav bar height |

### Containers

```html
<!-- Standard page container -->
<div class="wrap"> ... </div>

<!-- Section vertical padding -->
<section class="section wrap"> ... </section>

<!-- Inside dark block -->
<div class="dark">
  <div class="dark-wrap"> ... </div>
</div>
```

### Border radius scale

| Class / Value | Pixels | Use |
|---------------|--------|-----|
| `--radius` / `.rounded-section` | 28px | Hero, dark section, pain section, audit banner |
| `22px` | 22px | Cards, portfolio art, showcase shots, preview panel, nav inner |
| `20px` | 20px | Blog post art, mobile nav dropdown |
| `16px` | 16px | Nav dropdown menu box |
| `14px` | 14px | Why-item icon box |
| `12px` | 12px | Form inputs, win-hero inside mockups |
| `999px` | pill | All buttons, chips, pills, tags, badges |
| `50%` | circle | WhatsApp button, social icons, hamburger |

---

## TYPOGRAPHY CLASSES

### `.h2` — Section headings
```css
font-family: var(--font-display);
font-weight: 500;
font-size: clamp(2rem, 4.6vw, 3.7rem);
line-height: 1.02;
letter-spacing: -.04em;
text-wrap: balance;
```
Used: all `<h2>` section headings. Always preceded by `.eyebrow`.

### `.statement` — Large editorial text
```css
font-size: clamp(1.9rem, 4.3vw, 3.5rem);
line-height: 1.1;
letter-spacing: -.04em;
```
Used: "Who We Are" section. Dimmed spans use `color: var(--muted)`.

### Hero `<h1>`
```css
font-size: clamp(2.6rem, 6.6vw, 5.9rem);
line-height: .98;
letter-spacing: -.05em;
max-width: 12.5em;
```
Tightest tracking on the page. Used once.

### `.eyebrow` — Section label above headings
```html
<span class="eyebrow"><i class="sq"></i> Section name</span>
```
Always: red `.sq` dot + uppercase label, 13px, weight 500.

### `.mono` — Mono labels
12px, Geist Mono, letter-spacing .04em, uppercase. Used for:
- Keyword tags in services list (`.svc-kw`)
- Footer column headings
- Preview panel labels
- Trust line under hero CTA
- "By the numbers" label
- Form field labels
- Blog read time

### `.lead` — Lead paragraph
`color: var(--muted-text)`, `max-width: 46ch`. Used under `.h2` in intro sections.

### `.link-u` — Dotted underline CTA link
```html
<a class="link-u" href="/portfolio/">View All Projects <svg class="ic"><use href="#i-right"/></svg></a>
```
Mono font, 13px, dotted accent bottom border, used for "View All" type links.

---

## BUTTONS

Three variants, one size modifier. All share base `.btn` class.

```html
<!-- Red (primary CTA) -->
<a class="btn btn-red" href="/contact/">Get a Free Quote <svg class="ic"><use href="#i-arrow"/></svg></a>

<!-- Light (secondary, on dark backgrounds) -->
<a class="btn btn-light" href="/portfolio/">See Our Work <svg class="ic"><use href="#i-arrow"/></svg></a>

<!-- Ink (dark, on light backgrounds) -->
<a class="btn btn-ink" href="/contact/">Talk to our team <svg class="ic"><use href="#i-arrow"/></svg></a>

<!-- Large size modifier — add .btn-lg -->
<a class="btn btn-red btn-lg" href="/contact/">Get a Free Quote <svg class="ic"><use href="#i-arrow"/></svg></a>
```

| Class | Height | Padding | Font size |
|-------|--------|---------|-----------|
| `.btn` | 40px | 0 18px | 13.5px |
| `.btn-lg` | 48px | 0 24px | 14.5px |

Icon inside button: `<svg class="ic">` — auto 12×12px, stroke-width 1.8.
Hover: `transform: translateY(-1px)`.

---

## ICONS

SVG sprite defined once in layout. Reference with `<use>`:

```html
<svg class="ic"><use href="#i-arrow"/></svg>
```

| ID | Shape | Use |
|----|-------|-----|
| `#i-arrow` | Diagonal arrow | Buttons, link arrows |
| `#i-right` | Horizontal arrow right | `.link-u` links |
| `#i-down` | Chevron down | Services dropdown |
| `#i-menu` | Hamburger lines | Mobile menu button |
| `#i-check` | Checkmark | Preview panel list, FAQ |
| `#i-phone` | Mobile phone | Why KTM item |
| `#i-search` | Magnifying glass | Why KTM item |
| `#i-receipt` | Receipt | Why KTM item |
| `#i-layers` | Stacked layers | Why KTM item |
| `#i-chat` | Chat bubble | Why KTM item |
| `#i-spark` | Starburst cross | Marquee strip label |

Default `.ic` size: 16×16px, `stroke-width: 1.5`, no fill, stroke = currentColor.

---

## COMPONENTS

---

### NAV

Sticky, floats above hero (negative margin trick). Becomes frosted glass on scroll.

```
[Logo]  [Home] [Services▾] [Portfolio] [Blog] [About]  |  [phone]  [btn-light: Get a Free Quote]
```

States:
- Default: transparent background, white text (floats over hero image)
- `.scrolled`: `rgba(11,10,10,.84)` + `backdrop-filter: blur(14px)` + subtle white border
- `.open`: mobile menu visible

Services dropdown: `.has-menu` > `.menu` > `.menu-box`. Shows on `:hover` and `:focus-within`.

Mobile (960px): hamburger replaces links. Nav opens as floating card below nav bar.

Key classes: `.nav`, `.nav-in`, `.logo`, `.links`, `.has-menu`, `.menu`, `.menu-box`, `.nav-right`, `.phone-no`, `.burger`, `.only-mobile`

---

### HERO

Full-bleed dark card with animated gradient blobs, noise overlay, gradient vignette.

Structure:
```
.hero-wrap > .wrap
  .hero (dark card, border-radius 28px)
    .hero-bg (blobs + overlay, aria-hidden)
    div (eyebrow + h1)
    .hero-foot
      .hero-tags (+ Design / + Develop / + Rank)
      .hero-side (description + .btns + .trust)
```

Blob classes: `.blob .b1` `.b2` `.b3` `.b4` — animated with `drift1` / `drift2` keyframes.
Overlay: CSS `::after` with gradient + SVG noise data URI.

---

### SECTOR MARQUEE STRIP

Infinite scrolling industry labels. Two `<ul>` lists (second has `aria-hidden="true"`) for seamless loop.

```html
<div class="strip">
  <div class="strip-in">
    <div class="strip-label"><svg>...</svg><span>Built for businesses across Uganda</span></div>
    <div class="marquee">
      <div class="track">
        <ul><li>Restaurants</li><li>Clinics</li>...</ul>
        <ul aria-hidden="true"><li>Restaurants</li><li>Clinics</li>...</ul>
      </div>
    </div>
  </div>
</div>
```

Animation: `marquee 38s linear infinite`, translates `-50%` (half of doubled list).
Fade edges: mask-image gradient on `.marquee`.

---

### SHOWCASE GRID

4-col grid of 3:4 aspect-ratio cards, each with a device mockup and figcaption badge.

```html
<div class="showcase">
  <figure class="shot shot-1">
    <!-- device mockup (aria-hidden) -->
    <figcaption>Mobile apps</figcaption>
  </figure>
  ...
</div>
```

Gradient backgrounds: `.shot-1` (pink/red), `.shot-2` (blue/grey), `.shot-3` (yellow/orange), `.shot-4` (orange/red).
Figcaption: frosted pill, bottom-left corner.
Mobile: horizontal scroll snap at 700px.

---

### STATS

4-column auto-fit grid. Each stat: large number + heading + description.

```html
<div class="stats">
  <div class="stat">
    <b>60+</b>
    <h3>Websites and apps launched</h3>
    <p>Description text here.</p>
  </div>
</div>
```

Dashed bottom border on each stat. Number uses display font, `clamp(2.8rem, 5.4vw, 4.4rem)`, tabular-nums.

---

### SERVICES (dark section)

Two-column: scrollable list on left, sticky preview panel on right.

```html
<div class="dark">
  <div class="dark-wrap">
    <div class="svc-head"> ... </div>
    <div class="svc-grid">
      <div class="svc-list">
        <a class="svc is-active" data-title="..." data-g1="#..." data-g2="#..." data-items="item1|item2|item3"> ... </a>
      </div>
      <aside class="preview">
        <div class="pv-art"> ... </div>
        <div class="pv-body"> ... </div>
      </aside>
    </div>
  </div>
</div>
```

Each `.svc` row: service name (large display) + short description + keyword tag + arrow icon.
Active state: `color: var(--on-dark)`, arrow turns accent red.
Border: dashed `rgba(217,50,37,.55)` bottom line.

Preview panel: sticky, gradient header (CSS vars `--g1`/`--g2` swapped by JS on hover), includes list and CTA button.
Preview hidden on mobile (960px).

`.chip-img`: decorative inline conic-gradient swatch inside heading.

---

### WHY KTM

Two-column sticky layout: intro (sticky) on left, scrollable list on right.

```html
<div class="why">
  <div class="why-intro"> eyebrow + h2 + lead + btn </div>
  <div class="why-list">
    <div class="why-item">
      <div class="why-ic"><svg class="ic">...</svg></div>
      <div><h3>...</h3><p>...</p></div>
    </div>
  </div>
</div>
```

Each item: 48px icon box (border + `border-radius: 14px`) + text. Dotted top border between items.
Icons: one per item from sprite (`#i-phone`, `#i-search`, `#i-receipt`, `#i-layers`, `#i-chat`).

---

### PAIN POINTS

Surface background section (`.pain`). Interactive checkbox chips with live counter.

```html
<div class="pain">
  <div class="pain-head"> eyebrow + h2 + lead </div>
  <div class="chips">
    <label class="chip">
      <input type="checkbox" id="p1">
      <span>My website is slow on phones</span>
    </label>
  </div>
  <div class="pain-foot">
    <a class="btn btn-ink btn-lg" href="#audit">Get these fixed ...</a>
    <span class="mono" id="painCount" role="status">Nothing ticked yet</span>
  </div>
</div>
```

Unchecked: white bg, muted border, grey radio circle.
Checked: `var(--fg)` bg, white text, accent filled circle.
Counter: live ARIA `role="status"` span updated by JS.

---

### PORTFOLIO GRID

3-column auto-fit. Each card: coloured art block + title + pill tag + description.

```html
<a class="proj" href="/portfolio/project-slug/">
  <div class="proj-art pa1">
    <!-- mockup or image -->
    <span class="tagsample">Tag</span>
  </div>
  <div class="proj-meta">
    <h3>Project Name</h3>
    <span class="pill">Web design + SEO</span>
  </div>
  <p>Short outcome description.</p>
</a>
```

Art backgrounds: `.pa1` (teal), `.pa2` (coral/red), `.pa3` (purple).
`.tagsample` / `.pill`: pill-shaped label, can be positioned inside art or in meta row.

---

### TESTIMONIALS

3-column auto-fit. Each quote: top border line + display-font quote + mono attribution.

```html
<figure class="quote">
  <p>"Quote text here in display font."</p>
  <figcaption class="mono">Name, role / company<br>Location</figcaption>
</figure>
```

Border: `1px solid var(--fg)` top — not accent, not muted. Deliberate contrast.

---

### AUDIT CTA BANNER

Red full-bleed section. Two columns: copy on left, dark form on right.

```html
<div class="audit">
  <div>
    <span class="eyebrow"><i class="sq"></i> Free audit</span>
    <h2 class="h2">Get a Free Website and Marketing Audit</h2>
    <p>Description text.</p>
  </div>
  <form class="form" novalidate>
    <div class="field">
      <label for="a-site">Business or website</label>
      <input id="a-site" type="text" placeholder="yourbusiness.co.ug">
    </div>
    <div class="field">
      <label for="a-wa">WhatsApp number</label>
      <input id="a-wa" type="tel" placeholder="+256 7XX XXX XXX">
    </div>
    <button class="btn btn-red btn-lg" type="submit">Request my audit ...</button>
    <p class="form-msg" role="status"></p>
  </form>
</div>
```

`.audit .eyebrow .sq`: white dot (not red — banner is already red).
Radial glow: `::before` pseudo-element, top-right, blurred white circle.
Form: `rgba(11,10,10,.92)` dark card, 22px radius, mono uppercase labels.

---

### BLOG CARDS

3-column auto-fit. Each card: large coloured art area with big display text + meta row + title.

```html
<a class="post" href="/blog/post-slug/">
  <div class="post-art pt2" aria-hidden="true">vs</div>
  <div class="post-meta">
    <span class="pill">Ads</span>
    <span>5 min read</span>
  </div>
  <h3>Google Ads vs Facebook Ads: Which Works Better in Uganda?</h3>
</a>
```

Art backgrounds: `.pt1` (dark warm), `.pt2` (red to orange), `.pt3` (green teal).
Art text: oversized display font, tight tracking, white. Acts as visual shorthand for topic.
Hover: accent underline on h3 (`text-decoration-color: var(--accent)`).

---

### FOOTER

4-column grid + giant watermark text at bottom.

```
Col 1 (1.5fr): Logo + tagline + social row
Col 2 (1fr):   Services links
Col 3 (1fr):   Company links
Col 4 (1fr):   Contact info (address, WhatsApp, phone, email)
---
Bottom bar: © copyright | Privacy Policy | Terms
Giant watermark: "KTM" at clamp(7rem, 26vw, 22rem), opacity 5%
```

Social icons: 40px circles with mono 2-letter labels (Fb, Ig, In, Wa). Replace with SVG icons.
`.foot-grid h4`: mono uppercase column headings.
`.foot-contact`: `<address>` tag, `font-style: normal`, grid layout.

---

### WHATSAPP BUTTON

Fixed, bottom-right, always visible.

```html
<a class="wa" href="https://wa.me/256XXXXXXXXX?text=Hello%20KTM..." aria-label="Chat with KTM on WhatsApp">
  <svg viewBox="0 0 24 24" aria-hidden="true">...</svg>
</a>
```

Green `#25D366`, 58px circle, `z-index: 60`, scales up 1.06 on hover.

---

## PATTERNS

### Section heading pattern (used everywhere)

```html
<div class="sec-head">
  <div>
    <span class="eyebrow"><i class="sq"></i> Label</span>
    <h2 class="h2">Section Title</h2>
  </div>
  <a class="link-u" href="/page/">View All <svg class="ic"><use href="#i-right"/></svg></a>
</div>
```

### Eyebrow always before h2

Every section starts: eyebrow (red dot + label) then `h2.h2`. Never just a heading alone.

### Dashed borders as dividers

Three types used:
- `border-bottom: 1px dashed var(--line)` — stats
- `border-bottom: 1px dashed rgba(217,50,37,.55)` — service rows (red-tinted)
- `border-top: 1px dotted var(--line)` — why-item rows

### Sticky left, scrollable right

Used twice: Why KTM (intro sticky, list scrolls) and Services (list scrolls, preview panel sticky).
Sticky top: `calc(env(safe-area-inset-top, 0px) + 100px)`.

### Dark sections always `border-radius: var(--radius)`

The services block, hero, pain section and audit banner all use `border-radius: 28px`. This gives the page its editorial, card-like feel. Never full-bleed rectangles.

---

## JS BEHAVIOURS

Three interactive patterns — implement in `<script>` tags or Astro client scripts:

### 1. Nav scroll state
```js
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
```

### 2. Mobile menu toggle
```js
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// Close on any link click
document.querySelectorAll('.links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});
```

### 3. Services preview panel
On `.svc` mouseenter / focus:
- Toggle `.is-active` class
- Set `--g1` and `--g2` CSS vars on `.pv-art` from `data-g1` / `data-g2`
- Update `#pvKw`, `#pvTitle` text content
- Rebuild `#pvList` from `data-items` (pipe-separated string)
- Update `#pvLink` href from `data-href`

### 4. Pain point counter
On checkbox change: count checked boxes, update `#painCount` aria live region.
"Nothing ticked yet" / "1 problem ticked" / "N problems ticked".

---

## RESPONSIVE SUMMARY

| Breakpoint | Changes |
|-----------|---------|
| `1100px` | Hide `.phone-no` in nav |
| `960px` | Collapse desktop nav to hamburger. Stack services to 1 col, hide preview panel. Stack why/audit to 1 col. Footer to 2-col. Showcase to 2-col. |
| `700px` | Hero padding reduced. Strip stacks vertically. Showcase becomes horizontal scroll snap. Services hides `.svc-kw`. Why-item icon shrinks. |
| `520px` | Footer 1-col. Hero tags gap reduces. |

Reduced motion: blobs and marquee animation disabled. Button/WA transitions removed.

---

## FILES

| File | Purpose |
|------|---------|
| `src/styles/global.css` | All CSS — vars, reset, utilities, component classes |
| `tailwind.config.mjs` | Design tokens as Tailwind config (colors, fonts, radius, shadows, animations) |
| `DESIGN_SYSTEM.md` | This file — full reference |
| `SITE_STRUCTURE.md` | Page map, sections per page, SEO titles |
