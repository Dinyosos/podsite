# Quickstart: Sleek Podcast Website

This guide helps you preview, build, and deploy the static podcast site described in the spec.

## Prerequisites
- Node.js LTS
- A static hosting provider account (e.g., GitHub Pages, Netlify, or Vercel static export)

## Run locally
1. Install dependencies.
2. Start the local dev server and open the site in a browser.
3. Verify pages: Home (featured), Episodes (20), About, FAQ.
4. Verify accessibility basics with keyboard-only navigation and check color contrast.

## Build static output
1. Export a static build (output directory contains only static assets).
2. Ensure `sitemap.xml`, `robots.txt`, and `404.html` exist in the output.
3. Confirm images are optimized and non-critical images are lazy-loaded.

## Deploy
1. Upload the static output directory to your hosting provider.
2. Set the site’s canonical URL (update in metadata).
3. Validate SEO and performance budgets with Lighthouse (mobile SEO ≥ 95; LCP ≤ 2.5s; CLS ≤ 0.1).

## Data updates (mocked)
- Edit `content/episodes.json` to update episodes (must contain exactly 20).
- Edit `content/siteMeta.json` to adjust titles, descriptions, and social links.


