import { type ReactNode } from 'react'
import { Container } from './Container'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'cream' | 'white' | 'navy' | 'gradient'
  ariaLabel?: string
}

const bgMap = {
  cream: 'bg-cream text-navy-800',
  white: 'bg-white text-navy-800',
  navy: 'bg-navy-900 text-cream',
  gradient: 'bg-section-gradient text-navy-800',
}

export function SectionWrapper({
  id,
  children,
  className = '',
  background = 'cream',
  ariaLabel,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-12 xs:py-14 sm:py-20 lg:py-24 ${bgMap[background]} ${className}`}
      aria-label={ariaLabel}
    >
      <Container>{children}</Container>
    </section>
  )
}
