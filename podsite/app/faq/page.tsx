import { getSiteMeta } from '@/lib/data'
import type { Metadata } from 'next'

const siteMeta = getSiteMeta()

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Podsite, our episodes, and how to get involved.',
  openGraph: {
    title: `FAQ | ${siteMeta.siteName}`,
    description: 'Frequently asked questions about Podsite, our episodes, and how to get involved.',
    url: `${siteMeta.siteUrl}/faq/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `FAQ | ${siteMeta.siteName}`,
    description: 'Frequently asked questions about Podsite, our episodes, and how to get involved.',
  },
  alternates: {
    canonical: `${siteMeta.siteUrl}/faq/`,
  },
}

const faqs = [
  {
    question: 'How often do you release new episodes?',
    answer: 'We release new episodes weekly, every Friday. Subscribe to stay updated with our latest conversations and never miss an episode.',
  },
  {
    question: 'Where can I listen to Podsite?',
    answer: 'You can listen directly on our website, or find us on all major podcast platforms including Apple Podcasts, Spotify, Google Podcasts, and more. Choose the platform that works best for you!',
  },
  {
    question: 'How can I suggest a guest or topic?',
    answer: 'We love hearing ideas from our community! Reach out to us via any of our social media channels with your suggestions. While we can\'t guarantee we\'ll feature every suggestion, we read and consider them all.',
  },
  {
    question: 'Are transcripts available for episodes?',
    answer: 'Yes! We provide full transcripts for all episodes to ensure our content is accessible to everyone. Transcripts are typically available within 48 hours of each episode release.',
  },
  {
    question: 'Can I sponsor an episode or advertise on Podsite?',
    answer: 'We work with select sponsors who align with our values and audience interests. If you\'re interested in sponsorship opportunities, please contact us with details about your organization and objectives.',
  },
  {
    question: 'How long are your episodes?',
    answer: 'Episode length varies depending on the conversation, but most episodes run between 25-45 minutes. We prioritize quality and depth over strict time limits, ensuring each conversation reaches its natural conclusion.',
  },
  {
    question: 'Do you take listener questions?',
    answer: 'Absolutely! We periodically feature listener questions in our episodes. Submit your questions through our social media channels, and they might be answered in an upcoming episode.',
  },
  {
    question: 'Can I share or use clips from episodes?',
    answer: 'Yes, we encourage sharing! You\'re welcome to share clips for non-commercial purposes with proper attribution. For commercial use or extended excerpts, please contact us for permission.',
  },
  {
    question: 'How can I support Podsite?',
    answer: 'The best way to support us is by listening, sharing episodes with friends, leaving reviews on your favorite podcast platform, and engaging with us on social media. Your support helps us grow and continue creating quality content.',
  },
  {
    question: 'Are older episodes still available?',
    answer: 'Yes! Our entire archive remains available for listening. Browse our episodes page to explore our complete collection from the very first episode to the latest.',
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Podsite
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="rounded-lg bg-white p-6 shadow-md sm:p-8"
            >
              <h2 className="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="mt-12 rounded-lg bg-blue-50 p-6 text-center sm:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Still have questions?
          </h2>
          <p className="mb-6 text-gray-700">
            Can't find what you're looking for? We're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {siteMeta.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us on {link.platform}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

