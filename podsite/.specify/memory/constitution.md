# Podsite Static Web Constitution

## Core Principles

### I. Static-Only Delivery
The site ships as static assets only (HTML, CSS, images; optional minimal JS). All essential content and navigation must render without client-side JavaScript. JS is progressive enhancement, not a requirement to view or navigate core pages.

### II. Simplicity Over Tooling
Prefer zero-build. If tooling is introduced, it must produce a fully static output directory (`public/` or `dist/`) and be replaceable without affecting content or URLs.

### III. Accessibility & Semantics First
Use semantic HTML. Provide text alternatives for media, label interactive elements, and ensure keyboard operability. Meet at least WCAG 2.1 AA color contrast.

### IV. Lean and Fast
Keep payloads small and fast:
- Initial HTML ≤ 50 KB gzipped.
- Total JS ≤ 30 KB gzipped (if any), loaded with `defer`/`async`.
- Optimize images and lazy-load non-critical media.

### V. Portable Hosting
Must run unmodified on any static host (e.g., GitHub Pages, Netlify, S3). Use relative URLs. Provide `404.html`. No server-side logic or headers required.

## Minimum Requirements

- Structure:
  - Root contains `index.html`, optional additional `.html` pages, and `404.html`.
  - Assets live under `assets/` (e.g., `assets/styles.css`, `assets/main.js`, `assets/img/`).
- Head essentials in every page: `<title>`, `<meta name="description">`, responsive viewport, favicon, basic Open Graph tags.
- CSS: single compiled file by default (`assets/styles.css`). No framework required. Mobile-first, responsive layout.
- JS: optional. If present, single file (`assets/main.js`) with progressive enhancement only. No framework required.
- Images: provide intrinsic width/height, modern formats (AVIF/WebP) with fallbacks where reasonable.
- Optional but recommended: `sitemap.xml`, `robots.txt`, and a simple `CNAME` if using a custom domain.

## Development Workflow

- Local: site must be viewable by opening `index.html` directly in a browser; a simple static server (`python -m http.server` or equivalent) is optional.
- Checks before publish: verify layout on mobile and desktop breakpoints; spot-check Lighthouse (Performance/Accessibility/SEO).
- Deploy: main branch deploys a static directory (`public/` or `dist/`) to a static host. Deployment is atomic and reversible.

## Governance

This constitution defines the non-negotiable scope for a static website. Changes require a documented PR that updates this file, explains rationale and impact, and bumps the version below. Reviews must confirm compliance with Core Principles; exceptions must be explicitly documented.

**Version**: 1.0.0 | **Ratified**: 2025-11-12 | **Last Amended**: 2025-11-12
