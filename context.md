# context.md
# Project: Luxury Architecture & Interior Design — Demo Website
# Purpose: Freelancer pitch demo for Mumbai-based architecture/interior design firms
# AI Agent: Read this file in full before generating any code or making any decisions.

---

## AGENT INSTRUCTIONS

You are building a complete, multi-page website for a luxury architecture and interior
design firm based in Mumbai, India. This is a high-converting pitch demo. Every decision
— layout, animation, copy, color, spacing — must reinforce the brand positioning:
**premium, editorial, trustworthy, modern**.

The pre-built UI components are already in the `/components` folder. Use them as your
building blocks. Do not reinvent what already exists — compose, extend, and wire them
together into full pages.

Read this entire file before writing a single line of code.

---

## PROJECT STRUCTURE

```
/
├── components/         ← Pre-built UI components from v0. USE THESE.
├── pages/
│   ├── index.tsx       ← Home page
│   ├── about.tsx       ← About page
│   ├── projects/
│   │   ├── index.tsx   ← Projects grid page
│   │   └── [slug].tsx  ← Single project case study
│   ├── services.tsx    ← Services page
│   └── contact.tsx     ← Contact page
├── styles/
│   └── globals.css     ← Global styles + CSS variables + font imports
├── public/
│   └── images/         ← Placeholder images (use Unsplash URLs if absent)
├── data/
│   └── projects.ts     ← Project data array (defined in this file below)
└── context.md          ← THIS FILE — single source of truth
```

---

## DESIGN SYSTEM — IMPLEMENT EXACTLY AS SPECIFIED

### CSS Variables (define in globals.css, reference everywhere)

```css
:root {
  --bg-dark:        #0E0E0C;
  --bg-mid:         #1A1A18;
  --bg-light:       #F5F2EE;
  --bg-white:       #FDFCFA;
  --accent:         #C9A96E;
  --accent-hover:   #B8934A;
  --text-primary:   #FFFFFF;
  --text-dark:      #1A1A18;
  --text-muted:     #6B6B64;
  --text-muted-dk:  #9A9A90;
  --border-dark:    #2E2E2B;
  --border-light:   #E0DDD8;
  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-body:      'DM Sans', sans-serif;
  --section-py:     120px;
  --section-py-mob: 64px;
  --container:      1280px;
  --gutter:         24px;
  --ease:           cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --duration:       0.5s;
  --duration-fast:  0.25s;
}
```

### Font Imports
Load via next/font/google with display swap:
- Cormorant Garamond — weights 300, 400, 500, 600 (display headings, quotes, hero)
- DM Sans — weights 300, 400, 500 (body, UI, labels, buttons)

### Typography Scale
```
Display / h1:  clamp(52px, 7vw, 96px)   font-display  weight 400  line-height 1.04
H2:            clamp(36px, 4.5vw, 64px) font-display  weight 400  line-height 1.1
H3:            clamp(24px, 2.5vw, 36px) font-display  weight 500  line-height 1.2
Body:          16px / line-height 1.75  font-body     weight 300
Label:         11px  letter-spacing 0.18em  uppercase  font-body  weight 500
```

### Animation System
All animations must use only `transform` and `opacity` for GPU performance.

```css
/* Base reveal classes — toggled by IntersectionObserver */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}
.reveal.visible   { opacity: 1; transform: translateY(0); }
.reveal-left      { opacity: 0; transform: translateX(-40px);
                    transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out); }
.reveal-left.visible  { opacity: 1; transform: translateX(0); }
.reveal-right     { opacity: 0; transform: translateX(40px);
                    transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out); }
.reveal-right.visible { opacity: 1; transform: translateX(0); }

/* Stagger: add data-delay="1" through "6" on children */
[data-delay="1"] { transition-delay: 0.1s; }
[data-delay="2"] { transition-delay: 0.2s; }
[data-delay="3"] { transition-delay: 0.3s; }
[data-delay="4"] { transition-delay: 0.4s; }
[data-delay="5"] { transition-delay: 0.5s; }
[data-delay="6"] { transition-delay: 0.6s; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Create these reusable hooks:
- `useScrollReveal()` — attaches IntersectionObserver, adds .visible class
- `useCountUp(target, duration)` — counts 0→target when element enters viewport
- `useParallax(speed)` — subtle translateY shift tied to window.scrollY

---

## GLOBAL COMPONENTS (used on every page)

### Navbar
```
Position: fixed, top: 0, full width, z-index: 100
Initial state: background transparent, logo + links white
Scrolled state (after 60px scroll): background var(--bg-dark) 95% opacity,
  backdrop-filter: blur(12px), border-bottom: 1px solid var(--border-dark)
