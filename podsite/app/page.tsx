import { getFeaturedEpisode, getSiteMeta } from '@/lib/data'
import { EpisodeCard } from '@/components/EpisodeCard'
import Link from 'next/link'
import type { Metadata } from 'next'

const siteMeta = getSiteMeta()

export const metadata: Metadata = {
  title: 'Home',
  description: 'Listen to our latest featured episode and explore our podcast collection.',
  openGraph: {
    title: `Home | ${siteMeta.siteName}`,
    description: 'Listen to our latest featured episode and explore our podcast collection.',
    url: `${siteMeta.siteUrl}/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Home | ${siteMeta.siteName}`,
    description: 'Listen to our latest featured episode and explore our podcast collection.',
  },
  alternates: {
    canonical: `${siteMeta.siteUrl}/`,
  },
}

export default function Home() {
  const featuredEpisode = getFeaturedEpisode()

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to Podsite
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            We talk about creativity, stories, and the things that make life meaningful. Every episode is a journey of ideas—join us in exploring the joy of creation.
          </p>
        </section>

        {/* Featured Episode Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
            Featured Episode
          </h2>
          {featuredEpisode ? (
            <EpisodeCard episode={featuredEpisode} featured={true} />
          ) : (
            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <p className="text-gray-600">No featured episode available.</p>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link
            href="/episodes/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-lg"
          >
            Browse All Episodes
          </Link>
        </section>
      </div>
    </main>
  )
}

