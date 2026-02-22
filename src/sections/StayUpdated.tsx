import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { siteMeta } from '../data/content'
import { HiEnvelope, HiBellAlert } from 'react-icons/hi2'

interface StayUpdatedProps {
  variant?: 'default' | 'concerts'
}

export function StayUpdated({ variant = 'default' }: StayUpdatedProps) {
  const isConcerts = variant === 'concerts'
  return (
    <SectionWrapper background="cream" ariaLabel="Stay updated">
      <div className="max-w-xl mx-auto text-center">
        <AnimatedReveal>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-100 text-navy-700 mb-4">
            {isConcerts ? <HiBellAlert className="w-6 h-6" /> : <HiEnvelope className="w-6 h-6" />}
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
            {isConcerts ? 'Get notified when tickets go live' : 'Stay updated'}
          </h2>
          <p className="text-navy-600 font-body text-sm leading-relaxed mb-6">
            {isConcerts
              ? `Be the first to know when ${siteMeta.artistName} concert tickets and new dates are available.`
              : `New music, tour dates, and updates from ${siteMeta.businessName}. Join our list to stay in the loop.`}
          </p>
          <p className="text-navy-500 font-body text-xs leading-relaxed">
            <strong className="text-navy-700">Mailing list coming soon.</strong> Our sign-up and notification system is in development. For now, follow us on social media or reach out at{' '}
            <a href={`mailto:${siteMeta.email}`} className="text-navy-700 font-medium hover:underline">
              {siteMeta.email}
            </a>
            {' '}to be kept in the loop.
          </p>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
