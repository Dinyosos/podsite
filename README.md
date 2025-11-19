# Podsite Project Repository

This repository contains a modern podcast website project built with Next.js.

## 📁 Repository Structure

```
podsite-repo/
├── podsite/              # Main website project (ready for GitHub)
│   ├── app/             # Next.js pages
│   ├── components/      # React components
│   ├── lib/             # Utilities
│   ├── content/         # Mock data
│   ├── public/          # Static assets
│   └── ...              # Configuration files
│
└── specs/               # Project documentation (optional)
    └── 001-podcast-site/
        ├── spec.md      # Feature specification
        ├── plan.md      # Implementation plan
        ├── tasks.md     # Task breakdown
        └── ...          # Other docs
```

## 🚀 Quick Start

### For Development

```bash
cd podsite
npm install
npm run dev
```

Visit http://localhost:3000/podsite/

### For Deployment

```bash
cd podsite
npm run build
```

Deploy the `out/` directory to your hosting service.

## 📦 What to Push to GitHub

### Option 1: Website Only (Recommended)
Push only the `podsite/` directory as your repository root:

```bash
cd podsite
git init
git add .
git commit -m "Initial commit: Podsite podcast website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/podsite.git
git push -u origin main
```

### Option 2: Full Repository with Docs
Push the entire repository including specs:

```bash
# From the root podsite-repo directory
git init
git add .
git commit -m "Initial commit: Podsite project with documentation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/podsite-repo.git
git push -u origin main
```

## 📖 Documentation

- **Main README**: See `podsite/README.md` for detailed project documentation
- **Specifications**: See `specs/001-podcast-site/` for project planning and specs (optional)

## 🎯 Features

- Modern, responsive podcast website
- 20 sample episodes with custom SVG artwork
- Mobile-first design with hamburger menu
- SEO optimized with meta tags and sitemap
- Lighthouse scores 95+ (SEO/Accessibility)
- Static export ready for GitHub Pages

## 📄 License

MIT License - See individual project directories for details.

