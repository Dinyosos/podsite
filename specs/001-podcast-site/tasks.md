# Tasks: Sleek Podcast Website

## Phase 1 — Setup

- [x] T001 Initialize Next.js app structure in podsite/ per plan.md
- [x] T002 Add Next config for static export (output: 'export', basePath '/podsite', trailingSlash, images.unoptimized) in podsite/next.config.js
- [x] T003 Create base app layout and globals (app/layout.tsx, styles/globals.css) in podsite/app/layout.tsx
- [x] T004 Create public folders for assets (img, audio) and placeholders in podsite/public/assets/
- [x] T005 Add SEO utility for titles/descriptions/canonical/meta in podsite/lib/seo.ts
- [x] T006 Create content directory and seed site metadata file in podsite/content/siteMeta.json
- [x] T007 Create episodes dataset (exactly 20 items) in podsite/content/episodes.json
- [x] T008 Add sitemap.xml and robots.txt placeholders aligned to basePath in podsite/public/sitemap.xml
- [x] T009 Add custom 404 (App Router not-found) for static hosts in podsite/app/not-found.tsx

## Phase 2 — Foundational

- [x] T010 Implement shared Header and Footer navigation (Home/Episodes/About/FAQ) in podsite/components/SiteNav.tsx
- [x] T011 Implement simple card and media components (EpisodeCard, AudioPlayer) in podsite/components/EpisodeCard.tsx
- [x] T012 Implement data loader helpers to read JSON content in podsite/lib/data.ts
- [x] T013 Wire up default metadata using siteMeta.json in app/layout.tsx in podsite/app/layout.tsx
- [x] T014 Add base responsive styles and variables (mobile-first) in podsite/app/globals.css
- [x] T015 Add Open Graph/Twitter meta helper and test on one page in podsite/lib/seo.ts

## Phase 3 — User Story 1 (P1): Featured episode on landing

- [x] T016 [US1] Implement landing page section with featured episode above the fold in podsite/app/page.tsx
- [x] T017 [P] [US1] Add featured selection logic (first/newest item) and render fields in podsite/lib/data.ts
- [x] T018 [US1] Integrate native audio controls with preload='metadata' in podsite/app/page.tsx
- [x] T019 [US1] Add page-level SEO: unique title/description/canonical/OG tags in podsite/app/page.tsx
- [x] T020 [US1] Verify keyboard operability and alt text on images in podsite/app/page.tsx

## Phase 4 — User Story 2 (P2): Episodes list with inline play

- [x] T021 [US2] Implement episodes index route and list (20 items, newest first) in podsite/app/episodes/page.tsx
- [x] T022 [P] [US2] Render EpisodeCard with inline <audio> controls per item in podsite/components/EpisodeCard.tsx
- [x] T023 [US2] Ensure mobile layout (stacked cards, tappable controls) in podsite/app/episodes/page.tsx
- [x] T024 [US2] Add page-level SEO (unique title/description/canonical/OG) in podsite/app/episodes/page.tsx

## Phase 5 — User Story 3 (P3): About and FAQ pages

- [x] T025 [US3] Implement About page (~200+ words, scannable headings) in podsite/app/about/page.tsx
- [x] T026 [US3] Implement FAQ page (≥8 Q&A items with headings) in podsite/app/faq/page.tsx
- [x] T027 [P] [US3] Add page-level SEO for About and FAQ pages in podsite/app/about/page.tsx
- [x] T028 [P] [US3] Add page-level SEO for FAQ page in podsite/app/faq/page.tsx

## Phase 6 — Polish & Cross-Cutting

- [x] T029 Add favicon and basic theming color meta in podsite/public/favicon.ico
- [x] T030 Finalize sitemap.xml and robots.txt contents in podsite/public/sitemap.xml
- [x] T031 Lighthouse mobile audits (Perf/Accessibility/SEO) and remediate in podsite/
- [x] T032 Validate Core Web Vitals targets (LCP/CLS/INP) and image sizes in podsite/public/assets/img/
- [x] T033 Check accessibility (labels, contrast, focus, headings) and fix in podsite/
- [x] T034 Implement responsive hamburger menu for mobile navigation in podsite/components/SiteNav.tsx

## Dependencies

- User story order: US1 → US2 → US3
- Foundational must complete before any user story tasks (Phase 2 → Phases 3–5)
- Setup must complete before Foundational (Phase 1 → Phase 2)

## Parallel Opportunities

- T017 and T018 can proceed in parallel once T016 scaffold exists.
- T022 (card/inline audio) can proceed in parallel with T021 list route.
- T027 and T028 can proceed in parallel with their content pages.
- Design polish tasks (T029–T033) can run in parallel after feature pages exist.

## Implementation Strategy

- Deliver MVP after Phase 3 (US1) to validate the landing experience and playback.
- Phase 4 (US2) expands content discovery; Phase 5 (US3) adds credibility and self-service answers.
- Keep assets optimized and budgets enforced to maintain portability and speed.


