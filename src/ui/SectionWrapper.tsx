import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from './Container'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'cream' | 'white' | 'navy' | 'gradient' | 'cta' | 'ctaTeal'
  ariaLabel?: string
  /** When true, section sits under header with no gap; uses top padding to clear fixed nav */
  attachHeader?: boolean
}

const bgMap = {
  cream: 'bg-cream text-navy-800',
  white: 'bg-white text-navy-800',
  navy: 'bg-navy-900 text-cream',
  gradient: 'bg-section-gradient text-navy-800',
  /** Dark navy gradient — distinct from solid footer */
  cta: 'bg-gradient-to-b from-navy-800 to-navy-950 text-cream',
  /** Dark teal (gold-800/900) — clearly different from navy footer */
  ctaTeal: 'bg-gradient-to-b from-gold-800 to-gold-900 text-cream',
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
  /** Generous vertical rhythm: space between stacked page sections */
  const paddingClass = isHome
    ? attachHeader
      ? 'pt-32 sm:pt-36 lg:pt-44 pb-32 sm:pb-40 lg:pb-48'
      : 'py-24 sm:py-28 lg:py-32'
    : attachHeader
      ? 'pt-32 sm:pt-36 lg:pt-44 pb-32 sm:pb-40 lg:pb-48'
      : 'py-28 sm:py-32 lg:py-44'
  return (
    <section
      id={id}
      className={`${paddingClass} ${bgMap[background]} ${className}`}
      aria-label={ariaLabel}
    >
      <div className="flex justify-center min-w-0 w-full">
        <Container className="section-mobile-rail flex flex-col gap-y-12 sm:gap-y-16 lg:gap-y-24">
          {children}
        </Container>
      </div>
    </section>
  )
}
