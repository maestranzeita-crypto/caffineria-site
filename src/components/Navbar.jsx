import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const NAV_LINKS = [
  { to: 'chi-siamo',  label: 'Chi siamo' },
  { to: 'menu',       label: 'Menu' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
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
          <Link
            to="sedi"
            smooth
            duration={700}
            offset={-68}
            style={{
              cursor: 'pointer',
              padding: '10px 22px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.05em',
              background: '#722F37',
              color: '#FDF8F0',
              transition: 'opacity 0.2s',
            }}
          >
            Vieni a trovarci
          </Link>
        </div>
      </div>
    </nav>
  )
}