Transition: background 0.4s ease

Logo: firm name in var(--font-display) weight 500, 20px. Far left.
Nav links (far right): About | Projects | Services | Contact
  Font: var(--font-body) 12px uppercase letter-spacing 0.12em
  Hover: color var(--accent), transition 0.2s
  Active: gold underline 2px

WhatsApp pill (rightmost): background var(--accent), color var(--bg-dark),
  text "WhatsApp Us" 11px uppercase tracked, px 20px py 10px, no border-radius

Mobile hamburger: 3 lines → X animation (CSS transform). Opens full-screen
  overlay menu: background var(--bg-dark), links large (32px display font),
  centered vertically and horizontally, staggered fade-in
```

### Footer
```
Background: var(--bg-dark)
Top row: Logo wordmark left | Tagline italic right ("Where Vision Meets Structure")
4-column grid:
  Col 1 — About: 2-line firm description
  Col 2 — Services: Architectural Design, Interior Design, Turnkey, Landscape
  Col 3 — Portfolio: Residential, Commercial, Hospitality, Architecture
  Col 4 — Contact: Mumbai address, phone, email, hours (Mon–Sat 9:30–18:30)
Social row: Instagram, Facebook, LinkedIn, WhatsApp
  36px circle outlined buttons, border var(--border-dark)
  Hover: border var(--accent), icon color var(--accent), transition 0.2s
Divider: 1px var(--border-dark) horizontal line
Bottom strip: "© 2025 [Firm Name]. All rights reserved." left
  "Crafted by [Your Studio Name]" right — both 12px var(--text-muted-dk)
Link hover: color var(--accent) transition 0.2s
```

### WhatsApp Floating Button
```
Fixed bottom-right: right 24px, bottom 24px, z-index 999
Circle 56px, background #25D366, box-shadow 0 4px 20px rgba(37,211,102,0.35)
WhatsApp SVG icon white 28px centered
Pulse animation: box-shadow 0→0 12px 0 rgba(37,211,102,0.5), 2s infinite ease
Show after 3s delay (CSS animation-delay or setTimeout)
On click: window.open("https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20your%20design%20services")
```

### Custom Cursor (desktop only — media: pointer fine)
```
Dot: 8px circle, background var(--accent), fixed, pointer-events none, z-index 9999
Ring: 36px circle, border 1.5px solid var(--accent), opacity 0.3, fixed,
  pointer-events none, z-index 9999, transition: transform 0.1s lag effect
On hovering a/button: ring scale(1.6), opacity 0.6
Implement via mousemove → requestAnimationFrame → CSS transform translate
```

---

## PAGE 1 — HOME (pages/index.tsx)

### SECTION: Hero
```
Height: 100dvh
Background image: https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80
Overlay: linear-gradient(160deg, rgba(14,14,12,0.6) 0%, rgba(14,14,12,0.3) 50%, rgba(14,14,12,0.75) 100%)
Content: padding-left 8vw desktop, centered mobile

Elements (staggered fade-up on page load, 0.12s per element):
  1. Label: "EST. 2004 — MUMBAI, INDIA" — 11px gold uppercase tracked, delay 0
  2. Headline: "Where Vision\nMeets Structure" — clamp(56px,8vw,104px) font-display
     weight 400, white, line-height 1.04, delay 0.12s
  3. Subline: "Architecture & Interior Design" — 17px font-body weight 300,
     color rgba(255,255,255,0.7), letter-spacing 0.05em, delay 0.24s
  4. CTA row (margin-top 40px), delay 0.36s:
     - "View Our Projects" — bg var(--accent), color var(--bg-dark), 13px uppercase
       tracked, px 32px py 16px, border-radius 0 (sharp), hover: bg var(--accent-hover)
     - "WhatsApp Us ↗" — border 1px rgba(255,255,255,0.5), color white, same size,
       hover: border-color var(--accent), color var(--accent)
  5. Scroll chevron: centered bottom 32px, opacity 0.4, CSS bounce animation
