interface EpisodeCardProps {
  episode: {
    slug: string
    title: string
    publishDate: string
    duration: string
    description: string
    coverImage: string
    audioUrl: string
    tags: string[]
  }
  featured?: boolean
}

export function EpisodeCard({ episode, featured = false }: EpisodeCardProps) {
  const formattedDate = new Date(episode.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const cardClass = featured
    ? 'bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-500'
    : 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'

  return (
    <article className={cardClass}>
      <div className={featured ? 'md:flex' : ''}>
        {/* Episode Cover */}
        <div className={featured ? 'md:w-1/3 md:flex-shrink-0' : ''}>
          <img
            src={episode.coverImage}
            alt={`Cover art for ${episode.title}`}
            width={800}
            height={800}
            className={featured ? 'h-64 w-full object-cover md:h-full' : 'h-48 w-full object-cover'}
            loading={featured ? 'eager' : 'lazy'}
          />
        </div>

        {/* Episode Content */}
        <div className={featured ? 'p-6 md:w-2/3 md:p-8' : 'p-4 sm:p-6'}>
          {featured && (
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              Featured Episode
            </span>
          )}

          <h2 className={featured ? 'mb-3 text-2xl font-bold text-gray-900 sm:text-3xl' : 'mb-2 text-xl font-bold text-gray-900'}>
            {episode.title}
          </h2>

          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <time dateTime={episode.publishDate}>{formattedDate}</time>
            <span className="text-gray-400">•</span>
            <span>{episode.duration}</span>
          </div>

          <p className={featured ? 'mb-4 text-gray-700 sm:text-lg' : 'mb-4 text-sm text-gray-700 sm:text-base'}>
            {episode.description}
          </p>

          {/* Tags */}
          {episode.tags && episode.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Audio Player */}
          <audio
            controls
            preload="metadata"
            className="w-full"
            aria-label={`Audio player for ${episode.title}`}
          >
            <source src={episode.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </article>
  )
}

