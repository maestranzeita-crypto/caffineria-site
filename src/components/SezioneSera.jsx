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
    <section style={{ display: 'flex', minHeight: '90vh' }} className="sera-section">

      {/* Pannello sinistro — testo con foto2a.png */}
      <div style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/foto2a.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Overlay scuro — si intensifica verso destra per fondersi col video */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(20,5,8,0.75) 0%, rgba(20,5,8,0.75) 55%, rgba(20,5,8,0.97) 100%)',
        }} />

        {/* Bollicine */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {BOLLICINE.map((b, i) => <Bollicina key={i} {...b} />)}
        </div>

        {/* Testo */}
        <div style={{ position: 'relative', zIndex: 2, padding: '80px 48px 80px 80px', width: '100%' }}>
          <Reveal delay={0}>
            <p style={{
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#ffffff', marginBottom: 20,
            }}>
              Di sera
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: 16,
              letterSpacing: '-0.01em',
            }}>
              Vale Doppio
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p style={{
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#C4757E', marginBottom: 32,
            }}>
              Ogni mercoledì sera
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p style={{
              fontSize: 17, lineHeight: 1.85,
              color: 'rgba(253,248,240,0.78)',
              maxWidth: 420,
            }}>
              Perché una volta sola non basta. Ogni mercoledì ti aspettiamo con la nostra offerta
              speciale:{' '}
              <span style={{ color: '#C4757E', fontWeight: 600 }}>
                due Aperol Spritz al prezzo di €8
              </span>
              . Porta qualcuno con cui brindare — il mercoledì è fatto per condividere.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24, marginTop: 56,
              paddingTop: 40,
              borderTop: '1px solid rgba(253,248,240,0.1)',
            }}>
              {[
                { val: '2', label: 'Aperol Spritz' },
                { val: '€8', label: 'offerta serale' },
                { val: 'Mer', label: 'ogni settimana' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28, fontWeight: 700,
                    color: '#ffffff', marginBottom: 4,
                  }}>{s.val}</p>
                  <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9B4A54' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Pannello destro — video invariato */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }} className="sera-video-panel">
        {/* Sfumatura sul bordo sinistro per fondersi col pannello testo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(20,5,8,0.97) 0%, transparent 40%)',
        }} />
        <video
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/video1.mp4" type="video/mp4" />
          <source src="/video1.mov" type="video/quicktime" />
        </video>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sera-section { flex-direction: column; }
          .sera-video-panel { min-height: 300px; }
        }
      `}</style>
    </section>
  )
}
