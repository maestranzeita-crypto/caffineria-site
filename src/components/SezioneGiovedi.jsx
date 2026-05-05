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

export default function SezioneGiovedi() {
  return (
    <section style={{ position: 'relative', minHeight: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>

      <video
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/birra.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(10,6,2,0.62)',
        zIndex: 1,
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '80px 80px 80px 48px', width: '100%', maxWidth: 640 }} className="giovedi-text">
        <Reveal delay={0}>
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#ffffff', marginBottom: 20,
          }}>
            Di giovedì
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
            Due Birre,<br />Un Prezzo
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#ffffff', marginBottom: 32,
          }}>
            Ogni giovedì sera
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p style={{
            fontSize: 17, lineHeight: 1.85,
            color: '#ffffff',
            maxWidth: 420,
          }}>
            Il giovedì si inizia bene. Ti aspettiamo con la nostra offerta speciale:{' '}
            <span style={{ fontWeight: 600 }}>
              due birre medie chiare al prezzo di €7
            </span>
            . Semplice, buona, in buona compagnia.
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
              { val: '2', label: 'Birre medie' },
              { val: '€7', label: 'offerta serale' },
              { val: 'Gio', label: 'ogni settimana' },
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
          .giovedi-text { padding: 60px 28px !important; }
        }
      `}</style>
    </section>
  )
}
