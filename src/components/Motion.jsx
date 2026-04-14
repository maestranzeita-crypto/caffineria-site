import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Componente riutilizzabile per animazioni fade-in + slide-up allo scroll.
 * once: true → anima solo la prima volta che entra in viewport.
 */
export function Reveal({ children, delay = 0, y = 24, duration = 0.7, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Fade-in puro (senza spostamento verticale).
 */
export function FadeIn({ children, delay = 0, duration = 0.8, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
