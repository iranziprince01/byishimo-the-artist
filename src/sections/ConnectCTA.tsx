import { Link } from 'react-router-dom'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { siteMeta } from '../data/content'
import { HiEnvelope, HiPhone, HiCalendar } from 'react-icons/hi2'

export function ConnectCTA() {
  return (
    <SectionWrapper background="gradient" ariaLabel="Connect and contact">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedReveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
            Connect with us
          </h2>
          <p className="text-navy-600 font-body text-lg mb-8">
            For booking, partnerships, media, or general inquiries — we would like to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-navy-700 font-body text-sm">
            <a
              href={`mailto:${siteMeta.email}`}
              className="inline-flex items-center gap-2 hover:text-navy-900 transition-colors"
            >
              <HiEnvelope className="w-5 h-5" />
              {siteMeta.email}
            </a>
            <a
              href={`tel:${siteMeta.phone.replace(/\s|\(|\)|-/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-navy-900 transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              {siteMeta.phone}
            </a>
          </div>
          <Link
            to="/booking"
            className="mt-8 inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-navy-900 bg-[#ffe600] hover:bg-[#ffec33] transition-colors"
          >
            <HiCalendar className="w-5 h-5" />
            Book or inquire
          </Link>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  )
}
