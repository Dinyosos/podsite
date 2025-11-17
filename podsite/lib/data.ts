import episodes from '@/content/episodes.json'
import siteMeta from '@/content/siteMeta.json'

export interface Episode {
  slug: string
  title: string
  publishDate: string
  duration: string
  description: string
  coverImage: string
  audioUrl: string
  tags: string[]
  featured?: boolean
}

export interface SiteMeta {
  siteName: string
  siteUrl: string
  description: string
  socialLinks: Array<{
    platform: string
    url: string
  }>
  ogImage: string
  favicon: string
  author: string
  keywords: string[]
  language: string
}

/**
 * Get all episodes, sorted by publish date (newest first)
 */
export function getAllEpisodes(): Episode[] {
  return [...episodes].sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  })
}

/**
 * Get the featured episode (marked with featured: true, or fallback to newest)
 */
export function getFeaturedEpisode(): Episode | null {
  const featuredEpisode = episodes.find((ep) => ep.featured === true)
  if (featuredEpisode) {
    return featuredEpisode
  }

  // Fallback: return the newest episode
  const sortedEpisodes = getAllEpisodes()
  return sortedEpisodes.length > 0 ? sortedEpisodes[0] : null
}

/**
 * Get a single episode by slug
 */
export function getEpisodeBySlug(slug: string): Episode | null {
  return episodes.find((ep) => ep.slug === slug) || null
}

/**
 * Get site metadata
 */
export function getSiteMeta(): SiteMeta {
  return siteMeta
}

/**
 * Get total episode count
 */
export function getEpisodeCount(): number {
  return episodes.length
}

