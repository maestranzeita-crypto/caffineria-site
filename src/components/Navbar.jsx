import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: 'chi-siamo', label: 'Chi siamo' },
    { to: 'menu', label: 'Menu' },
    { to: 'sedi', label: 'Le sedi' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(253,248,240,0.92)'
          : 'rgba(253,248,240,0.75)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer flex-shrink-0">
          <img src="/logo.png" alt="Caffineria" style={{ maxHeight: 50 }} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ color: '#3C2415' }}
              activeClass="border-b-2"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="sedi"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: '#722F37', color: '#FDF8F0' }}
          >
            Vieni a trovarci
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#3C2415' }} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#3C2415' }} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#3C2415' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(253,248,240,0.97)' }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer text-base font-medium py-2 border-b"
              style={{ color: '#3C2415', borderColor: '#F5EDD8' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="sedi"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ background: '#722F37', color: '#FDF8F0' }}
            onClick={() => setMenuOpen(false)}
          >
            Vieni a trovarci
          </Link>
        </div>
      )}
    </nav>
  )
}
