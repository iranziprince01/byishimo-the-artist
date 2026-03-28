import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { visionPoints } from '../data/content'
import { HiLanguage, HiGlobeAlt, HiHeart, HiRocketLaunch, HiStar, HiUserGroup } from 'react-icons/hi2'

const icons = [HiLanguage, HiGlobeAlt, HiHeart, HiRocketLaunch, HiStar, HiUserGroup]

export function ArtisticVision() {
  return (
    <SectionWrapper id="vision" background="cream" ariaLabel="Artistic direction and cultural impact">
      <AnimatedReveal className="flex flex-col gap-2 sm:gap-3">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 pb-2 sm:pb-3">
          Artistic Direction & Cultural Impact
        </h2>
      </AnimatedReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {visionPoints.map((point, i) => {
          const Icon = icons[i % icons.length]
          return (
            <AnimatedReveal key={point.title} delay={i * 0.08}>
<Card className="p-4 sm:p-6 h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-700 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {point.title}
                </h3>
                <p className="font-body text-navy-600 pt-2 flex-1 leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </AnimatedReveal>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
