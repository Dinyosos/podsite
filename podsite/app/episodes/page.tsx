import { getAllEpisodes, getSiteMeta, getEpisodeCount } from '@/lib/data'
import { EpisodeCard } from '@/components/EpisodeCard'
import type { Metadata } from 'next'

const siteMeta = getSiteMeta()

export const metadata: Metadata = {
  title: 'Episodes',
  description: `Browse all ${getEpisodeCount()} episodes of ${siteMeta.siteName}. Listen to insightful conversations about creativity, storytelling, and innovation.`,
  openGraph: {
    title: `Episodes | ${siteMeta.siteName}`,
    description: `Browse all ${getEpisodeCount()} episodes of ${siteMeta.siteName}.`,
    url: `${siteMeta.siteUrl}/episodes/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Episodes | ${siteMeta.siteName}`,
    description: `Browse all ${getEpisodeCount()} episodes of ${siteMeta.siteName}.`,
  },
  alternates: {
    canonical: `${siteMeta.siteUrl}/episodes/`,
  },
}

export default function EpisodesPage() {
  const episodes = getAllEpisodes()

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            All Episodes
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl">
            {episodes.length} episodes and counting. Listen to our full collection.
          </p>
        </header>

        {/* Episodes List */}
        <div className="space-y-8">
          {episodes.length > 0 ? (
            episodes.map((episode) => (
              <EpisodeCard key={episode.slug} episode={episode} featured={false} />
            ))
          ) : (
            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <p className="text-gray-600">No episodes available yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

