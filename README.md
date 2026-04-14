# 🪪 Testable Profile Card

A fully accessible, responsive, and semantically rich **Profile Card** built with plain HTML, CSS, and vanilla JavaScript — designed to be automatable via `data-testid` attributes.

---

## 🚀 Live Preview

Open `index.html` directly in your browser — no build step or server required.

---

## ✨ Features

- **Semantic HTML** — `<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`, proper heading hierarchy
- **Accessibility (WCAG AA)** — meaningful `alt` text, `aria-label`, `aria-live`, `aria-labelledby`, skip link, visible focus styles, keyboard navigation
- **Live Epoch Time** — `Date.now()` displayed in milliseconds, refreshed every 500 ms via `setInterval`
- **Responsive Layout** — stacks vertically on mobile; avatar left / content right on wider screens (CSS Flexbox + Grid)
- **Premium Dark Design** — glassmorphism card, animated gradient backgrounds, micro-animations, Inter font
- **Social Links** — open in a new tab with `target="_blank" rel="noopener noreferrer"`

---

## 🗂️ Project Structure

```
profile-card/
├── index.html   # Markup — all data-testid attributes live here
├── style.css    # Premium dark-mode design system
├── script.js    # Live epoch time ticker
└── avatar.jpg   # Profile photo
```

---

## 🧪 data-testid Reference

| Selector | Element | Description |
|---|---|---|
| `test-profile-card` | `<article>` | Root card container |
| `test-user-name` | `<h2>` | Full name |
| `test-user-bio` | `<p>` | Short biography |
| `test-user-time` | `<output>` | Current epoch time in ms (`Date.now()`) |
| `test-user-avatar` | `<img>` | Profile photo with `alt` text |
| `test-user-social-links` | `<ul>` | Social links list container |
| `test-user-social-github` | `<a>` | GitHub link |
| `test-user-social-twitter` | `<a>` | Twitter / X link |
| `test-user-social-linkedin` | `<a>` | LinkedIn link |
| `test-user-social-devto` | `<a>` | DEV.to link |
| `test-user-hobbies` | `<ul>` | Hobbies list |
| `test-user-dislikes` | `<ul>` | Dislikes list |

---

## ♿ Accessibility Checklist

- [x] Skip-to-content link
- [x] Meaningful `alt` text on avatar image
- [x] `aria-live="polite"` on epoch time output
- [x] All interactive elements keyboard-focusable with visible focus rings
- [x] Color contrast meets WCAG AA (text on dark background ≥ 4.5:1)
- [x] Sections labelled via `aria-labelledby`
- [x] Social links have descriptive `aria-label` (including "opens in new tab")

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 480px` | Single column, hobbies/dislikes stacked |
| `480px – 639px` | Hobbies/dislikes side by side |
| `≥ 640px` | Avatar left · content right (full two-column) |

---

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, Flexbox, Grid, `@media` queries, `backdrop-filter`
- **Vanilla JS (ES5 IIFE)** — zero dependencies
- **Google Fonts** — Inter (400 / 500 / 600 / 700 / 800)

---

## 🔗 Author

**Baruwa Abdul-azeez Mayowa**

[![GitHub](https://img.shields.io/badge/GitHub-MAYOR--001--star-181717?logo=github)](https://github.com/MAYOR-001-star)
[![Twitter](https://img.shields.io/badge/Twitter-@AbdulazeezMay10-1d9bf0?logo=twitter)](https://twitter.com/AbdulazeezMay10)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0a66c2?logo=linkedin)](https://www.linkedin.com/in/abdul-azeez-baruwa-505551316)
