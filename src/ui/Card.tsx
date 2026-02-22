import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`rounded-xl bg-white shadow-card border border-navy-100 overflow-hidden ${className}`}
      whileHover={hover ? { y: -4, boxShadow: '0 12px 40px rgba(15, 23, 42, 0.12)' } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
