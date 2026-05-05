import { motion } from 'framer-motion'
import Menu from '../components/Menu'

export default function MenuPage() {
  return (
    <div style={{ background: '#FDF8F0', minHeight: '100vh' }}>
      {/* Hero header */}
      <div style={{
        background: 'linear-gradient(160deg, #2A0A0F 0%, #4A1520 60%, #722F37 100%)',
        paddingTop: 140,
        paddingBottom: 72,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: 'center',
      }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(253,220,180,0.7)',
            marginBottom: 16,
          }}
        >
          Caffineria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4rem)',
            fontWeight: 600,
            color: '#FDF8F0',
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Il nostro menu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          style={{
            fontSize: 16,
            color: 'rgba(253,248,240,0.6)',
            maxWidth: 400,
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Dalla colazione all'aperitivo, tutto quello che trovi da noi.
        </motion.p>
      </div>

      <Menu />
    </div>
  )
}
