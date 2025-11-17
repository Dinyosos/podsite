# Data Model: Sleek Podcast Website

**Feature**: ../spec.md  
**Date**: 2025-11-12

## Entities

### Episode
- Purpose: A single podcast episode displayed as featured (home) and in the episodes list.
- Fields:
  - `title` (string, 5–120 chars)
  - `slug` (string, lowercase, hyphenated)
  - `publishDate` (string, ISO date `YYYY-MM-DD`)
  - `duration` (string, pattern `^([0-9]{1,2}:)?[0-5][0-9]:[0-5][0-9]$`)
  - `description` (string, 50–500 chars recommended)
  - `coverImage` (string, path under `/assets/img/`, WebP/AVIF preferred)
  - `audioUrl` (string, path under `/assets/audio/episode-*.mp3`)
  - `tags` (array of string, optional, 0–5 items)
- Validation:
  - `slug` unique across all episodes
  - Exactly 20 total episodes present in dataset

### SiteMeta
- Purpose: Global metadata for SEO and sharing.
- Fields:
  - `siteName` (string)
  - `siteUrl` (string, absolute URL used for canonical links)
  - `description` (string, 70–160 chars for meta description)
  - `socialLinks` (array of `{ name: string, url: string }`)
  - `ogImage` (string, path under `/assets/img/` sized ≥1200×630)

## Relationships
- An Episode may be selected as the featured episode on the landing page.
- Episodes appear in reverse chronological order on the episodes page.

## Derived/Presentation Rules
- Landing page displays a single featured episode above the fold.
- Each episode card shows title, date, duration, short description, cover image, and native play controls.
- SEO per page: unique title/description; canonical URL; OG/Twitter tags.


