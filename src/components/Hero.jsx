import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-end"
      style={{ background: '#FDF8F0' }}
    >
      {/* Full cover image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/img1.png"
          alt="Caffineria"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(253,248,240,0.15) 0%, rgba(253,248,240,0.1) 40%, rgba(60,36,21,0.75) 85%, rgba(60,36,21,0.92) 100%)',
          }}
        />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: '#F5EDD8', opacity: 0.8 }}
          >
            Milano · Caffineria
          </p>
          <h1
            className="font-display text-5xl md:text-7xl leading-tight mb-6"
            style={{ color: '#FDF8F0' }}
          >
            Caffetteria di giorno,{' '}
            <em>vineria di sera</em>
          </h1>
          <p
            className="text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
            style={{ color: '#F5EDD8', opacity: 0.85 }}
          >
            Un luogo dove il mattino profuma di espresso e la sera si tinge di vino naturale. Due anime, un solo posto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="menu"
              smooth
              duration={700}
              offset={-80}
              className="cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ background: '#722F37', color: '#FDF8F0' }}
            >
              Scopri il menu
            </Link>
            <Link
              to="sedi"
              smooth
              duration={700}
              offset={-80}
              className="cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(253,248,240,0.5)', color: '#FDF8F0' }}
            >
              Le nostre sedi
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(253,248,240,0.6)' }}>Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10"
          style={{ background: 'rgba(253,248,240,0.4)' }}
        />
      </motion.div>
    </section>
  )
}
