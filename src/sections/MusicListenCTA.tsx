import { Link } from 'react-router-dom'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { siteMeta } from '../data/content'
import { HiCalendar } from 'react-icons/hi2'

export function MusicListenCTA() {
  return (
    <SectionWrapper background="gradient" ariaLabel="Listen and book">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedReveal>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
            Listen everywhere
          </h2>
          <p className="text-navy-600 font-body text-sm mb-6">
            {siteMeta.artistName} music is available on Spotify, Apple Music, YouTube Music, and Audiomack. Follow and save to get new releases first.
          </p>
          <h3 className="font-display font-semibold text-navy-900 mb-3">
            Book for live events
          </h3>
          <p className="text-navy-600 font-body text-sm mb-6">
            Worship nights, concerts, conferences, and special events — inquire for dates and availability.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl font-semibold text-white bg-navy-800 hover:bg-navy-700 transition-colors"
          >
            <HiCalendar className="w-5 h-5" />
            Booking & inquiries
          </Link>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
