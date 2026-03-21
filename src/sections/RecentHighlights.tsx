import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { highlights } from '../data/content'
import { HiMusicalNote, HiUserGroup, HiGlobeAlt, HiBuildingOffice2, HiCalendar, HiSparkles } from 'react-icons/hi2'

const typeConfig: Record<string, { icon: React.ReactNode; label: string }> = {
  performance: { icon: <HiMusicalNote className="w-5 h-5" />, label: 'Live performance' },
  conference: { icon: <HiUserGroup className="w-5 h-5" />, label: 'Conference' },
  church: { icon: <HiBuildingOffice2 className="w-5 h-5" />, label: 'Church' },
  online: { icon: <HiGlobeAlt className="w-5 h-5" />, label: 'Online' },
  festival: { icon: <HiSparkles className="w-5 h-5" />, label: 'Festival' },
  community: { icon: <HiCalendar className="w-5 h-5" />, label: 'Community' },
}

export function RecentHighlights() {
  return (
    <SectionWrapper id="highlights" background="gradient" ariaLabel="Recent highlights" attachHeader>
      <AnimatedReveal className="flex flex-col gap-2 sm:gap-3">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-2 sm:pb-3">
          Recent Highlights
        </h2>
        <p className="text-navy-600 font-body text-lg intro-lead">
          Patrick Byishimo performs regularly in a range of settings, including community events, festivals, and cultural showcases. His live performances showcase his versatility as a performer and his talent for connecting with audiences through engaging storytelling and spirited musical delivery.
        </p>
        <p className="text-navy-600 font-body text-sm max-w-2xl mt-1 text-justify hyphens-auto break-words max-md:mx-auto md:mx-0">
          To inquire about bookings, please use the contact form.
        </p>
      </AnimatedReveal>

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-navy-200 -translate-x-px hidden sm:block" aria-hidden />
        <ul className="flex flex-col gap-10 sm:gap-12 md:gap-16">
          {highlights.map((item, i) => {
            const config = typeConfig[item.type] ?? typeConfig.community
            return (
              <AnimatedReveal key={item.id} delay={i * 0.08}>
                <li className="relative sm:flex sm:gap-8 sm:items-start max-md:flex max-md:flex-col max-md:items-center">
                  <div className="hidden sm:flex sm:w-1/2 sm:justify-end sm:pr-12">
                    <div className="text-right">
                      <p className="text-navy-600 font-body font-medium">{item.date}</p>
                      {item.location && (
                        <p className="text-navy-600 text-sm pt-0.5">{item.location}</p>
                      )}
                    </div>
                  </div>
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy-700 text-cream items-center justify-center -translate-y-1">
                    {config.icon}
                  </div>
                  <div className="sm:w-1/2 sm:pl-12 max-md:pl-0 w-full min-w-0 max-md:max-w-lg relative flex max-md:flex-col max-md:items-center">
                    <div className="flex sm:hidden justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-navy-700 text-cream flex items-center justify-center shadow-md ring-4 ring-navy-100/80 z-10">
                        {config.icon}
                      </div>
                    </div>
                    <Card hover className="p-4 sm:p-6 min-w-0 w-full">
                      <p className="sm:hidden text-navy-600 font-body text-sm pb-1">{item.date}</p>
                      {item.location && <p className="sm:hidden text-navy-500 text-sm pb-2">{item.location}</p>}
                      <h3 className="font-display text-xl font-semibold text-navy-900">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="font-body text-navy-600 pt-2 text-sm">
                          {item.description}
                        </p>
                      )}
                      <span className="inline-block pt-2 text-xs font-medium text-navy-500 uppercase tracking-wider">
                        {config.label}
                      </span>
                    </Card>
                  </div>
                </li>
              </AnimatedReveal>
            )
          })}
        </ul>
      </div>
    </SectionWrapper>
  )
}
