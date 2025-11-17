# Research & Decisions: Sleek Podcast Website

**Feature**: ../spec.md  
**Date**: 2025-11-12  
**Scope**: Resolve NEEDS CLARIFICATION and document decisions, rationale, and alternatives.

## Decision 1: Hosting target and canonical URLs

- Decision: Use GitHub Pages (project site). Canonical base URL: `https://<username>.github.io/podsite` (replace `<username>` when known). Use relative URLs to maintain portability.
- Rationale: Constitution requires portable hosting; GitHub Pages serves static exports and is easy to preview/share.
- Alternatives considered:
  - Vercel static export: also valid; equivalent portability.
  - Self-hosted Nginx: higher ops burden for no added value.

## Decision 2: Image strategy for static export

- Decision: Store optimized WebP (with optional AVIF) in `public/assets/img/`; provide width/height attributes; lazy-load non-critical images. Avoid runtime optimization.
- Rationale: Constitution requires lean payloads and portability. Pre-optimized assets remove dependency on server/edge image processing.
- Alternatives considered:
  - On-the-fly image optimization: conflicts with static-only constraint.
  - Unoptimized large JPEG/PNG: risks violating performance budgets.

## Decision 3: Audio asset location

- Decision: Store mock MP3 files locally under `public/assets/audio/` with realistic sizes; audio plays via native controls.
- Rationale: Ensures offline-friendly static hosting and no external dependency.
- Alternatives considered:
  - Remote CDN audio: adds dependency/latency; unnecessary for mocked content.
  - Streaming service embeds: implementation-heavy, unnecessary for MVP.

## Constitution Re-evaluation (post decisions)

- Static-Only Delivery: PASS
- Simplicity Over Tooling: PASS
- Accessibility & Semantics: PASS
- Lean and Fast: PASS (pre-optimized images; minimal JS)
- Portable Hosting: PASS (static assets only; sitemap/robots included)


