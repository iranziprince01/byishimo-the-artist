import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  amount?: number
}

const directionOffset = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
}

export function AnimatedReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.2,
}: AnimatedRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
