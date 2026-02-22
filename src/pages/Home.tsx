import { Hero } from '../sections/Hero'
import { DigitalPresence } from '../sections/DigitalPresence'
import { MusicPortfolio } from '../sections/MusicPortfolio'
import { RecentHighlights } from '../sections/RecentHighlights'
import { ArtisticVision } from '../sections/ArtisticVision'
import { MediaPressKit } from '../sections/MediaPressKit'
import { Gallery } from '../sections/Gallery'
import { Testimonials } from '../sections/Testimonials'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Link } from 'react-router-dom'
import { siteMeta } from '../data/content'
import { HiArrowRight } from 'react-icons/hi2'

export function Home() {
  return (
    <>
      <Hero />
      <DigitalPresence />
      <MusicPortfolio />
      <RecentHighlights />
      <ArtisticVision />
      <MediaPressKit />
      <Gallery />
      <Testimonials />
      {/* Partnerships teaser + CTA to Booking */}
      <SectionWrapper background="cta" ariaLabel="Partnerships and booking">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedReveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Partnerships & Booking
            </h2>
            <p className="text-cream/80 font-body text-base sm:text-lg mb-6 break-words">
              {siteMeta.businessName} is open to touring, festivals, labels, and grant partnerships. Incoming partnership areas: church & ministry touring, festival booking, distribution, and funding.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[200px] sm:min-w-0 px-6 py-3 rounded-xl font-semibold text-navy-900 bg-[#ffe600] hover:bg-[#ffec33] transition-colors touch-manipulation"
            >
              Inquire or book
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
