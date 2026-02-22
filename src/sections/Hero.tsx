import { motion } from 'framer-motion'
import { siteMeta, images } from '../data/content'
import { HiPlay, HiCalendar, HiMusicalNote } from 'react-icons/hi2'

const stagger = (i: number) => ({ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] })

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[100dvh] flex justify-center bg-navy-950 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background picture - full viewport, with dark overlay */}
      <div className="absolute inset-0 z-0 min-h-full">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('${images.hero}')`,
            backgroundPosition: 'center 22%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/96 via-navy-950/94 to-navy-950/98" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/85 to-navy-950/95" aria-hidden />
      </div>

      {/* Hero content area - normal site width (same as Container) */}
      <div className="relative w-full max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row">
        {/* Content + Right image */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 px-3 xs:px-4 sm:px-6 lg:px-8 py-24 md:py-0 min-h-screen">
        {/* Left: Text + CTAs */}
      <div className="flex flex-col justify-center w-full max-w-2xl order-2 md:order-1">
        <motion.p
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger(1)}
          className="text-[#ffe600] font-body text-xs sm:text-sm uppercase tracking-[0.2em] mb-5"
        >
          Gospel Artist · Worship Leader · Songwriter
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger(2)}
          className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] mb-8"
        >
          <span className="block">{siteMeta.artistName.split(' ')[0]}</span>
          <span className="block">{siteMeta.artistName.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger(3)}
          className="text-base sm:text-lg text-white/90 font-body font-light max-w-xl mb-10 sm:mb-14 leading-relaxed"
        >
          {siteMeta.heroSummary}
        </motion.p>

        {/* CTAs: white and light gold on dark hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(4)}
          className="flex flex-wrap gap-3 sm:gap-4"
        >
          <a
            href="#music"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-navy-900 bg-white hover:bg-white/95 shadow-lg border border-white/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiPlay className="w-5 h-5" aria-hidden />
            Listen Now
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-navy-900 bg-[#ffe600] hover:bg-[#ffec33] shadow-lg border border-navy-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiCalendar className="w-5 h-5" aria-hidden />
            Book Patrick
          </a>
          <a
            href="#press"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiMusicalNote className="w-5 h-5" aria-hidden />
            View Media
          </a>
        </motion.div>
      </div>

        {/* Right: 03 image - taller aspect to show full picture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] md:w-[280px] lg:w-[360px] order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
            <img
              src={images.hero}
              alt="Patrick Byishimo"
              className="w-full aspect-[3/5] object-cover object-top"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
