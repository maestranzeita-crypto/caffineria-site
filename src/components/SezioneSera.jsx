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
        <div style={{ position: 'relative', zIndex: 2, padding: '80px 48px', width: '100%' }}>
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

          <Reveal delay={0.22}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Vini naturali da cantine indipendenti',
                'Etichette che cambiano ogni settimana',
                'Aperitivo del mercoledì',
                'Birre artigianali selezionate',
              ].map(text => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 18, height: 1.5, background: '#9B4A54', borderRadius: 2, flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontSize: 15, color: 'rgba(253,248,240,0.8)', fontWeight: 400 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

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
