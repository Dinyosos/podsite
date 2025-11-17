# Implementation Plan: [FEATURE]

**Branch**: `001-podcast-site` | **Date**: 2025-11-12 | **Spec**: ../spec.md
**Input**: Feature specification from `/specs/001-podcast-site/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a sleek, modern podcast website with a landing page featuring one episode, an episodes page listing 20 mocked episodes, an About page, and a FAQ page. Technical approach: Next.js configured for fully static export with data embedded in content files (no databases, no runtime network requests). Site is responsive and mobile-first, with strong SEO and accessibility foundations.

## Technical Context

**Language/Version**: JavaScript/TypeScript (Next.js, static export)  
**Primary Dependencies**: Next.js (static export), CSS (utility or custom), no runtime data libs  
**Storage**: N/A (mock data embedded in content files)  
**Testing**: Lighthouse/axe audits; visual checks at mobile/desktop breakpoints  
**Target Platform**: Static hosting provider (e.g., GitHub Pages, Netlify, Vercel static export)  
**Project Type**: Web (static site)  
**Performance Goals**: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (mobile)  
**Constraints**: Initial HTML ≤ 50KB gzipped; Total JS ≤ 30KB gzipped; Images optimized and lazy-loaded  
**Scale/Scope**: 4 top-level pages; exactly 20 episodes rendered from a single mock dataset

Decisions (previously NEEDS CLARIFICATION):
- Hosting/canonical: Deploy to GitHub Pages as a project site at `https://<username>.github.io/podsite`. Use relative URLs. Next.js config: `output: 'export'`, `trailingSlash: true`, `basePath: '/podsite'`, `images.unoptimized: true`. Provide `404.html` via `app/not-found.tsx`.
- Images: Pre-optimized WebP (optionally AVIF) stored in `public/assets/img/` with JPEG/PNG fallbacks. Include intrinsic width/height; lazy-load non-critical images. Use `<img>` or Next Image with `unoptimized: true`. No runtime optimization.
- Audio: Store mock MP3s locally under `public/assets/audio/`, 64–96 kbps mono, target ≤3MB per file to keep repo size reasonable. Use `<audio controls preload="metadata">`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

From `podsite/.specify/memory/constitution.md`:
- Static-Only Delivery: PASS — Next.js static export, no runtime requests.
- Simplicity Over Tooling: PASS — Single tool producing static output directory.
- Accessibility & Semantics: PASS — Semantic HTML, labeled controls, keyboard nav.
- Lean and Fast: PASS — Targets: HTML ≤ 50KB, JS ≤ 30KB gz, optimized images.
- Portable Hosting: PASS — Output deployable on any static host with `404.html`.

Gate status: PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-site/
├── plan.md              # This file (/speckit.plan output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (JSON Schemas)
└── tasks.md             # Phase 2 output (/speckit.tasks - not created here)
```

### Source Code (repository root)

```text
podsite/                      # Next.js app (static export)
├── app/                      # Routes
│   ├── page.tsx              # Landing (featured episode)
│   ├── episodes/page.tsx     # Episodes listing (20)
│   ├── about/page.tsx        # About
│   └── faq/page.tsx          # FAQ
├── components/               # UI components
├── lib/                      # Helpers (data loading, SEO meta)
├── content/                  # Embedded mock data
│   ├── episodes.json
│   └── siteMeta.json
├── public/
│   ├── assets/img/           # Images (WebP/AVIF + fallbacks)
│   ├── assets/audio/         # Audio files (mock)
│   ├── sitemap.xml
│   ├── robots.txt
│   └── favicon.ico
└── styles/                   # Global and component styles
```

**Structure Decision**: Single Next.js static site in `podsite/` using App Router. All content is embedded under `content/`, public assets under `public/`, and pages under `app/`. No backend or separate projects required.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
