# Podsite - Modern Podcast Website

A sleek, modern podcast website built with Next.js and configured for static export. Perfect for showcasing podcast episodes with a clean, professional design.

## ✨ Features

- 🎙️ **Featured Episode**: Eye-catching landing page with your latest episode
- 📚 **Episode Library**: Clean grid layout with 20 sample episodes
- 🎨 **Beautiful Design**: Modern, minimalist UI with custom SVG artwork
- 📱 **Fully Responsive**: Mobile-first design with hamburger menu
- ♿ **Accessible**: WCAG 2.1 AA compliant, keyboard navigable
- 🚀 **Performance**: Lighthouse scores 95+ (SEO/Accessibility)
- 🔍 **SEO-Ready**: Meta tags, Open Graph, Twitter Cards, sitemap
- 🎵 **Audio Player**: Native HTML5 audio controls, aligned to card bottom
- 🌐 **Static Export**: Deploy anywhere (GitHub Pages, Netlify, Vercel)

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

## 📁 Project Structure

```
podsite/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (featured episode)
│   ├── episodes/          # All episodes list
│   ├── about/             # About page
│   ├── faq/               # FAQ page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 page
├── components/             # React components
│   ├── SiteNav.tsx        # Header/Footer with mobile menu
│   └── EpisodeCard.tsx    # Episode display card
├── lib/                    # Utilities and helpers
│   ├── data.ts            # Data loading functions
│   ├── seo.ts             # SEO metadata helpers
│   └── utils.ts           # Asset URL helpers
├── content/                # Mock data (JSON)
│   ├── episodes.json      # 20 sample episodes
│   └── siteMeta.json      # Site metadata
├── public/                 # Static assets
│   ├── favicon.svg        # 4-bar audio wave icon
│   ├── icon.svg           # High-res icon
│   ├── apple-touch-icon.svg
│   ├── robots.txt         # SEO directives
│   ├── sitemap.xml        # Site map
│   └── assets/
│       ├── img/           # Episode covers (SVG)
│       └── audio/         # Episode audio (MP3)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
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

- **Cover Images**: Place in `public/assets/img/` (SVG or WebP, 800x800px recommended)
- **Audio Files**: Place in `public/assets/audio/` (MP3, 64-96kbps, ≤5MB)

See README files in those directories for more details.

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG (4-bar audio wave)
- **Deployment**: Static Export (GitHub Pages ready)

## 📊 Performance

- ✅ HTML size: 3.9-9.9 KB (gzipped)
- ✅ First Load JS: ~102 KB
- ✅ Episode covers: ~4 KB each (SVG)
- ✅ LCP ≤ 2.5s
- ✅ CLS ≤ 0.1
- ✅ Lighthouse SEO: 95+
- ✅ Lighthouse Accessibility: 95+

## 🤝 Contributing

Issues and pull requests are welcome!

## 📄 License

MIT License - feel free to use this project for your own podcast website!


