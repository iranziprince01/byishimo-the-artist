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
    <SectionWrapper id="highlights" background="gradient" ariaLabel="Recent highlights">
      <AnimatedReveal>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Recent Highlights
        </h2>
        <p className="text-navy-600 font-body text-lg max-w-2xl">
          Live performances, worship conferences, church engagements, and community events.
        </p>
      </AnimatedReveal>

      <div className="mt-12 relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-navy-200 -translate-x-px hidden sm:block" aria-hidden />
        <ul className="space-y-8 sm:space-y-12">
          {highlights.map((item, i) => {
            const config = typeConfig[item.type] ?? typeConfig.community
            return (
              <AnimatedReveal key={item.id} delay={i * 0.08}>
                <li className="relative sm:flex sm:gap-8 sm:items-start">
                  <div className="hidden sm:flex sm:w-1/2 sm:justify-end sm:pr-12">
                    <div className="text-right">
                      <p className="text-navy-600 font-body font-medium">{item.date}</p>
                      {item.location && (
                        <p className="text-navy-600 text-sm mt-0.5">{item.location}</p>
                      )}
                    </div>
                  </div>
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-navy-700 text-cream items-center justify-center -translate-y-1">
                    {config.icon}
                  </div>
                  <div className="sm:w-1/2 sm:pl-12 pl-12 sm:pl-12 relative">
                    <div className="sm:hidden absolute left-0 top-1 w-8 h-8 rounded-full bg-navy-700 text-cream flex items-center justify-center">
                      {config.icon}
                    </div>
                    <Card hover className="p-6">
                      <p className="sm:hidden text-navy-600 font-body text-sm mb-1">{item.date}</p>
                      {item.location && <p className="sm:hidden text-navy-500 text-sm mb-2">{item.location}</p>}
                      <h3 className="font-display text-xl font-semibold text-navy-900">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="font-body text-navy-600 mt-2 text-sm">
                          {item.description}
                        </p>
                      )}
                      <span className="inline-block mt-2 text-xs font-medium text-navy-500 uppercase tracking-wider">
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
