import { useState } from 'react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Button } from '../ui/Button'
import { siteMeta } from '../data/content'

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
    <SectionWrapper id="booking" background="white" ariaLabel="Booking and contact">
      <div className="max-w-2xl mx-auto">
        <AnimatedReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Book Patrick
          </h2>
          <p className="text-navy-600 font-body text-lg mb-10">
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
  )
}
