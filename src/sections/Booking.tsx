import { useState } from 'react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Button } from '../ui/Button'
import { siteMeta } from '../data/content'
import { HiTicket, HiShoppingBag, HiCalendar, HiCreditCard, HiEnvelope, HiSparkles } from 'react-icons/hi2'

const eventTypes = [
  'Church service / Worship night',
  'Conference / Retreat',
  'Concert / Festival',
  'Community event',
  'Online / Live stream',
  'Other',
]

const budgetRanges = [
  'Please discuss',
  'Honorarium',
  'Standard rate',
  'Premium / Full production',
]

export function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
    <SectionWrapper id="booking" background="white" ariaLabel="Booking and contact" attachHeader>
      <div className="max-w-2xl mx-auto">
        <AnimatedReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Book Patrick
          </h2>
          <p className="text-navy-600 font-body text-lg mb-12">
            For worship leading, concerts, conferences, and events. {siteMeta.businessName} — {siteMeta.businessType}. Fill out the form below or email directly.
          </p>
        </AnimatedReveal>

        {submitted ? (
          <AnimatedReveal>
            <div className="p-8 rounded-2xl bg-cream border border-navy-200 text-center">
              <p className="font-body text-navy-700 text-lg">
                Thank you. Your inquiry has been received. We&apos;ll be in touch soon.
              </p>
              <p className="mt-2 text-navy-600 text-sm">
                For urgent requests, email{' '}
                <a href={`mailto:${siteMeta.email}`} className="text-navy-700 font-medium hover:underline">
                  {siteMeta.email}
                </a>
                {' or call '}
                <a href={`tel:${siteMeta.phone.replace(/\s|\(|\)|-/g, '')}`} className="text-navy-700 font-medium hover:underline">
                  {siteMeta.phone}
                </a>
              </p>
            </div>
          </AnimatedReveal>
        ) : (
          <AnimatedReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="event-type" className="block font-body font-medium text-navy-800 mb-2">
                  Event type
                </label>
                <select
                  id="event-type"
                  name="eventType"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent font-body text-navy-800"
                >
                  <option value="">Select...</option>
                  {eventTypes.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block font-body font-medium text-navy-800 mb-2">
                    Preferred date(s)
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    placeholder="e.g. March 2025"
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent font-body"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block font-body font-medium text-navy-800 mb-2">
                    Location / Venue
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, venue name"
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent font-body"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="budget" className="block font-body font-medium text-navy-800 mb-2">
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent font-body text-navy-800"
                >
                  <option value="">Select...</option>
                  {budgetRanges.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block font-body font-medium text-navy-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your event, audience, and any special requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent font-body resize-y"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as="button" type="submit" variant="primary">
                  Send inquiry
                </Button>
                <p className="text-navy-600 text-sm sm:self-center">
                  Or email{' '}
                  <a href={`mailto:${siteMeta.email}`} className="text-navy-700 font-medium hover:underline">
                    {siteMeta.email}
                  </a>
                  {' or call '}
                  <a href={`tel:${siteMeta.phone.replace(/\s|\(|\)|-/g, '')}`} className="text-navy-700 font-medium hover:underline">
                    {siteMeta.phone}
                  </a>
                  .
                </p>
              </div>
            </form>
          </AnimatedReveal>
        )}
      </div>
    </SectionWrapper>

      {/* Ticketing section */}
      <SectionWrapper id="ticketing" background="cream" ariaLabel="Event ticketing">
        <div className="max-w-3xl mx-auto">
          <AnimatedReveal className="flex flex-col gap-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-100 text-navy-700">
              <HiTicket className="w-7 h-7" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
              Event Ticketing
            </h2>
            <p className="text-navy-600 font-body text-lg">
              Official tickets for {siteMeta.artistName} concerts, worship nights, and special events. Reserve your seat, receive confirmation by email, and stay updated on upcoming dates and venues.
            </p>
          </AnimatedReveal>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-navy-700 font-body text-sm">
            {[
              { icon: HiCalendar, label: 'Upcoming events & dates' },
              { icon: HiCreditCard, label: 'Secure ticket purchase' },
              { icon: HiEnvelope, label: 'E-tickets & confirmation' },
              { icon: HiSparkles, label: 'Venue & schedule updates' },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-navy-600 shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <AnimatedReveal className="mt-10 p-5 rounded-xl bg-white border border-navy-100">
            <p className="text-navy-600 font-body text-sm leading-relaxed">
              <strong className="text-navy-800">Ticketing platform in development.</strong> Our full online ticketing system is currently being built. In the meantime, you can reserve your spot or request tickets for upcoming events using the booking form above or by contacting us directly. We will notify our audience when ticket sales go live.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* Merching section */}
      <SectionWrapper id="merch" background="white" ariaLabel="Official merchandise">
        <div className="max-w-3xl mx-auto">
          <AnimatedReveal className="flex flex-col gap-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-100 text-navy-700">
              <HiShoppingBag className="w-7 h-7" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
              Official Merchandise
            </h2>
            <p className="text-navy-600 font-body text-lg">
              Wear the sound — official apparel and merchandise from {siteMeta.businessName}. Quality pieces for you, your ministry, and your community.
            </p>
          </AnimatedReveal>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-navy-700 font-body text-sm">
            {[
              { label: 'Artist T-shirts & apparel' },
              { label: 'Limited runs & exclusives' },
              { label: 'Secure checkout' },
              { label: 'Shipping (where available)' },
            ].map(({ label }) => (
              <li key={label} className="flex items-center gap-3">
                <HiSparkles className="w-5 h-5 text-navy-600 shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <AnimatedReveal className="mt-10 p-5 rounded-xl bg-cream border border-navy-100">
            <p className="text-navy-600 font-body text-sm leading-relaxed">
              <strong className="text-navy-800">Online store coming soon.</strong> Our merch platform is in development. If you are interested in pre-orders, wholesale, or being notified at launch, please use the booking form above or reach out to us directly. We will announce the store opening via our mailing list and social channels.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
