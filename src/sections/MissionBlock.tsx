import { SectionWrapper } from '../ui/SectionWrapper'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { Card } from '../ui/Card'
import { HiHeart, HiGlobeAlt, HiMusicalNote } from 'react-icons/hi2'

const pillars = [
  {
    icon: HiGlobeAlt,
    title: 'Global reach',
    text: 'Taking Gospel music and worship to international audiences with excellence and authenticity.',
    accent: 'from-navy-800 via-navy-700 to-navy-900',
  },
  {
    icon: HiMusicalNote,
    title: 'Excellence in craft',
    text: 'Professional standards in songwriting, production, and live delivery.',
    accent: 'from-gold-700 via-gold-600 to-gold-800',
  },
  {
    icon: HiHeart,
    title: 'Heart for the Church',
    text: 'Serving the body of Christ through music, partnership, and ministry.',
    accent: 'from-navy-700 via-amber-600/90 to-navy-800',
  },
] as const

const iconTileClass =
  'mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-3 text-[#ffe600] shadow-lg ring-4 ring-white/90'

export function MissionBlock() {
  return (
    <SectionWrapper background="white" ariaLabel="Mission and values">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedReveal className="text-center mb-12 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
            Mission & values
          </h2>
        </AnimatedReveal>
        <ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 list-none p-0 m-0"
          role="list"
        >
          {pillars.map(({ icon: Icon, title, text, accent }, i) => (
            <AnimatedReveal key={title}>
              <li className="flex h-full min-h-0 min-w-0">
                <Card
                  hover
                  className="relative h-full border-navy-100/90 bg-gradient-to-b from-cream/95 via-white to-white p-6 sm:p-8 pt-10 shadow-premium ring-1 ring-navy-900/5"
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r ${accent}`}
                    aria-hidden
                  />
                  <div className="flex flex-col items-center text-center">
                    <div className={iconTileClass}>
                      <Icon className="h-7 w-7 shrink-0" aria-hidden />
                    </div>
                    <span className="mb-2 font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-navy-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900 leading-snug">
                      {title}
                    </h3>
                    <p className="font-body text-navy-600 mt-3 text-sm leading-relaxed text-pretty sm:text-[0.9375rem]">
                      {text}
                    </p>
                  </div>
                </Card>
              </li>
            </AnimatedReveal>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
