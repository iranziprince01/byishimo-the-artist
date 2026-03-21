import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteMeta, images } from '../data/content'
import { HiPlay, HiCalendar, HiMusicalNote } from 'react-icons/hi2'

const stagger = (i: number) => ({ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] })

export function Hero() {
  // Two paragraphs so the line length stays attractive on small screens.
  // Per grant-writer guidance: remove the name from paragraph 1 and start with a capital "A".
  const heroPara1 =
    'A multilingual folk and world music artist, award-winning songwriter, and energetic performer based in Edmonton, Canada.'
  const heroPara2 =
    "Originally from the Democratic Republic of Congo, Patrick's musical journey began in East Africa and continued in Canada, where he has developed a distinctive voice rooted in storytelling, cultural experience, and acoustic expression."

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-start md:justify-center bg-navy-950 overflow-x-hidden"
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
          <p className="block text-justify hyphens-auto break-words">{heroPara1}</p>
          {heroPara2 && (
            <p className="block mt-4 text-justify hyphens-auto break-words">
              {heroPara2}
            </p>
          )}
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
            to="/press"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl font-semibold text-white bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiMusicalNote className="w-5 h-5" aria-hidden />
            View Media
          </Link>
        </motion.div>
      </div>

        {/* Right: 03 image - taller aspect to show full picture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:w-[280px] lg:w-[360px] order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
            <img
              src={images.hero}
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
