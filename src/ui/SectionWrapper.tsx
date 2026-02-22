import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from './Container'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'cream' | 'white' | 'navy' | 'gradient' | 'cta'
  ariaLabel?: string
  /** When true, section sits under header with no gap; uses top padding to clear fixed nav */
  attachHeader?: boolean
}

const bgMap = {
  cream: 'bg-cream text-navy-800',
  white: 'bg-white text-navy-800',
  navy: 'bg-navy-900 text-cream',
  gradient: 'bg-section-gradient text-navy-800',
  /** Distinct from footer: gradient so Partnerships & Booking section doesn't blend with footer */
  cta: 'bg-gradient-to-b from-navy-800 to-navy-950 text-cream',
}

export function SectionWrapper({
  id,
  children,
  className = '',
  background = 'cream',
  ariaLabel,
  attachHeader = false,
}: SectionWrapperProps) {
  const isHome = useLocation().pathname === '/'
  const paddingClass = isHome
    ? attachHeader
      ? 'pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24'
      : 'py-16 sm:py-20 lg:py-24'
    : attachHeader
      ? 'pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-32'
      : 'py-20 sm:py-24 lg:py-32'
  return (
    <section
      id={id}
      className={`${paddingClass} ${bgMap[background]} ${className}`}
      aria-label={ariaLabel}
    >
      <div className="flex justify-center">
        <Container>{children}</Container>
      </div>
    </section>
  )
}
