# Podsite - Modern Podcast Website

A sleek, modern podcast website built with Next.js and configured for static export.

## Features

- 🎙️ Landing page with featured episode
- 📚 Episodes page listing 20 mock episodes
- ℹ️ About page
- ❓ FAQ page
- 📱 Fully responsive and mobile-first
- ♿ Accessible (WCAG 2.1 AA)
- 🚀 Optimized for performance
- 🔍 SEO-ready with meta tags and sitemap

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000/podsite](http://localhost:3000/podsite) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Local Preview of Production Build

After building, you can preview the production build locally:

```bash
npx serve out
```

## Configuration

This site is configured for GitHub Pages deployment:

- **basePath**: `/podsite`
- **Static export**: Enabled
- **Images**: Unoptimized for portability
- **404 page**: Automatically generated

### Deploy to GitHub Pages

1. Update `<username>` in `content/siteMeta.json`, `public/robots.txt`, and `public/sitemap.xml` with your GitHub username
2. Push to your repository
3. Enable GitHub Pages in repository settings (deploy from `gh-pages` branch or GitHub Actions)
4. GitHub Actions workflow (recommended) or manual deploy of `out/` directory

## Project Structure

```
podsite/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── lib/                 # Utilities and helpers
├── content/             # Mock data (episodes, site metadata)
├── public/              # Static assets
│   └── assets/
│       ├── img/         # Images (WebP)
│       └── audio/       # Audio files (MP3)
├── styles/              # Additional styles
└── out/                 # Production build output (generated)
```

## Adding Content

### Episodes

Edit `content/episodes.json` to add or modify episodes. Each episode requires:
- `slug`, `title`, `publishDate`, `duration`, `description`
- `coverImage`, `audioUrl`, `tags`
- Set `featured: true` for the landing page episode

### Site Metadata

Edit `content/siteMeta.json` for global site information, social links, and SEO defaults.

### Media Assets

- Place episode cover images in `public/assets/img/` (WebP format, 800x800px recommended)
- Place audio files in `public/assets/audio/` (MP3, 64-96kbps mono, ≤3MB)

See README files in those directories for more details.

## License

MIT