```

### SECTION: Trust Bar
```
Height: 64px, background var(--bg-mid)
4 items, separated by 1px var(--border-dark) vertical dividers:
  "9.4 / 10  Client Rating"
  "250+  Projects Delivered"
  "20+  Years of Excellence"
  "Mumbai & Pan-India"
Value: 15px font-body weight 500, white
Label: 11px uppercase tracked var(--text-muted-dk)
Mobile: 2×2 grid, height 80px
Reveal: fade-up on page load after hero (delay 0.5s)
```

### SECTION: About Snapshot
```
Background: var(--bg-light)
Padding: var(--section-py)
Layout: 2 columns, 55/45 split, gap 80px

Left — image:
  Unsplash: https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900
  Aspect ratio: 3/4, object-fit cover
  Left border: 4px solid var(--accent)
  Subtle parallax: translateY 0→-20px as section scrolls past
  Reveal: .reveal-left

Right — text (vertically centered):
  Label: "OUR STORY" gold 11px uppercase tracked
  H2: "Designing Spaces\nThat Outlast Trends" — font-display 48px dark
  Body: 3 lines about 20-year legacy in Mumbai. 16px muted line-height 1.8
  Blockquote: italic 20px font-display var(--accent), border-left 3px var(--accent),
    pl 20px, my 32px
    Text: "Design is not decoration — it is the architecture of human aspiration."
  Link: "Discover Our Story →" 13px uppercase tracked gold underline on hover
  Reveal: .reveal-right
```

### SECTION: Services
```
Background: var(--bg-dark)
Padding: var(--section-py)
Header centered: Label "OUR SERVICES" gold | H2 "What We Do" white

4 cards row (desktop) / 2×2 (tablet) / horizontal scroll snap (mobile):
Each card height 480px, overflow hidden, position relative, border-radius 0

Card images:
  1. Architectural Design: https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800
  2. Interior Design: https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800
  3. Turnkey Solutions: https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800
  4. Landscape Design: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800

Card overlay: linear-gradient(to top, rgba(14,14,12,0.92) 0%, rgba(14,14,12,0.1) 60%)
Card content (absolute bottom-left, p 28px):
  Service name: 22px font-display white
  Description (hidden by default, translateY 12px opacity 0):
    On hover: opacity 1, translateY 0, transition 0.3s
  Arrow: "→" gold, appears on hover

Image scale on hover: transform scale(1.04), transition 0.6s ease
Staggered reveal: each card .reveal with data-delay 1-4
```

### SECTION: Featured Projects
```
Background: var(--bg-white)
Padding: var(--section-py)
Header: Label "OUR WORK" | H2 "Selected Projects"

Filter tabs (below header, mb 64px):
  All | Residential | Commercial | Hospitality | Architecture
  Active: color var(--accent), border-bottom 2px var(--accent)
  Inactive: color var(--text-muted), hover var(--text-dark)
  Tab click: filter cards by data-type attribute, fade transition 0.3s

Alternating editorial rows (NOT a grid):
  Row 1: image 60% left + text 40% right, gap 0
  Row 2: text 40% left + image 60% right, gap 0
  Row 3: image 60% left + text 40% right, gap 0
  Rows separated by 80px vertical gap

Image: height 520px, object-fit cover, overflow hidden
  Hover: scale(1.03) transition 0.6s
  Reveal: .reveal-left or .reveal-right alternating

Text block (vertically centered, px 48px):
  Type tag: 11px gold uppercase tracked
  Project name: 32px font-display var(--text-dark)
  Location: 14px var(--text-muted)
  Area: 13px var(--text-muted)
  "View Project →" link: 13px uppercase tracked var(--accent), mt 24px

Projects to show (first 3 from data/projects.ts):
  The Harbour Penthouse / Bandra Corporate Suite / Juhu Beach Residence

Below rows: centered "View All Projects →" outlined button var(--accent)
```

### SECTION: Process
```
Background: var(--bg-dark)
Padding: var(--section-py)
Header: Label "HOW WE WORK" | H2 "Our Process" — white

5-step horizontal stepper (desktop), vertical stacked (mobile <768px):

Desktop: flex row, steps connected by 1px var(--border-dark) line
  Active/hovered step: connector segment transitions to var(--accent)

