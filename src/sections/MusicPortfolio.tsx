import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { tracks } from '../data/content'
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa'

function StreamingIcon({ platform, className = '' }: { platform: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    Spotify: <FaSpotify className="w-5 h-5" />,
    'Apple Music': <FaApple className="w-5 h-5" />,
    'YouTube Music': <FaYoutube className="w-5 h-5" />,
  }
  return <span className={`text-navy-600 ${className}`}>{iconMap[platform] ?? null}</span>
}

export function MusicPortfolio() {
  return (
    <SectionWrapper id="music" background="white" ariaLabel="Music portfolio">
      <AnimatedReveal>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Music Portfolio
        </h2>
        <p className="text-navy-600 font-body text-lg max-w-2xl">
          Featured singles and worship releases. Available on major streaming platforms.
        </p>
      </AnimatedReveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {tracks.map((track, i) => (
          <AnimatedReveal key={track.id} delay={i * 0.1} className="h-full">
            <Card className="h-full flex flex-col">
              <div className="aspect-video bg-navy-100 relative overflow-hidden flex-shrink-0">
                <iframe
                  title={`${track.title} — YouTube`}
                  src={`https://www.youtube.com/embed/${track.youtubeId}?rel=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 flex flex-col flex-1 min-h-0">
                <p className="text-navy-600 font-body text-sm">{track.releaseDate}</p>
                <h3 className="font-display text-xl font-semibold text-navy-900 mt-1.5">
                  {track.title}
                </h3>
                <p className="font-body text-navy-600 mt-3 text-sm leading-relaxed min-h-[5rem]">
                  {track.description}
                </p>
                <div className="mt-5 min-h-[3rem] flex flex-wrap items-center gap-3" aria-label="Streaming links">
                  {track.streamingLinks && track.streamingLinks.length > 0
                    ? track.streamingLinks.map((link) => (
                        <a
                          key={link.platform}
                          href={link.url}
                          className="group p-2.5 rounded-xl bg-navy-50/80 text-navy-700 hover:bg-navy-800 hover:text-cream border border-navy-100 hover:border-navy-700 transition-colors"
                          aria-label={`Listen on ${link.platform}`}
                        >
                          <StreamingIcon platform={link.platform} className="group-hover:text-cream transition-colors" />
                        </a>
                      ))
                    : null}
                </div>
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
