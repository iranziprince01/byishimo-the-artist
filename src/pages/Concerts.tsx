import { Link } from 'react-router-dom'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { HiTicket, HiCalendar, HiMapPin } from 'react-icons/hi2'
import { siteMeta } from '../data/content'
import { StayUpdated } from '../sections/StayUpdated'
import { ConnectCTA } from '../sections/ConnectCTA'

export function Concerts() {
  return (
    <>
      <SectionWrapper background="white" ariaLabel="Concerts and ticketing" attachHeader>
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-10">
          <AnimatedReveal className="flex flex-col gap-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-100 text-navy-700">
              <HiTicket className="w-8 h-8" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">
              Concerts & Ticketing
            </h1>
            <p className="text-navy-600 font-body text-lg">
              Official concert dates and ticket sales for {siteMeta.artistName} will be available here.
              We are building a dedicated ticketing experience—check back soon or get in touch for advance inquiries.
            </p>
            <p className="text-navy-500 font-body text-sm">
              Backend ticketing integration is planned. For now, use the booking page for event inquiries and reserved seating requests.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-navy-800 hover:bg-navy-700 transition-colors shadow-md"
            >
              <HiCalendar className="w-5 h-5" />
              Inquire About Events
            </Link>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper background="cream" ariaLabel="Upcoming and past events">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedReveal>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-100 text-navy-700 mb-4">
              <HiMapPin className="w-6 h-6" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900 mb-2">
              Upcoming & past events
            </h2>
            <p className="text-navy-600 font-body text-sm">
              A full events calendar with dates, venues, and ticket links will appear here once our ticketing system is live. For now, check highlights on the Experience page or contact us for upcoming dates.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      <StayUpdated variant="concerts" />
      <ConnectCTA />
    </>
  )
}
