# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static corporate website for 浙江省轻纺供销有限公司 (Zhejiang Light Textile Supply & Marketing Co., Ltd.). No build system, bundler, or package manager — all files are plain HTML/CSS/JS served directly from the repo root. Deployed via GitHub Pages from `main` (`https://hveraus.github.io/zjqf/`).

To preview locally, serve the directory over HTTP (e.g. the Browser-pane preview via `.claude/launch.json`, which runs `python3 -m http.server 8765`).

## File Structure

| File | Role |
|------|------|
| `index.html` | Homepage — hero carousel, about section, 3 business-area cards, contact |
| `about.html` | About Us — company intro, culture, history, contact (single scroll) |
| `dongfang.html` | 东方公司 (subsidiary) — banner, stats, intro, facilities, gallery, contact |
| `oils.html` | 油脂油化 detail — 9 product cards |
| `pulp.html` | 纸浆 detail — 2 brand cards (with photos) + 3 category cards |
| `feed.html` | 饲料与其他 detail — 3 product cards |
| `style.css` | Shared styles for ALL pages |
| `main.js` | Shared JS for ALL pages — single merged i18n object, hero carousel, nav, scroll reveal |
| `images/` | All image assets |

There is **one** stylesheet (`style.css`) and **one** script (`main.js`); every page links both. The former `about.css` / `about.js` were merged in and deleted — do not recreate them.

## Architecture

### Bilingual (i18n)
All visible text uses `data-i18n="key"` attributes. `main.js` holds a single top-level `i18n` object mapping keys to `{ cn: "...", en: "..." }`, shared across every page. `setLang(lang)` iterates all `[data-i18n]` elements and sets `innerHTML` from the map (so values may contain HTML like `<br>`, `<strong>`, `<em>`). **When adding text, always add both `cn` and `en` entries and use `data-i18n` — never hardcode visible text in HTML.** Escape literal `&` as `&amp;` in i18n values.

### Page-specific styles
Detail pages (`dongfang`, `oils`, `pulp`, `feed`) keep their layout-specific CSS in an inline `<style>` block in the page `<head>`; shared tokens/components stay in `style.css`.

### Design Tokens
CSS custom properties in `:root` inside `style.css`:
- Brand colors: `--red: #C41230`, `--red-dark: #9B0E25`, `--red-light: #E8183A`
- Neutrals: `--ink`, `--gray`, `--muted`, `--line`, `--bg`, `--white`
- Animation: `--ease: cubic-bezier(.25,.46,.45,.94)`

### Scroll Reveal
Elements with class `rv` start invisible and gain class `in` when entering the viewport via `IntersectionObserver`. Delay variants: `d1`–`d4`.

### Hero Carousel (index.html)
Three `.slide` divs (all facility photos: `df-6.jpg`, `hero.jpg`, `df-1.jpg`); active slide gets class `active`. CSS handles crossfade + scale. `main.js` manages auto-advance (5.5s), arrows, dots, touch swipe. The block is wrapped in `if (heroEl)` so `main.js` runs safely on pages without a hero. Hero text (light theme, dark ink) sits over a feathered light wash (`.hero-content::before`) plus a top scrim (`.hero::before`) for legibility on photos.

### Nav Behaviour
- Every page's nav starts **transparent** and gains class `solid` (white/frosted) after scrolling 40px (handled in `main.js`). No page hardcodes `class="solid"` on load.
- Inner pages (about, dongfang, oils, pulp, feed) open over a light `.page-banner`; the current nav link carries `class="nav-active"` (red highlight).
- Logo stays dark (`filter: none`) — the site is light-themed.

### Business cards → detail pages
The 3 homepage business cards are `<a class="biz-card biz-card-link" href="…">` linking to `oils.html` / `pulp.html` / `feed.html`, each with a `.biz-more` "查看详情" hint and `cursor: pointer`.

## Assets (`images/`)
- `logo-2.png` — company logo (dark; inverted to white only where placed on dark via inline filter, e.g. footer)
- `hero.jpg` — cargo ship, hero slide 2
- `df-1.jpg`…`df-7.jpg` — Dongfang facility photos (hero slides 1 & 3, Dongfang gallery/intro)
- `pulp-1.jpg` (银星/Arauco), `pulp-2.jpg` (虹鱼/Kruger) — pulp brand card photos
- `oiltank.JPG` — oil tank, homepage about section
- `office.png` — office photo, about-page company intro
- `qrcode.jpg` — WeChat official-account QR, homepage contact

## Conventions
- Commit directly to `main`; **only push when the user explicitly asks.** The user may ask to roll back by commit hash.
- Keep CN and EN i18n values in sync when editing copy.
