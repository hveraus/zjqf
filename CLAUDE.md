# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static corporate website for 浙江省轻纺供销有限公司 (Zhejiang Light Textile Supply & Marketing Co., Ltd.). No build system, bundler, or package manager — all files are plain HTML/CSS/JS served directly from the `/Users/Ken/zjqf/` directory.

## File Structure

| File | Role |
|------|------|
| `index.html` | Homepage — hero carousel, about, business areas, contact |
| `about.html` | About Us page — company intro, culture, history, contact (single scroll) |
| `style.css` | Shared styles for all pages |
| `about.css` | About-page-specific styles |
| `main.js` | Homepage JS — i18n translations, hero carousel, scroll reveal |
| `about.js` | About-page JS — i18n translations, scroll reveal |

## Architecture

### Bilingual (i18n)
All visible text uses `data-i18n="key"` attributes. Each page's JS file contains a top-level `i18n` object mapping keys to `{ cn: "...", en: "..." }`. The `setLang(lang)` function iterates all `[data-i18n]` elements and sets `innerHTML` from the translation map. **When adding new text, always add both `cn` and `en` entries to the i18n object and use `data-i18n` on the element — never hardcode text directly in HTML.**

### Design Tokens
Defined as CSS custom properties in `:root` inside `style.css`:
- Brand colors: `--red: #C41230`, `--red-dark: #9B0E25`, `--red-light: #E8183A`
- Neutrals: `--ink`, `--gray`, `--muted`, `--line`, `--bg`, `--white`
- Animation: `--ease: cubic-bezier(.25,.46,.45,.94)`

### Scroll Reveal
Elements with class `rv` start invisible (`opacity:0; transform:translateY(36px)`) and gain class `in` when entering the viewport via `IntersectionObserver`. Delay variants: `d1`–`d4`.

### Hero Carousel (index.html)
Three `.slide` divs; active slide gets class `active`. CSS handles the crossfade + scale transition. JS in `main.js` manages auto-advance (5.5s), arrow buttons, dot indicators, and touch swipe.

### Nav Behaviour
- **Homepage**: nav starts transparent (over dark hero), gains class `solid` (white/frosted) after scrolling 40px.
- **About page**: nav always has class `solid` applied from the start.
- Logo filter: `brightness(0) invert(1)` when transparent, `none` when solid.

## Assets
- `logo-2.png` — company logo (dark on transparent bg; CSS inverts to white on dark nav)
- `hero2.jpg` — cargo ship photo used as slide 2 background
- `oiltank.JPG` — oil tank photo used in the about section on the homepage
- `aboutzjqf.png` — office photo used in the company intro section on the about page
