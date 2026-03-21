import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { tracks } from '../data/content'
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa'
import { SiAudiomack } from 'react-icons/si'
import { HiMusicalNote } from 'react-icons/hi2'

function StreamingIcon({ platform, className = '' }: { platform: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    Spotify: <FaSpotify className="w-5 h-5" />,
    'Apple Music': <FaApple className="w-5 h-5" />,
    'YouTube Music': <FaYoutube className="w-5 h-5" />,
    Audiomack: <SiAudiomack className="w-5 h-5" />,
  }
  return <span className={`text-navy-600 ${className}`}>{iconMap[platform] ?? <HiMusicalNote className="w-5 h-5" />}</span>
}

export function MusicPortfolio() {
  return (
    <SectionWrapper id="music" background="white" ariaLabel="Music portfolio" attachHeader>
      <AnimatedReveal>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5 sm:mb-6">
          Music Portfolio
        </h2>
        <p className="text-navy-600 font-body text-lg intro-lead">
          Patrick's music combines acoustic folk sensibilities with global influences, featuring lyrical storytelling in four languages. His singles and recordings demonstrate a dedication to emotional depth, melodic clarity, and cross-cultural expression. Explore Patrick's latest releases below and connect on streaming platforms.
        </p>
      </AnimatedReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 items-stretch">
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
              <div className="p-4 sm:p-6 flex flex-col flex-1 min-h-0">
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-3 sm:p-2.5 rounded-xl bg-navy-50/80 text-navy-700 hover:bg-navy-800 hover:text-cream border border-navy-100 hover:border-navy-700 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
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
