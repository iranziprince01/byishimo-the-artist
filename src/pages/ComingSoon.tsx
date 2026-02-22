import { useLocation, Link } from 'react-router-dom'
import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { HiSparkles } from 'react-icons/hi2'
import { ConnectCTA } from '../sections/ConnectCTA'

const pageTitles: Record<string, string> = {
  branding: 'Branding & Assets',
  merch: 'Merch & Apparel',
}

export function ComingSoon() {
  const path = useLocation().pathname.replace(/^\//, '')
  const title = pageTitles[path] || 'Coming Soon'

  return (
    <>
      <SectionWrapper background="gradient" ariaLabel="Coming soon" attachHeader>
        <div className="max-w-md mx-auto text-center flex flex-col gap-8">
          <AnimatedReveal className="flex flex-col gap-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-100 text-navy-700">
              <HiSparkles className="w-8 h-8" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900">
              {title}
            </h1>
            <p className="text-navy-600 font-body text-lg">
              This section is in development. Branding guidelines, merch (including T-shirts), and other artist resources will be available here soon.
            </p>
            <p className="text-navy-500 font-body text-sm">
              For branding or merch inquiries in the meantime, reach out via the contact section below or the booking page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-navy-900 bg-[#ffe600] hover:bg-[#ffec33] transition-colors"
              >
                Contact & booking
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-navy-800 hover:bg-navy-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
      <ConnectCTA />
    </>
  )
}
