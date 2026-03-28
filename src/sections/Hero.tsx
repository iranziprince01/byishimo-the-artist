import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { copy, images, siteMeta } from '../data/content'
import { HiPlay, HiCalendar, HiMusicalNote } from 'react-icons/hi2'

const stagger = (i: number) => ({ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] })

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100dvh] w-full max-w-none flex-col justify-start overflow-x-hidden bg-navy-950 md:justify-center"
      aria-label="Introduction"
    >
      {/* Full-bleed photo: img + object-cover fills the section edge-to-edge (CSS bg on wide screens can look inset next to strong side gradients) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-full w-full min-w-full overflow-hidden"
        aria-hidden
      >
        <img
          src={images.hero}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 z-0 block h-full min-h-full w-full min-w-full object-cover object-[center_22%]"
        />
        {/* Uniform 90% navy scrim — keeps headline, copy, CTAs, and portrait card readable */}
        <div className="absolute inset-0 z-[1] bg-navy-950/90" aria-hidden />
      </div>

      {/* Hero content — min-height fills first screen; can grow on small phones so nothing is clipped */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-1 flex-col md:flex-row md:min-h-[100dvh]">
        <div className="relative w-full flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-3 xs:px-4 sm:px-6 lg:px-8 pt-[max(7rem,calc(env(safe-area-inset-top,0px)+5.5rem))] pb-[max(3.5rem,env(safe-area-inset-bottom,0px)+1rem)] md:min-h-[100dvh] md:py-0 md:pb-0 md:justify-center">
        {/* Left: Text + CTAs */}
      <div className="flex flex-col justify-center w-full max-w-2xl min-w-0 order-2 md:order-1 text-center md:text-left items-center md:items-stretch">
        <motion.h1
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger(2)}
          className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#ffe600] tracking-tight leading-[1.08] mb-5 sm:mb-8 md:mb-12 max-md:text-balance"
        >
          <span className="block">{siteMeta.artistName.split(' ')[0]}</span>
          <span className="block">{siteMeta.artistName.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger(3)}
          className="text-sm xs:text-base sm:text-lg text-white/90 font-body font-light max-w-xl mb-8 sm:mb-12 md:mb-14 leading-relaxed max-md:mx-auto"
        >
          <p className="block text-justify hyphens-auto break-words">{copy.heroLead}</p>
          <p className="block mt-4 text-justify hyphens-auto break-words">{copy.heroSupporting}</p>
        </motion.div>

        {/* CTAs: white and light gold on dark hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(4)}
          className="flex flex-wrap gap-2.5 sm:gap-4 w-full min-w-0 justify-center md:justify-start"
        >
          <Link
            to="/music"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] flex-1 min-w-[140px] sm:flex-initial px-4 sm:px-6 py-3 rounded-xl font-semibold text-navy-900 bg-white hover:bg-white/95 shadow-lg border border-white/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiPlay className="w-5 h-5" aria-hidden />
            Listen Now
          </Link>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] flex-1 min-w-[140px] sm:flex-initial px-4 sm:px-6 py-3 rounded-xl font-semibold text-navy-900 bg-[#ffe600] hover:bg-[#ffec33] shadow-lg border border-navy-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiCalendar className="w-5 h-5" aria-hidden />
            Book Patrick
          </Link>
          <Link
            to={{ pathname: '/', hash: 'press' }}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl font-semibold text-white bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiMusicalNote className="w-5 h-5" aria-hidden />
            View Media
          </Link>
        </motion.div>
      </div>

        {/* Right: portrait — headshot (hero bg is separate stock atmosphere image) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:w-[280px] lg:w-[360px] order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
            <img
              src={images.headshot}
              alt="Patrick Byishimo"
              className="w-full max-h-[min(42vh,18rem)] md:max-h-none aspect-[3/5] object-cover object-top"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
