/**
 * Prepend basePath to asset URLs for GitHub Pages deployment
 * In development: /podsite/assets/...
 * In production (GitHub Pages): /podsite/assets/...
 */
export function assetUrl(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/podsite' : '/podsite'
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  return `${basePath}/${cleanPath}`
}

