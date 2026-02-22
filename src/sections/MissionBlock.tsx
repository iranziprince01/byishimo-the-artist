import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { siteMeta } from '../data/content'
import { HiHeart, HiGlobeAlt, HiMusicalNote } from 'react-icons/hi2'

const pillars = [
  { icon: HiGlobeAlt, title: 'Global reach', text: 'Taking Gospel music and worship to international audiences with excellence and authenticity.' },
  { icon: HiMusicalNote, title: 'Excellence in craft', text: 'Professional standards in songwriting, production, and live delivery.' },
  { icon: HiHeart, title: 'Heart for the Church', text: 'Serving the body of Christ through music, partnership, and ministry.' },
]

export function MissionBlock() {
  return (
    <SectionWrapper background="white" ariaLabel="Mission and values">
      <div className="max-w-3xl mx-auto">
        <AnimatedReveal className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            Mission & values
          </h2>
          <p className="text-navy-600 font-body text-lg leading-relaxed">
            {siteMeta.mission}
          </p>
        </AnimatedReveal>
        <ul className="grid sm:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, text }) => (
            <AnimatedReveal key={title}>
              <li className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-100 text-navy-700 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-navy-900">{title}</h3>
                <p className="font-body text-navy-600 text-sm mt-2 leading-relaxed">{text}</p>
              </li>
            </AnimatedReveal>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
