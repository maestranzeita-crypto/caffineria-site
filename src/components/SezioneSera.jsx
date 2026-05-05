import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <section style={{ position: 'relative', minHeight: '110vh', display: 'flex', alignItems: 'center' }}>

      {/* Video sfondo */}
      <video
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/video1.mp4" type="video/mp4" />
        <source src="/video1.mov" type="video/quicktime" />
      </video>

      {/* Overlay scuro uniforme */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(10,3,5,0.62)',
        zIndex: 1,
      }} />

      {/* Testo */}
      <div className="sera-section-text" style={{ position: 'relative', zIndex: 2, padding: '80px 80px', width: '100%', maxWidth: 640 }}>
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
            color: '#ffffff', marginBottom: 32,
          }}>
            Ogni mercoledì sera
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p style={{
            fontSize: 17, lineHeight: 1.85,
            color: '#ffffff',
            maxWidth: 420,
          }}>
            Perché una volta sola non basta. Ogni mercoledì ti aspettiamo con la nostra offerta
            speciale:{' '}
            <span style={{ fontWeight: 600 }}>
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
            borderTop: '1px solid rgba(255,255,255,0.15)',
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
                <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sera-section-text {
            padding: 60px 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
