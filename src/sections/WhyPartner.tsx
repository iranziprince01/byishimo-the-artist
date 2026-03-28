import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { copy, siteMeta } from '../data/content'
import { HiCheckCircle } from 'react-icons/hi2'

const points = [
  'Registered business entity with clear contracting and invoicing',
  'Grant- and festival-ready documentation; international touring scope',
  'Defined outcomes for touring, distribution, and ministry partnerships',
  'Technical rider and stage requirements issued with confirmed bookings',
]

export function WhyPartner() {
  return (
    <SectionWrapper background="white" ariaLabel="Why partner with us">
      <div className="max-w-2xl mx-auto max-md:text-center md:text-left">
        <AnimatedReveal>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-5 max-md:text-balance">
            Why partner with {siteMeta.businessName}
          </h2>
          <p className="text-navy-600 font-body text-sm mb-10 intro-lead">{copy.whyPartnerIntro}</p>
          <ul className="space-y-3 text-left max-md:mx-auto max-md:max-w-md">
            {points.map((point) => (
              <li key={point} className="flex gap-3 font-body text-navy-700 text-sm max-md:justify-start">
                <HiCheckCircle className="w-5 h-5 text-navy-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
