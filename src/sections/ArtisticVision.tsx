import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { visionPoints } from '../data/content'
import { HiLanguage, HiGlobeAlt, HiHeart, HiRocketLaunch, HiStar, HiUserGroup } from 'react-icons/hi2'

const icons = [HiLanguage, HiGlobeAlt, HiHeart, HiRocketLaunch, HiStar, HiUserGroup]

export function ArtisticVision() {
  return (
    <SectionWrapper id="vision" background="cream" ariaLabel="Artistic direction and cultural impact">
      <AnimatedReveal>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Artistic Direction & Cultural Impact
        </h2>
        <p className="text-navy-600 font-body text-lg max-w-2xl">
          A clear vision for multilingual worship, cultural bridge-building, and international reach with professional standards.
        </p>
      </AnimatedReveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visionPoints.map((point, i) => {
          const Icon = icons[i % icons.length]
          return (
            <AnimatedReveal key={point.title} delay={i * 0.08}>
              <Card className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {point.title}
                </h3>
                <p className="font-body text-navy-600 mt-2 flex-1 leading-relaxed">
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
