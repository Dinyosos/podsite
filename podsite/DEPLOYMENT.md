# Deployment Guide

This guide covers how to deploy your Podsite to GitHub Pages and other platforms.

## 🚀 GitHub Pages Deployment

### Prerequisites

1. A GitHub account
2. A repository created on GitHub
3. Your local project ready to push

### Method 1: Manual Deployment (Simple)

#### Step 1: Update Site URLs

Before deploying, update these files with your GitHub username:

**1. `content/siteMeta.json`:**
```json
{
  "siteUrl": "https://YOUR_USERNAME.github.io/podsite"
}
```

**2. `public/robots.txt`:**
```
Sitemap: https://YOUR_USERNAME.github.io/podsite/sitemap.xml
```

**3. `public/sitemap.xml`:**
Replace `<username>` with your GitHub username in all URLs.

#### Step 2: Build the Site

```bash
npm run build
```

This creates an `out/` directory with your static site.

#### Step 3: Deploy to GitHub Pages

**Option A: Using gh-pages package (Recommended)**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
# Add this to "scripts" section:
# "deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

**Option B: Manual push to gh-pages branch**

```bash
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/YOUR_USERNAME/podsite.git
git push -f origin gh-pages
```

#### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages** branch
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/podsite/`

### Method 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

Then:
1. Push to your repository
2. Go to Settings → Pages
3. Under "Source", select **GitHub Actions**
4. Push to main branch to trigger deployment

---

## 🌐 Other Deployment Options

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Update `next.config.js`: Remove or adjust `basePath`

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Note: For Vercel, you may want to remove `output: 'export'` from `next.config.js` to use Vercel's full Next.js features.

### Custom Server

After building:

```bash
npm run build
```

Upload the `out/` directory to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any web server (nginx, Apache, etc.)

---

## ⚙️ Configuration for Different Deployments

### Root Domain Deployment

If deploying to root (e.g., `yoursite.com` instead of `yoursite.com/podsite`):

**`next.config.js`:**
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // basePath: '/podsite',  // Remove or comment this line
  images: {
    unoptimized: true,
  },
}
```

**`lib/utils.ts`:**
```ts
export function assetUrl(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '' : ''  // Empty string
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
```

---

## 🔍 Troubleshooting

### Images not loading
- Check that `basePath` in `next.config.js` matches your deployment URL
- Verify `assetUrl()` is used for all image/audio sources

### 404 errors on page refresh
- Ensure `trailingSlash: true` in `next.config.js`
- Check that your hosting properly serves `index.html` files

### GitHub Pages shows 404
- Verify gh-pages branch is selected in Settings → Pages
- Check that `.nojekyll` file exists in `out/` directory
- Wait 5-10 minutes after first deployment

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json .next out
npm install
npm run build
```

---

## 📝 Post-Deployment Checklist

- [ ] Site loads at deployed URL
- [ ] All pages are accessible (Home, Episodes, About, FAQ)
- [ ] Images display correctly
- [ ] Audio players work
- [ ] Mobile menu functions properly
- [ ] Run Lighthouse audit (aim for 95+ scores)
- [ ] Check `robots.txt` is accessible
- [ ] Verify `sitemap.xml` is accessible
- [ ] Test on mobile devices

---

## 🎉 Success!

Your podcast website is now live! Share your URL:
`https://YOUR_USERNAME.github.io/podsite/`

For updates, simply rebuild and redeploy:
```bash
npm run build
npm run deploy  # or push to trigger GitHub Actions
```

