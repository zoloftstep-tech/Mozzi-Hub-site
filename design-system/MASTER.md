# Design System Master — Mozzi Hub

> Page overrides: `design-system/pages/[page].md` win over this file.
> Auto-generated draft also lives in `design-system/mozzi-hub/MASTER.md` — **this file is the project SoT**.

**Project:** Mozzi Hub  
**Updated:** 2026-10-09  
**Category:** Production hub / print & 3D studio (B2B + small runs)

---

## Direction

Workshop-modern: tactile production energy, oversized brand presence, product photography first.  
Not a coworking pitch, not SaaS, not editorial broadsheet.

**Pattern:** Hero → Services → Business → Works gallery → FAQ → Contact/Footer  
**Style:** Exaggerated minimalism + industrial clarity  
**CTA:** WhatsApp primary, Instagram secondary

### Avoid
- Purple / indigo AI gradients
- Cream `#F4F1EA` + terracotta + display serif broadsheet
- Dark-mode-only pages
- Pill clusters, stat strips, floating badges on hero media
- Cards in the hero
- Emoji as icons

---

## Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Ink | `#12141A` | `--color-ink` |
| Ink soft | `#2A2F3A` | `--color-ink-soft` |
| Accent (filament) | `#E85D04` | `--color-accent` |
| Accent hover | `#C44E03` | `--color-accent-hover` |
| Surface | `#F3F4F6` | `--color-surface` |
| Surface alt | `#E5E7EB` | `--color-surface-alt` |
| Text | `#12141A` | `--color-text` |
| Muted | `#5C6370` | `--color-muted` |
| On-accent | `#FFFFFF` | `--color-on-accent` |
| Hero wash | `#1A1D26` → `#2E3544` | gradient on hero plane |

---

## Typography

- **Display / headings:** Outfit (weights 500–800)
- **Body:** Work Sans (300–600)
- **Mood:** geometric, modern, workshop, product

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap');
```

Hero brand: clamp ~2.8rem–6rem, tracking tight, weight 800.  
Body: 1rem / 1.6, max measure ~38rem for prose.

---

## Motion (ship 2–3)

1. Hero brand + line fade/slide up on load (~600ms, ease-out).
2. Accent CTA hover: slight lift + background deepen (150–250ms).
3. Works grid: staggered fade-in on scroll (`prefers-reduced-motion` → instant).

---

## Layout notes

- Hero: full-bleed visual plane; brand is the loudest signal.
- Sections: one headline + one short support line.
- Services: simple stacked or 2-col list — not a card dashboard.
- Footer: legal + contacts, calm density.
