import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi2'
import { useScrollToTop } from '../hooks/useScrollToTop'

const FOOTER_ZONE = 400

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)
  const scrollToTop = useScrollToTop()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
      const scrollBottom = window.scrollY + window.innerHeight
      setIsNearFooter(scrollBottom > document.documentElement.scrollHeight - FOOTER_ZONE)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const buttonClass = isNearFooter
    ? 'fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white text-navy-900 shadow-lg border border-white/80 flex items-center justify-center hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
    : 'fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-navy-800 text-cream shadow-lg border border-navy-700 flex items-center justify-center hover:bg-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2'

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className={buttonClass}
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