Each step:
  Large background number: 80px font-display opacity 0.08, absolute
  Step number label: "01 /" 11px gold uppercase tracked
  Title: 18px font-body weight 500 white
  Description: 14px var(--text-muted-dk) line-height 1.7, max-width 200px

Steps content:
  01 / Discovery    "We listen deeply to understand your vision, lifestyle, and non-negotiables."
  02 / Concept      "Mood boards, spatial concepts, and design directions for your review."
  03 / Design       "Detailed drawings, 3D renders, material palettes, full documentation."
  04 / Execution    "Our site team manages vendors, timelines, quality at every stage."
  05 / Handover     "A walkthrough of your finished space — exactly as designed, on schedule."

Staggered reveal: each step .reveal with data-delay 1-5
```

### SECTION: Stats Counter
```
Background: var(--bg-mid)
Padding: 80px var(--gutter)
4 stats in a row, vertical gold dividers between them (desktop)
Mobile: 2×2 grid

Stats:
  25+   Years of Practice
  320+  Projects Completed
  400+  Happy Clients
  2.5M+ Sq.ft Designed

Number: clamp(56px, 7vw, 88px) font-display white, count-up animation on viewport enter
  Count-up: 0 → value over 1.8s ease-out using useCountUp hook
  The "+" and "M" suffixes: append after counting ends
Label: 12px font-body uppercase tracked var(--text-muted-dk), mt 8px
```

### SECTION: Testimonials
```
Background: var(--bg-light)
Padding: var(--section-py)
Header: Label "CLIENT VOICES" | H2 "What Our Clients Say"

Carousel: single card visible, arrow nav left/right, dot indicators below
Auto-advance: every 5 seconds, pause on hover

Each card:
  Background white, padding 48px 56px, border-radius 0
  Box-shadow: 0 2px 40px rgba(0,0,0,0.06)
  Top: 5 gold star icons (★★★★★) 16px var(--accent)
  Quote: 18px italic font-display var(--text-dark) line-height 1.75, mt 20px
  Bottom: flex row — avatar 56px circle + name/role right
    Name: 16px font-body weight 500 var(--text-dark)
    Role: 12px uppercase tracked var(--accent)

Testimonials:
  1. Rajesh Mehta | MD, Mehta Realty Group
     "The team transformed our penthouse beyond anything we imagined. Every material,
     every detail was deliberate. Guests ask who designed the space within minutes
     of arriving."

  2. Priya Sheth | Director, Sheth Developers
     "What sets this firm apart is their discipline. Timelines were met, budget was
     respected, and the outcome was extraordinary. Rare combination in this industry."

  3. Anjali Kapoor | CEO, AK Hospitality Ventures
     "They designed our hotel lobby and it became the most photographed space in
     the property. Guests check in and immediately reach for their cameras. That
     is the power of good design."

Slide transition: opacity 0→1, translateX subtle, 0.4s ease
```

### SECTION: Press & Recognition
```
Background: var(--bg-dark)
Padding: 80px var(--gutter)
Label: "AS FEATURED IN" — gold 11px uppercase tracked, centered, mb 40px

Logo marquee (infinite horizontal scroll, pausable on hover):
  Logos (text-based SVG placeholders, grayscale):
  Architectural Digest | Vogue Living | Society Interiors | GQ India |
  Wallpaper* | Mid-Day | Decor Journal
  Duplicate set for seamless loop
  Opacity 0.4, hover: opacity 0.85, filter: brightness(1.2) sepia(0.3) saturate(3)
    → gold tint effect on hover

Below marquee (mt 48px), 3 award tags centered:
  Pill shape, border 1px var(--border-dark), px 20px py 10px, 12px uppercase tracked
  Text var(--text-muted-dk), hover border var(--accent) color var(--accent)
  "IFJ Award 2023" | "Society Interiors Top 50" | "Best Luxury Firm — Mumbai 2022"
```

### SECTION: CTA Banner
```
Background: var(--bg-dark)
Add CSS noise texture: background-image: url("data:image/svg+xml,...") or
  use a pseudo-element with repeating-radial-gradient for grain effect
Padding: 140px var(--gutter)
Centered content:

  H2: "Ready to Design Your Space?" — clamp(40px,5vw,72px) font-display white
  Subline: "Let's start a conversation about what's possible." — 18px muted, mt 16px
  Buttons row (mt 40px, gap 16px):
    "Get In Touch" — bg var(--accent) color var(--bg-dark) px 40px py 18px
    "WhatsApp Now" — bg #25D366 color white px 40px py 18px, WhatsApp icon left

