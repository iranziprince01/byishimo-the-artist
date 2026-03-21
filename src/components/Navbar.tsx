import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, images } from '../data/content'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isMobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isOnHome = location.pathname === '/'

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        isOnHome
          ? 'bg-white shadow-md border-b border-navy-100/80'
          : 'bg-white/70 backdrop-blur-xl shadow-card'
      }`}
    >
      <Container as="nav" className="flex items-center justify-between min-h-16 h-16 sm:min-h-20 sm:h-20">
        <Link
          to="/"
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          aria-label="Patrick Byishimo — Home"
        >
          <img
            src={images.logo}
            alt="Patrick Byishimo"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.label === 'Booking' ? (
                <NavLink
                  to={link.href}
                  className={({ isActive: active }) =>
                    `inline-flex items-center justify-center min-h-[40px] px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-colors shadow-md border ${
                      active
                        ? 'bg-navy-800 text-cream border-navy-700'
                        : 'bg-navy-800 text-cream hover:bg-navy-700 border-navy-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <NavLink
                  to={link.href}
                  className={({ isActive: active }) =>
                    `font-body text-sm font-medium transition-colors ${
                      active ? 'text-navy-900 font-semibold' : 'text-navy-700 hover:text-navy-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
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
            className={`md:hidden border-t border-navy-100/80 max-h-[min(70dvh,calc(100dvh-5rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px)))] overflow-y-auto overscroll-contain bg-gradient-to-b from-navy-50/35 via-white to-white ${isOnHome ? '' : 'supports-[backdrop-filter]:bg-white/75 backdrop-blur-xl'}`}
          >
            <div className="mx-auto w-full max-w-sm px-4 flex flex-col items-center pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-2">
              <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-navy-400 mb-3">
                Menu
              </p>
              <ul className="w-full flex flex-col items-stretch gap-1 sm:gap-2 py-2">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full flex justify-center">
                  {link.label === 'Booking' ? (
                    <Link
                      to={link.href}
                      className="w-full max-w-xs inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-xl font-body text-sm font-semibold bg-navy-800 text-cream hover:bg-navy-700 transition-colors shadow-md border border-navy-700/30"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      to={link.href}
                      className={`w-full max-w-xs text-center py-3 px-4 rounded-xl font-body text-[0.95rem] font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-navy-900 font-semibold bg-navy-100/80'
                          : 'text-navy-800 hover:bg-navy-50/90'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
