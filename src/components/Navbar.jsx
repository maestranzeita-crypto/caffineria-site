import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: 'chi-siamo',  label: 'Chi siamo' },
  { to: 'menu',       label: 'Menu' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: 'background 0.4s, box-shadow 0.4s',
          background: scrolled ? 'rgba(253,248,240,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(60,36,21,0.08)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="hero" smooth duration={600} style={{ cursor: 'pointer', flexShrink: 0 }}>
            <img
              src="/logo.png"
              alt="Caffineria"
              style={{
                maxHeight: 45,
                display: 'block',
                opacity: scrolled ? 1 : 0,
                transition: 'opacity 0.4s',
              }}
            />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hide-mobile">
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={700}
                offset={-68}
                style={{
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: scrolled ? '#3C2415' : '#FDF8F0',
                  transition: 'color 0.4s, opacity 0.2s',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Burger mobile */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Apri menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', height: 1.5, width: 24,
                background: scrolled ? '#3C2415' : '#FDF8F0',
                borderRadius: 2,
                transition: 'background 0.4s',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 68, left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(253,248,240,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(60,36,21,0.08)',
              padding: '16px 32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={700}
                offset={-68}
                onClick={() => setMenuOpen(false)}
                style={{
                  cursor: 'pointer',
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#3C2415',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(60,36,21,0.07)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hide-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