All elements: .reveal with stagger
```

---

## PAGE 2 — PROJECTS GRID (pages/projects/index.tsx)

```
Header: dark bg, "Our Work" h1, subline "Five hundred stories of space, light, and detail."
Padding-top: 160px (account for fixed navbar)

Filter tabs (sticky: position sticky, top 72px, bg var(--bg-dark) 95% + blur):
  All | Residential | Commercial | Hospitality | Architecture | Landscape
  Filter by data-type. Fade non-matching cards: opacity 0.2, pointer-events none

Masonry grid (CSS columns: 3 desktop, 2 tablet, 1 mobile, gap 16px):
  All 8 projects from data/projects.ts

Each card:
  Position relative, overflow hidden, break-inside avoid, mb 16px
  Image: 100% width, height auto (natural masonry)
  Hover overlay: position absolute inset 0,
    background rgba(14,14,12,0) → rgba(14,14,12,0.75), transition 0.4s
    Content (translateY 12px → 0, opacity 0 → 1 on hover):
      Type tag: 11px gold uppercase top-left
      Project name: 22px font-display white
      Location: 13px var(--text-muted-dk)
      "View →" arrow bottom-right gold
  Cursor: pointer
  Link wraps entire card → /projects/[project.slug]
```

## PAGE 2b — PROJECT CASE STUDY (pages/projects/[slug].tsx)

```
Data: import project by slug from data/projects.ts

1. HERO (100vh):
   Background: project.coverImage, dark overlay 0.55
   Bottom-left content:
     Type tag: gold 11px uppercase
     Project name: clamp(40px,6vw,80px) font-display white
   Top-left: "← All Projects" link white, hover gold

2. METADATA BAR:
   Background var(--bg-mid), py 24px
   Horizontal: Location | Year | Area | Type | Client Type
   Label 10px muted | Value 14px font-body white gold-colored
   Separated by 1px var(--border-dark) vertical dividers

3. STORY + SPECS:
   2-column: 60% story left, 40% specs right
   Story: 3 sections with h3 headings — "The Brief" / "The Approach" / "The Outcome"
     Content from project.brief, project.approach, project.outcome
   Right: sticky sidebar (top: 120px)
     Project details list: label/value pairs, bordered rows
     CTA button: "Start Your Project →" bg var(--accent) full width

4. GALLERY:
   Pattern: full-width → 2-column pair → full-width → repeat
   Gap: 16px between images
   Each image: click opens lightbox
   Lightbox: fixed fullscreen bg rgba(0,0,0,0.95), image centered max-h 90vh,
     left/right arrow nav, ESC to close, X button top-right

5. PREV/NEXT NAVIGATION:
   Border-top 1px var(--border-light), py 48px
   "← Previous Project" left | "Next Project →" right
   Hover: thumbnail preview appears above arrow (absolute positioned, 200px wide)

6. CTA STRIP:
   Background var(--bg-dark), py 80px, centered
   "Loved This Space? Let's Design Yours."
   Two buttons: "Get In Touch" | "WhatsApp Now"
```

---

## PAGE 3 — ABOUT (pages/about.tsx)

```
1. HERO:
   Full viewport, dark overlay
   Image: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800
   Centered: "About Us" h1 + "Twenty years of designing the spaces people call home."

2. FOUNDER SECTION (bg var(--bg-light)):
   2-col: editorial portrait left (parallax), text right
   Image: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800
   Text: Name display font 40px | "Principal Architect" gold | philosophy 4 lines |
     italic pull-quote 20px font-display

3. PHILOSOPHY PILLARS (bg var(--bg-white)):
   3-col, gap 48px
   Each: SVG icon 40px gold | title h3 | 2-line description
   "Design First" | "Function Always" | "Detail Obsessed"
   Cards: border 1px var(--border-light), p 40px, hover: border-color var(--accent) transition

