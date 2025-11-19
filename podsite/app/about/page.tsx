import { getSiteMeta } from '@/lib/data'
import type { Metadata } from 'next'

const siteMeta = getSiteMeta()

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Podsite, our mission, and the team behind the podcast.',
  openGraph: {
    title: `About | ${siteMeta.siteName}`,
    description: 'Learn more about Podsite, our mission, and the team behind the podcast.',
    url: `${siteMeta.siteUrl}/about/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${siteMeta.siteName}`,
    description: 'Learn more about Podsite, our mission, and the team behind the podcast.',
  },
  alternates: {
    canonical: `${siteMeta.siteUrl}/about/`,
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About Podsite
          </h1>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <section className="mb-8 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="mb-4 text-gray-700">
              At Podsite, we believe in the power of storytelling to inspire, educate, and connect people. 
              Our mission is to create a space where creativity meets curiosity, where complex ideas become 
              accessible conversations, and where every episode sparks new ways of thinking.
            </p>
            <p className="text-gray-700">
              We explore the intersection of creativity, technology, and human experience through in-depth 
              conversations with makers, thinkers, and innovators who are shaping our world. Whether you&apos;re 
              a creator seeking inspiration, a professional looking for fresh perspectives, or simply someone 
              who loves great stories, Podsite is your companion on the journey of discovery.
            </p>
          </section>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">What We Cover</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span><strong>Creativity & Design:</strong> Exploring how creative thinking shapes the world around us</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span><strong>Storytelling & Communication:</strong> The art and science of compelling narratives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span><strong>Innovation & Technology:</strong> How new tools and ideas transform our lives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span><strong>Personal Growth:</strong> Strategies for learning, productivity, and well-being</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span><strong>Community & Collaboration:</strong> Building meaningful connections in a digital age</span>
              </li>
            </ul>
          </section>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">The Team</h2>
            <p className="mb-4 text-gray-700">
              Podsite is crafted by a passionate team of creators, researchers, and storytellers who are 
              dedicated to producing high-quality content that resonates with curious minds. We bring diverse 
              backgrounds in journalism, design, technology, and the arts to every episode.
            </p>
            <p className="text-gray-700">
              Our approach is rooted in authenticity, depth, and respect for our guests and audience. 
              We believe that the best conversations happen when people feel heard, valued, and inspired 
              to share their unique perspectives.
            </p>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Get Involved</h2>
            <p className="mb-4 text-gray-700">
              We love hearing from our listeners! Whether you have feedback, guest suggestions, or just 
              want to say hello, we&apos;re always open to connecting with our community.
            </p>
            <div className="flex flex-wrap gap-4">
              {siteMeta.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}

