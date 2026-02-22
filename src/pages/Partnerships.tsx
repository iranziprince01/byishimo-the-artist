import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { partnerships, siteMeta } from '../data/content'
import { HiHandRaised, HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { WhyPartner } from '../sections/WhyPartner'

export function Partnerships() {
  return (
    <>
      <SectionWrapper background="cream" ariaLabel="Partnerships" attachHeader>
      <AnimatedReveal>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Incoming Partnerships
        </h1>
        <p className="text-navy-600 font-body text-lg max-w-2xl mb-2">
          {siteMeta.businessName} is actively pursuing partnerships with churches, festivals, labels, and grant providers to scale international Gospel ministry.
        </p>
        <p className="text-navy-500 font-body text-sm max-w-2xl mb-14">
          If you represent an organization interested in touring, distribution, or funding, we’d like to hear from you.
        </p>
      </AnimatedReveal>

      <div className="grid sm:grid-cols-2 gap-8">
        {partnerships.map((p, i) => (
          <AnimatedReveal key={p.id} delay={i * 0.08}>
            <Card className="p-6 h-full flex flex-col">
              <span className="inline-flex items-center gap-1.5 text-navy-600 font-body text-xs font-medium uppercase tracking-wider mb-2">
                <HiHandRaised className="w-4 h-4" />
                {p.type}
              </span>
              <h2 className="font-display text-xl font-semibold text-navy-900">
                {p.name}
              </h2>
              <p className="font-body text-navy-600 mt-2 flex-1 leading-relaxed">
                {p.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-navy-600 font-body text-sm font-medium">
                Status: Incoming
              </span>
            </Card>
          </AnimatedReveal>
        ))}
      </div>

      <AnimatedReveal className="mt-16 text-center">
        <Link
          to="/booking"
          className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-navy-800 hover:bg-navy-700 transition-colors"
        >
          Contact for partnership inquiries
          <HiArrowRight className="w-5 h-5" />
        </Link>
      </AnimatedReveal>
    </SectionWrapper>
      <WhyPartner />
    </>
  )
}
