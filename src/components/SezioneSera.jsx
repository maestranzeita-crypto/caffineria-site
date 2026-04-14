import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BOLLICINE = [
  { size: 10, x: '15%', delay: 0,    dur: 3.2 },
  { size: 16, x: '32%', delay: 0.8,  dur: 2.8 },
  { size: 8,  x: '50%', delay: 0.3,  dur: 3.6 },
  { size: 14, x: '68%', delay: 1.2,  dur: 2.5 },
  { size: 10, x: '82%', delay: 0.5,  dur: 3.0 },
  { size: 6,  x: '91%', delay: 1.5,  dur: 2.2 },
]

function Bollicina({ size, x, delay, dur }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: 0,
        left: x,
        width: size,
        height: size,
        borderRadius: '50%',
        border: '1px solid rgba(155,74,84,0.5)',
        background: 'rgba(155,74,84,0.12)',
        pointerEvents: 'none',
      }}
      animate={{ y: [-20, -120], opacity: [0, 0.7, 0] }}
      transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeOut' }}
    />
  )
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function SezioneSera() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Video background */}
      <video
        src="/video1.mov"
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Overlay scuro */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(20,5,8,0.82) 0%, rgba(60,15,20,0.70) 60%, rgba(20,5,8,0.88) 100%)',
      }} />

      {/* Bollicine */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {BOLLICINE.map((b, i) => <Bollicina key={i} {...b} />)}
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1100,
        margin: '0 auto',
        padding: '100px 32px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center',
      }} className="sera-grid">
        {/* Testo */}
        <div>
          <Reveal delay={0}>
            <p style={{
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#9B4A54', marginBottom: 20,
            }}>
              Di sera
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#FDF8F0',
              lineHeight: 1.25,
              marginBottom: 28,
            }}>
              Il rituale<br />
              <em style={{ color: '#C4757E' }}>della sera</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{
              fontSize: 16, lineHeight: 1.8,
              color: 'rgba(253,248,240,0.65)',
              marginBottom: 36,
            }}>
              Vini naturali da cantine indipendenti. Etichette che cambiano ogni settimana. L'aperitivo del mercoledì. Una carta pensata con cura, per chi vuole bere bene.
            </p>
          </Reveal>

          {/* Features */}
          <Reveal delay={0.22}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '🍷', text: 'Vini naturali da cantine indipendenti' },
                { icon: '🔄', text: 'Etichette che cambiano ogni settimana' },
                { icon: '✨', text: 'Aperitivo del mercoledì' },
                { icon: '🍺', text: 'Birre artigianali selezionate' },
              ].map(f => (
                <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 18 }}>{f.icon}</span>
                  <span style={{ fontSize: 15, color: 'rgba(253,248,240,0.8)', fontWeight: 400 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.3}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24, marginTop: 48,
              paddingTop: 40,
              borderTop: '1px solid rgba(253,248,240,0.1)',
            }}>
              {[
                { val: '€3', label: 'calice sfuso' },
                { val: 'Mer', label: 'aperitivo' },
                { val: '40+', label: 'etichette' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28, fontWeight: 700,
                    color: '#FDF8F0', marginBottom: 4,
                  }}>{s.val}</p>
                  <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9B4A54' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Immagine spritz */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(155,74,84,0.2)',
          }}
          className="sera-img"
        >
          <img
            src="/img4.jpeg"
            alt="Spritz Caffineria"
            style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sera-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sera-img { display: none; }
        }
      `}</style>
    </section>
  )
}
