import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, images } from '../data/content'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const [isOnHero, setIsOnHero] = useState(true)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.85 : 800
      setIsOnHero(scrollY < heroHeight)

      const viewportMiddle = scrollY + window.innerHeight * 0.35
      let current = 'hero'
      navLinks.forEach((link) => {
        const id = link.href.slice(1)
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY
          if (top <= viewportMiddle) current = id
        }
      })
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isOnHero
          ? 'bg-white shadow-md border-b border-navy-100/80'
          : 'bg-white/70 backdrop-blur-xl shadow-card'
      }`}
    >
      <Container as="nav" className="flex items-center justify-between h-16 sm:h-20">
        <a
          href="#hero"
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          aria-label="Patrick Byishimo — Home"
        >
          <img
            src={images.logo}
            alt="Patrick Byishimo"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href === '#booking' ? (
                <a
                  href={link.href}
                  className="inline-flex items-center justify-center min-h-[40px] px-5 py-2.5 rounded-xl font-body text-sm font-semibold bg-navy-800 text-cream hover:bg-navy-700 transition-colors shadow-md border border-navy-700"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-navy-900 font-semibold'
                      : 'text-navy-700 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-navy-900"
          onClick={() => setMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t border-navy-100/80 ${isOnHero ? 'bg-white' : 'bg-white/70 backdrop-blur-xl'}`}
          >
            <ul className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href === '#booking' ? (
                    <a
                      href={link.href}
                      className="inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-xl font-body text-sm font-semibold bg-navy-800 text-cream hover:bg-navy-700 transition-colors mt-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className={`block py-2 font-medium ${
                        activeSection === link.href.slice(1)
                          ? 'text-navy-900 font-semibold'
                          : 'text-navy-800'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
