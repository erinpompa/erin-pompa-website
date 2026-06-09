# Erin Pompa / TruthSpeaks 365 — Design System

> Bright, bold, vibrant. Encouraging and inspiring — with real weight behind it.
> Nothing safe, nothing muted. The kind of energy that makes you *feel* something
> the second you land on it. "You belong here, and you're about to level up."

This is the brand + design system for **Erin Pompa**, a speaker coach who helps
women use their stories to impact the world, and her company **TruthSpeaks 365**.

---

## Who this is for

**Erin Pompa** helps women turn their stories into engaging, lively presentations
that take a room on a journey toward self-discovery — no talking heads, no reading
from slides. She also coaches the *business* of speaking: pipeline, getting booked,
getting paid. Her mission is to diversify a male-dominated speaking industry
(≈70% of professional speakers are men) by putting more female voices — especially
women of color — at the front of the room.

**TruthSpeaks 365** is her female-speaker company focused on impact for young
people (grades 6–12). She hires and trains women with powerful stories of adversity
and builds a teachable framework around each story for schools, student leadership
groups, and staff/community trainings.

### Two audiences, two registers
The brand speaks to **two distinct audiences** and the tone shifts between them:

1. **Adults / coaching clients** (Erin's personal brand, social, coaching) —
   warm, spiritual, faith-forward language welcome. Bold and direct.
2. **Students / schools** (TruthSpeaks 365 programs) — relatable, energetic, real,
   but **no religious language** (church/state separation). Meet them where they are.

---

## Sources used to build this system

This system was built from brand materials provided directly by the client —
there was **no existing website, codebase, or Figma file** to reference. Sources:

- `uploads/Screenshot 2026-05-28 at 4.51.52 PM.png` — the 8-color brand palette swatch
- `uploads/voice.md` — Erin's full voice & tone guide (the source of truth for copy)
- `uploads/about-me.md` — bio, company, frameworks, goals, faith context

Because there was no product UI to recreate, the visual system (type, layout,
components, UI kit) is an **original direction designed to match the stated brand
energy and palette** — it should be reviewed and iterated with the client.

> ⚠️ **Fonts are a substitution.** No brand fonts were provided. This system uses
> Google Fonts (Archivo / Hanken Grotesk / Caveat) loaded via CDN as a strong
> match for the "bold + warm" energy. If Erin has chosen brand fonts, send them
> and we'll swap them in and host them locally in `fonts/`.

---

## CONTENT FUNDAMENTALS

How Erin's words are written. This is the most defined part of the brand — when in
doubt, **read `uploads/voice.md`**. Copy is the heartbeat here; it carries the brand
more than any visual does.

### The feeling
Like a **FaceTime call with Erin** — not a polished post. The reader should feel
*seen*, and gasp a little because she says the thing nobody else will say out loud.

### Voice in three words
**Authentic. Energetic. Convicted.** (And brave — she says the elephant-in-the-room thing.)

### Person & address
- **First person, talking TO you** — "I", "you", "we", "us", "y'all". Never "one" or distant third person.
- Inclusive and warm. She calls people **"baby"** — warm, never condescending.
- Conversational and a little messy *on purpose*. She circles back, jumps around, adds things as she thinks of them.

### Casing & punctuation
- **Sentence case** for body copy. **ALL-CAPS for impact/headlines** and drop-the-mic moments ("MY BIO. BYE.").
- Short. Punchy. Fragments are fine. Mix short punchy lines with longer personal ones.
- Em-dashes and ellipses for the spoken, thinking-out-loud rhythm.
- Rhetorical questions land points: "Right? Like, that's the thing." / "You hear me?"

### Signature moves (the patterns underneath)
- **Flip the script** — turn the fear around. "Leaving corporate isn't the risky move. Staying is."
- **Reduce to a framework** — name the parts, give people something usable (Black Dot, Warrior Toolkit, So What / Now What).
- **Name the thing nobody's naming** — with love, not judgment. ("You're not ready because you're scared, not because you're not good enough.")
- **Speak from certainty, not curiosity** — tell them what you know. Earned confidence.
- **Always bring it back to them** — end on a question or a challenge.

### Real phrases (use as flavor, don't overuse)
"You hear me?" · "Pause, baby, pause, baby, pause." · "Reframe all day, baby." ·
"Go hard for you." · "We're only as sick as our secrets, baby." ·
"You are beautiful, you are powerful, you are magnificent." · "Go now."

### Emoji
**Used sparingly and only in social/casual contexts**, never in professional/booking
or school-facing material. The brand carries energy through *color and type*, not emoji.
Don't decorate UI with emoji.

### What it must NOT sound like
Stiff, corporate, press-release, "AI-perfect", over-explained. Avoid:
"It is important to note…", "In conclusion…", "Through adversity, one can find resilience."

| ✅ Sounds like Erin | ❌ Not Erin |
|---|---|
| "Nobody wants to say this, but…" | "It is important to note that…" |
| "Right? Like, that's the thing." | "In conclusion, we can see that…" |
| "I was a mess. And I'm still here." | "Through adversity, one finds resilience." |

---

## VISUAL FOUNDATIONS

The look that matches the voice: loud, confident, warm, and high-energy.
See `colors_and_type.css` for every token.

### Color
- An **8-color vibrant palette** anchored by a warm near-black (`--ink #161413`)
  and a warm off-white paper (`--paper #fbf7f0`). Color is used at **full saturation** —
  never muted, never pastel-washed (soft tints exist only as gentle fills behind text).
- **Pink `#ff66c4` is the signature / primary action color.** Lime `#c1f944` is the
  energy accent (it's also the default highlighter color). Violet, yellow, coral, and
  sky rotate in as supporting blocks and section colors.
- **Two background moods, max, per surface:** warm paper (light) and ink (dark/poster).
  Pick one as the base and let color enter through blocks, buttons, and highlights.
- Color is applied in **confident blocks and fills**, not gradients. Avoid bluish-purple
  tech gradients entirely — they are off-brand.

### Type
- **Archivo** (display, weights 800–900, often UPPERCASE) for impact headlines —
  loud and confident, "words that hit."
- **Hanken Grotesk** (body, 400–800) — warm humanist, highly readable.
- **Caveat** (handwritten script) for *occasional* personal warmth — a single word, an
  aside, a "baby." Never for paragraphs. This is the FaceTime-call intimacy in visual form.
- Headlines are tight (`-0.03em`), big, and often have one word **highlighted** with a
  color swipe (`.hl`) for emphasis.

### The signature highlighter swipe
The defining visual device: a flat **highlighter mark** behind a key word in a headline
(`.hl`, `.hl-pink`, `.hl-yellow`, `.hl-violet`). Mimics hand-marking the important word.
Use on exactly the word that carries the point — never the whole line.

### Backgrounds
Flat color fields — warm paper or ink. No photographic textures or noise by default.
**Photography of Erin** (dressed-up *and* casual — both are on-brand) is the primary
imagery; use real photos in full-bleed or framed blocks. No stock-y illustration, no
AI gradients. Where a photo will go, use an image slot placeholder.

### Spacing & layout
- 8px rhythm (`--space-*`). Generous whitespace around big type; let headlines breathe.
- Poster-like, editorial compositions. Big type, clear hierarchy, one idea per block.
- Occasional **playful rotation** (±2–4°) on stickers, tags, and badges for energy.

### Corner radii
Soft and friendly, **never sharp**. Pills (`--radius-pill`) for buttons and tags;
generous `--radius-lg/xl` (24–36px) for cards and image frames.

### Borders, cards & shadows
- Cards: white surface, generous rounding, usually a **soft elevation shadow**
  (`--shadow-md`) on light, or a subtle dark surface on ink.
- Signature **"sticker" hard-offset shadow** (`--shadow-hard`, 6px 6px 0, no blur)
  on buttons/badges/featured cards for a bold, tactile, playful feel — often in a
  brand color (`--shadow-hard-pink`).
- Thin hairline borders (`--border`) on light; bold ink borders on sticker elements.

### Hover / press states
- **Buttons (filled):** hover darkens the fill (e.g. pink → `--pink-dark`); press =
  shrink slightly (`scale(0.97)`) and/or the sticker shadow collapses (button "presses
  into" the page — translate down-right by the shadow offset).
- **Cards / links:** hover lifts (raise shadow, translate up 2–3px). Links: underline +
  color shift to `--link`.
- Snappy, confident easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`, ~150–220ms. A little
  bounce/overshoot is welcome; nothing slow or floaty.

### Transparency & blur
Used minimally — a translucent ink scrim over a photo for text legibility, or a
frosted sticky header on scroll. Not a primary motif.

### Animation
Energetic and purposeful: quick fades + small upward slides on entrance, gentle
overshoot on interactive elements. Optional slow marquee of phrases. Never slow,
never floaty, never gratuitous.

---

## ICONOGRAPHY

No icon set was provided with the brand assets, so this system **substitutes
[Lucide](https://lucide.dev)** — clean, rounded, medium-stroke open icons that pair
well with the bold-but-friendly type. **⚠️ This is a substitution; flag for review.**

- **Style:** stroke (outline) icons, ~2px weight, rounded caps/joins. They should feel
  light next to the heavy type, not compete with it.
- **Delivery:** loaded from CDN — `<script src="https://unpkg.com/lucide@latest"></script>`
  then `lucide.createIcons()`. No icon font is bundled.
- **Color:** icons take `currentColor` — usually ink, or a brand color when used as a
  feature glyph inside a colored chip.
- **Emoji as icons:** avoid in UI. Emoji belongs only in casual social copy, if anywhere.
- **Unicode glyphs:** arrows (→) are fine inline in buttons/links as a directional cue.
- If Erin has a real logo or custom icon set, send it and we'll replace Lucide + the
  wordmark in `assets/`.

### Logo / wordmark
No logo file was provided. `assets/` contains **type-based wordmarks** built from the
brand fonts (`wordmark-erinpompa` and `truthspeaks-365`) as a stand-in. These are
honest typographic lockups, not invented logo art — replace with the real mark when available.

---

## INDEX — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — context, content + visual foundations, iconography |
| `colors_and_type.css` | All design tokens: color, type, spacing, radius, shadow + semantic element styles |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code) |
| `assets/` | Wordmark lockups + any brand imagery/placeholders |
| `preview/` | Design-system cards (swatches, type specimens, components) shown in the Design System tab |
| `ui_kits/website/` | Hi-fi UI kit for the marketing / coaching website (index.html + JSX components) |

### UI kits
- **`ui_kits/website/`** — Erin's marketing & coaching website: hero, programs, coaching
  offer, testimonial, booking CTA, nav + footer. Interactive click-through.

> Note: TruthSpeaks 365 (the school-facing program brand) shares this foundation but
> shifts to the school-safe register (no faith language). A dedicated school-facing kit
> can be added next — flagged as a future step.
