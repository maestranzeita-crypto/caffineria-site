import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src="/img1.png"
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Overlay gradiente */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(20,8,5,0.35) 0%, rgba(20,8,5,0.5) 55%, rgba(20,8,5,0.78) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px',
        gap: 20,
      }}>
        <motion.img
          src="/logo.png"
          alt="Caffineria"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ maxHeight: 100, maxWidth: '70vw' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontStyle: 'italic',
            color: '#FDF8F0',
            letterSpacing: '0.01em',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          Caffetteria di giorno, vineria di sera
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(253,248,240,0.6)',
            margin: 0,
          }}
        >
          Milano · Via Prandina · Piazza Morbegno
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link
            to="menu"
            smooth
            duration={800}
            offset={-68}
            style={{
              cursor: 'pointer',
              padding: '13px 30px',
              borderRadius: 999,
              background: '#722F37',
              color: '#FDF8F0',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            Scopri il menu
          </Link>
          <Link
            to="sedi"
            smooth
            duration={800}
            offset={-68}
            style={{
              cursor: 'pointer',
              padding: '13px 30px',
              borderRadius: 999,
              border: '1px solid rgba(253,248,240,0.4)',
              color: '#FDF8F0',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            Le nostre sedi
          </Link>
        </motion.div>
      </div>

      {/* Freccia scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(253,248,240,0.45)' }}>
          Scorri
        </span>
        <motion.svg
          width="16" height="24" viewBox="0 0 16 24" fill="none"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M8 0v20M1 13l7 7 7-7" stroke="rgba(253,248,240,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.div>
    </section>
  )
}
