import siteMeta from '@/content/siteMeta.json'

export interface PageSEO {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
  author?: string
}

/**
 * Generate metadata for a page with SEO best practices
 */
export function generateMetadata(page: PageSEO) {
  const fullTitle = page.title.includes(siteMeta.siteName)
    ? page.title
    : `${page.title} | ${siteMeta.siteName}`

  const canonicalUrl = page.canonical || siteMeta.siteUrl

  return {
    title: fullTitle,
    description: page.description,
    keywords: page.keywords || siteMeta.keywords,
    authors: [{ name: page.author || siteMeta.author }],
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonicalUrl,
      siteName: siteMeta.siteName,
      images: [
        {
          url: page.ogImage || siteMeta.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: siteMeta.language,
      type: page.ogType || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: page.description,
      images: [page.ogImage || siteMeta.ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

/**
 * Generate structured data (JSON-LD) for a webpage
 */
export function generateWebPageStructuredData(page: PageSEO) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.canonical || siteMeta.siteUrl,
    publisher: {
      '@type': 'Organization',
      name: siteMeta.siteName,
      url: siteMeta.siteUrl,
    },
  }
}

/**
 * Generate structured data for a podcast episode
 */
export function generatePodcastEpisodeStructuredData(episode: {
  title: string
  description: string
  publishDate: string
  duration: string
  audioUrl: string
  coverImage: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: episode.title,
    description: episode.description,
    datePublished: episode.publishDate,
    duration: episode.duration,
    associatedMedia: {
      '@type': 'MediaObject',
      contentUrl: episode.audioUrl,
    },
    image: episode.coverImage,
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: siteMeta.siteName,
      url: siteMeta.siteUrl,
    },
  }
}