4. TIMELINE (bg var(--bg-dark)):
   Horizontal line desktop, vertical mobile
   5 milestones:
     2004 — "Founded in Mumbai with a vision and a team of three."
     2008 — "First major commercial project: 50,000 sq.ft tech campus, Pune."
     2014 — "Entered hospitality; designed our first 5-star hotel project."
     2019 — "Pan-India presence. 200+ projects milestone crossed."
     2024 — "20th anniversary. 500+ projects. Still designing, still learning."
   Year: gold font-display 24px | Event: white 15px font-body
   Connector line: 1px var(--border-dark), node: 8px circle var(--accent)
   Staggered reveal left-to-right

5. TEAM GRID (bg var(--bg-light)):
   2×2 grid, gap 32px
   Each: square image 1:1, name 20px font-display, role 12px gold uppercase
   Hover: subtle dark overlay + LinkedIn icon center
   Members: Principal Architect | Senior Designer | Project Manager | Landscape Lead

6. ACCREDITATIONS (bg var(--bg-white)):
   "Our Memberships" label + 4 logo placeholders in a row
   COA | IIA | GRIHA | IGBC — grayscale, opacity 0.5
```

---

## PAGE 4 — SERVICES (pages/services.tsx)

```
1. HEADER: dark hero "Our Services" + subline "End-to-end design from concept to completion."

2. FOUR ALTERNATING SERVICE SECTIONS:
   Pattern: image-right | image-left | image-right | image-left
   Each: height 560px flex row (stacked on mobile)
   Image: 55% width, object-fit cover, subtle parallax
   Text: 45% width, vertically centered, px 64px
     Number label: "01 /" gold 13px uppercase tracked
     H2: service name font-display 44px
     Description: 3 lines 16px muted
     Included (5 items): custom gold dash (—) not default bullet, 14px font-body
     "Start a Project →" gold link underline on hover
   Background alternating: var(--bg-white) | var(--bg-light)

   Services:
   01 / Architectural Design
     "From site analysis to built form — architecture that endures and inspires."
     — Site analysis and feasibility
     — Concept development and schematic design
     — Design development and documentation
     — Government approvals and statutory clearances
     — Construction supervision

   02 / Interior Design
     "Curated interiors that reflect your identity and aspirations, to the last detail."
     — Space planning and layout optimisation
     — Material, finish, and furniture selection
     — Lighting design and specifications
     — Custom joinery and bespoke furniture
     — Art and accessory curation

   03 / Turnkey Solutions
     "We handle everything from blueprint to handover — you receive the keys to a finished space."
     — Full project management and scheduling
     — Vendor sourcing and procurement
     — Site supervision and quality control
     — Budget tracking and cost management
     — Punch-list and final handover

   04 / Landscape Design
     "Outdoor spaces designed with the same rigour, care, and artistry as the spaces within."
     — Landscape concept and masterplan
     — Plant selection and specification
     — Outdoor lighting design
     — Water features and hardscaping
     — Ongoing landscape management

3. FAQ ACCORDION (bg var(--bg-light)):
   H2: "Frequently Asked Questions"
   6 items, smooth height 0→auto transition, chevron rotates 180° on open
   Q: "How long does a typical interior project take?"
   A: "Most residential projects take 3–6 months from design sign-off to handover,
      depending on scope, custom items, and site conditions."

   Q: "Do you manage government approvals?"
   A: "Yes. Our team handles all statutory approvals, NOCs, and documentation required
      for architectural projects."

   Q: "What is your design fee structure?"
   A: "We work on a professional fee basis — either a percentage of project cost or a
      fixed fee agreed at the outset. Full transparency, no surprises."

   Q: "Do you work outside Mumbai?"
   A: "Yes. We are active across Maharashtra and have delivered projects in Delhi,
      Bangalore, and Goa."

   Q: "What is a turnkey project?"
   A: "We handle everything — design, procurement, execution, and handover. You receive
      keys to a finished, move-in-ready space."

   Q: "Can I see similar completed projects before engaging?"
   A: "Absolutely. We arrange site visits to relevant completed projects and provide
      client references upon request."
```

---

## PAGE 5 — CONTACT (pages/contact.tsx)

```
1. HEADER (minimal): dark bg, large display "Let's Talk", subline "Tell us about your project."
   Padding-top 160px for fixed navbar

2. WHATSAPP SHORTCUT (below header, bg var(--bg-dark)):
   Centered, prominent:
   Button: bg #25D366, white text, WhatsApp icon left, px 32px py 16px
   Text: "Chat on WhatsApp — Fastest Response"
   Subline below: "Average response time: under 2 hours"

