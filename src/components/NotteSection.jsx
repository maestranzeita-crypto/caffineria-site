import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NotteSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '80vh', background: '#1A0A0D' }}
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          src="/video1.mov"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,10,13,0.5) 0%, rgba(26,10,13,0.2) 40%, rgba(26,10,13,0.7) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-6" style={{ color: '#9B4A54' }}>
            Quando cala la sera
          </p>
          <h2
            className="font-display text-5xl md:text-7xl leading-tight mb-8"
            style={{ color: '#FDF8F0' }}
          >
            Il rituale<br />
            <em style={{ color: '#9B4A54' }}>della notte</em>
          </h2>
          <p
            className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12"
            style={{ color: '#FDF8F0', opacity: 0.75 }}
          >
            Vini naturali, bollicine, amici. La sera da Caffineria è un invito a rallentare e assaporare ogni momento.
          </p>

          {/* Bollicine animate */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { size: 20, delay: 0 },
              { size: 32, delay: 0.4 },
              { size: 16, delay: 0.8 },
              { size: 28, delay: 0.2 },
              { size: 12, delay: 1.0 },
            ].map((b, i) => (
              <motion.div
                key={i}
                className="rounded-full border-2"
                style={{ width: b.size, height: b.size, borderColor: 'rgba(155,74,84,0.6)', background: 'rgba(155,74,84,0.15)' }}
                animate={{ y: [0, -30, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { num: '40+', label: 'Etichette' },
              { num: 'Mer', label: 'Aperitivo' },
              { num: '€3', label: 'Calice sfuso' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold mb-1" style={{ color: '#FDF8F0' }}>{s.num}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: '#9B4A54' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
