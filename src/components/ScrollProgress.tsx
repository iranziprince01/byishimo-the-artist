import { useScrollProgress } from '../hooks/useScrollProgress'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 bg-navy-100 z-[100]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <motion.div
        className="h-full bg-navy-600"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}