3. TWO-COLUMN FORM SECTION:
   Left col (60%) — bg var(--bg-light), p 64px:
     H3: "Send Us a Message"
     Form fields (stacked, full width, gap 20px):
       Full Name * — text input
       Phone Number * — tel input, +91 prefix
       Email Address * — email input
       Project Type * — select: Residential / Commercial / Hospitality / Landscape / Other
       Budget Range — select: Under ₹25L / ₹25L–₹75L / ₹75L–₹2Cr / ₹2Cr+ / Not sure yet
       Message — textarea 4 rows
     Submit: "Send Enquiry" bg var(--accent) color var(--bg-dark) full width 54px height
       Loading state: spinner + "Sending..."
       Success state: replace form with checkmark animation + "Thank you. We'll be in touch
       within 24 hours."

   Input style: border 0, border-bottom 1px var(--border-light), bg transparent,
     padding 14px 0, font-body 15px, focus: border-bottom-color var(--accent) transition

   Right col (40%) — bg var(--bg-dark), p 64px:
     "Mumbai" — h3 gold font-display
     Address: full address, phone, email, hours — 15px white
     Map placeholder: 240px height, bg var(--bg-mid), rounded 0,
       center text "Google Maps Embed" — replace with actual iframe at handoff
     Social row: Instagram, Facebook, LinkedIn, WhatsApp circle icons
       36px outlined, border var(--border-dark), hover var(--accent)
