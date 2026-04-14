import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Atmosfera() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: '#F5EDD8' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 text-center" style={{ color: '#722F37' }}>
            L'atmosfera
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16" style={{ color: '#3C2415' }}>
            Un posto che si sente
          </h2>
        </FadeIn>

        {/* Grid asimmetrica */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Grande a sinistra */}
          <FadeIn delay={0.1} direction="left">
            <div className="col-span-2 md:col-span-1 row-span-2 rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/img5.png"
                alt="Interno Caffineria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>

          {/* Destra top: spritz */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="/img4.png"
                alt="Spritz Caffineria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>

          {/* Destra bottom: colazione */}
          <FadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="/img3.png"
                alt="Colazione Caffineria"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        </div>

        {/* Quote centrale */}
        <FadeIn delay={0.2}>
          <p
            className="font-display text-xl md:text-2xl italic text-center mt-12 max-w-2xl mx-auto"
            style={{ color: '#3C2415', opacity: 0.7 }}
          >
            "Ogni angolo racconta qualcosa — la luce della mattina, il profumo del caffè, il tintinnio dei calici."
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
