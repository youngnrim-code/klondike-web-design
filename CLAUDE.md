# KLONDIKE INC — Project Guide

Marketing website for **KLONDIKE INC** (legal entity, CEO Helen Kim / 김혜림, Co-Founder Young Park / 박영광, Reg. 642-86-02107, Gangnam Seoul, support@klondike.co.kr), the **official distributor of Beaver Store Lab (㈜비버웍스)**. The site sells the Beaver smart-store lineup (kiosks, POS, table/QR ordering, KDS, payments, IoT access, robots) under the Beaver product names, co-branded "KLONDIKE × Beaver Store Lab."

Brand tagline: **Earnest Payment**.

## Tech
- Static **HTML/CSS/vanilla JS**, no build step. Served by **GitHub Pages** from repo root.
- Shared header/footer/nav injected by `assets/js/main.js`. Design tokens + components in `assets/css/styles.css`.
- **All paths must stay relative** (`assets/...`, `page.html`) — the site may run under a subpath.
- Custom domain `klondike.co.kr` via `CNAME`. Deploy workflow strips `.git/.github/.claude` from the published artifact.

## Brand system (navy)
- **Navy** brand mark `#161a47` (real logo at `assets/img/logo-mark*.png`, full lockup `assets/img/klondike-logo.svg`). White mark on dark surfaces.
- Accent **royal blue** `--gold: #3a57d6` / `--gold-2: #5d78f0` / `--gold-deep: #222c73` (token names kept for compatibility; values are blue).
- Deep navy ink backgrounds `--ink-900: #0b1026`. Light paper `#f4f5fa`.
- Type: **Sora** (display) + **Inter** (body). Keep navy + royal-blue; do not reintroduce gold.

## Design direction (apply to every change)
Make design, copy, fonts, imagery, and add-ons **trendy, global, audience-targeted, inclusive/raceless, and purchase-friendly**:
- **Trendy & global:** modern, clean, conversion-oriented layouts; international visual language, not locale-specific clichés.
- **Inclusive / raceless:** imagery and language avoid race/ethnic targeting; broadly relatable; products and use-cases over people where possible.
- **Purchase-friendly:** clear value props, scannable benefits, obvious CTAs, friction-free paths to "request a quote / consultation," social proof, transparent pricing framing.
- **Typography & hierarchy:** strong hierarchy, generous spacing, readable line lengths, accessible contrast (WCAG AA+).
- Use the installed design skills for UI/UX, typography, color, and creative decisions (see below).

## Content compliance (Amazon-style content rules)
All published text, claims, pricing, reviews, and creatives must follow Amazon-grade content standards:
- **Truthful & substantiated:** no unverifiable or exaggerated claims; no fabricated statistics, uptime figures, or store counts.
- **No fake social proof:** never invent testimonials, named customers, or reviews. Real references must be accurate and authorized (brand names are sourced from the official Beaver deck; framed as "brands running on the Beaver platform").
- **Accurate pricing:** show customer-facing sale prices only (VAT noted); never publish wholesale/distributor cost or commission figures.
- **Legal identity:** footer always carries KLONDIKE's own corporate details — never present another company's registration as KLONDIKE's.
- **No prohibited/offensive content;** accessible, honest, non-deceptive CTAs and forms.

## Installed design skills (use them)
Under `.claude/skills/` (from `nextlevelbuilder/ui-ux-pro-max-skill`):
`ui-ux-pro-max` (styles, palettes, font pairings, UX guidelines), `design`, `design-system`, `brand`, `ui-styling`, `banner-design`, `slides`.
Invoke the relevant skill when planning, building, reviewing, or improving UI/UX, typography, color, banners, or brand assets.

## Catalog facts
Real product photos in `assets/img/products/`. Prices are Beaver customer sale prices (VAT excl.), most with 36-month installment. 1-year free A/S, nationwide installation, 365-day support. Beaver product names (BeaverKiosk, BeaverPay, OrderQueen, etc.) are the manufacturer's trademarks.