```

---

## DATA FILE (data/projects.ts)

```typescript
export interface Project {
  slug: string
  name: string
  type: "Residential" | "Commercial" | "Hospitality" | "Architecture" | "Landscape"
  location: string
  year: number
  area: string
  clientType: string
  coverImage: string
  brief: string
  approach: string
  outcome: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: "the-harbour-penthouse",
    name: "The Harbour Penthouse",
    type: "Residential",
    location: "Worli, Mumbai",
    year: 2023,
    area: "4,200 sq.ft",
    clientType: "Private HNI Residence",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    brief: "A 42nd-floor penthouse overlooking the Bandra-Worli sea link. The client wanted a space that felt open, warm, and timeless — not a showpiece, but a home.",
    approach: "We stripped the space to its bones and rebuilt with natural stone, warm timbers, and a restrained palette of ivory, sand, and deep bronze. Every room frames the water view deliberately.",
    outcome: "The completed residence was featured in Society Interiors and has since become one of our most-requested portfolio references.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80",
    ]
  },
  {
    slug: "bandra-corporate-suite",
    name: "Bandra Corporate Suite",
    type: "Commercial",
    location: "Bandra, Mumbai",
    year: 2023,
    area: "8,500 sq.ft",
    clientType: "Corporate Office",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    brief: "A fast-growing fintech company needed an office that would attract and retain top-tier talent. Hospitality-level finish, none of the corporate cliché.",
    approach: "We introduced biophilic elements, acoustic zoning, and a central breakout lounge that doubles as a client presentation space. Every meeting room tells a different story.",
    outcome: "Employee satisfaction scores increased 34% in the first quarter post-move. The office has since been used in three recruitment campaigns.",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80",
    ]
  },
  {
    slug: "juhu-beach-residence",
    name: "Juhu Beach Residence",
    type: "Residential",
    location: "Juhu, Mumbai",
    year: 2022,
    area: "6,100 sq.ft",
    clientType: "Private HNI Residence",
    coverImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    brief: "A beachside family home for a family of five — meant to feel effortlessly relaxed while remaining unmistakably luxurious.",
    approach: "Coastal materiality throughout: lime-wash walls, rattan accents, reclaimed wood floors, and bespoke furniture sourced from craftsmen in Rajasthan and Kerala.",
    outcome: "Published in Architectural Digest India, 2023. The family moved in permanently — they no longer needed a city apartment.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1400&q=80",
    ]
  },
  {
    slug: "mahalaxmi-hotel-lobby",
    name: "Mahalaxmi Hotel Lobby",
    type: "Hospitality",
    location: "Mahalaxmi, Mumbai",
    year: 2022,
    area: "12,000 sq.ft",
    clientType: "Boutique Hotel",
    coverImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    brief: "A 200-room boutique hotel needed a lobby that would become a destination in its own right — not just a check-in counter.",
    approach: "A 9-metre ceiling allowed us to commission a bespoke chandelier installation and create a double-height living wall with layered ambient lighting.",
    outcome: "The lobby became the most-tagged location at the property within 30 days of opening. Featured in GQ India.",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1400&q=80",
    ]
  },
  {
    slug: "the-atlas-showroom",
    name: "The Atlas Showroom",
    type: "Commercial",
    location: "Lower Parel, Mumbai",
    year: 2023,
    area: "3,200 sq.ft",
    clientType: "Luxury Retail",
    coverImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
    brief: "A luxury watch and jewellery brand needed a retail environment that matched the precision and exclusivity of its products.",
    approach: "Dark walnut display joinery, museum-grade lighting, and a private consultation room with bespoke seating. Every fixture custom-made to specification.",
    outcome: "Sales per square foot increased 28% compared to the brand's previous flagship location.",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&q=80",
    ]
  },
  {
    slug: "sea-view-villa-alibaug",
    name: "Sea View Villa",
    type: "Residential",
    location: "Alibaug, Maharashtra",
    year: 2021,
    area: "7,800 sq.ft",
    clientType: "Private Villa",
    coverImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    brief: "A weekend escape for a Mumbai-based family. The brief was simple: make a home that makes you forget everything the moment you arrive.",
    approach: "Passive cooling design, infinity pool integrated into the landscape, open-plan living that dissolves the boundary between inside and outside.",
    outcome: "The family moved in full-time. They sold their Mumbai apartment six months after handover.",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1400&q=80",
    ]
  },
  {
    slug: "andheri-tech-office",
    name: "Andheri Tech Office",
    type: "Commercial",
    location: "Andheri, Mumbai",
    year: 2021,
    area: "11,000 sq.ft",
    clientType: "Technology Company",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    brief: "A 300-person technology company scaling rapidly needed a workspace that could support growth while reinforcing culture.",
    approach: "Flexible floor plates with modular furniture, a variety of work modes (focus, collaborate, recharge), and a brand-story wall at the entrance.",
    outcome: "The office was built to a 12-week deadline and delivered on time. Three media outlets covered the fit-out.",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200586c52bf?w=1400&q=80",
    ]
  },
  {
    slug: "nariman-apartment",
    name: "The Nariman Apartment",
    type: "Residential",
    location: "Nariman Point, Mumbai",
    year: 2020,
    area: "3,800 sq.ft",
    clientType: "Private Residence",
    coverImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    brief: "A heritage building apartment in South Mumbai's most prestigious address. The owner wanted the history of the building preserved, not erased.",
    approach: "Restoration of original Mangalore tile flooring, replication of colonial-era cornicing, and contemporary furniture that respects rather than fights the architecture.",
    outcome: "Shortlisted for the COA Heritage Preservation Award, 2021.",
    gallery: [
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=1400&q=80",
    ]
  }
]
```

---

## PERFORMANCE REQUIREMENTS

```
Images: use next/image with explicit width, height, loading="lazy"
Hero images only: loading="eager" priority={true}
Fonts: next/font/google with display="swap"
Animations: transform + opacity only — never animate layout properties
Bundle: no unnecessary dependencies — vanilla JS for scroll/cursor, no GSAP unless needed
Target: Lighthouse Performance score 90+ on mobile
```

---

## PLACEHOLDER VALUES (replace at client handoff)

```
[FIRM NAME]         → actual firm name
[FOUNDER NAME]      → principal architect name
+91 XXXXX XXXXX     → actual phone number
hello@[firmname].com → actual email
[Street Address]    → actual Mumbai office address
https://wa.me/91XXXXXXXXXX → actual WhatsApp number
@[instagramhandle]  → actual Instagram handle
[Your Studio Name]  → your freelance studio name (footer credit)
```

---

## DEFINITION OF DONE

The build is complete when:
- All 5 pages are navigable with working internal links
- Navbar and footer appear on every page
- WhatsApp floating button appears on every page
- Project filter works on /projects
- Lightbox works on case study gallery
- Stats counter animates on scroll
- All scroll reveals fire correctly
- Contact form shows success state on submit
- Site is fully responsive at 1280px, 768px, and 375px
- Custom cursor works on desktop only
- No console errors

---

*End of context.md — Do not modify during the active build.*
*Single source of truth for all pages, components, data, and design decisions.*
