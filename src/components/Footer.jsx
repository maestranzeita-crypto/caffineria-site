import { Phone } from 'lucide-react'

function IgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="py-14 px-6"
      style={{ background: '#1A0A0D' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + firma */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src="/logo.png" alt="Caffineria" style={{ maxHeight: 40, filter: 'brightness(0.9)' }} />
          <p
            className="font-display italic text-sm"
            style={{ color: 'rgba(253,248,240,0.4)' }}
          >
            caffè &amp; vino · Milano
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://instagram.com/caffineria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: 'rgba(253,248,240,0.7)' }}
          >
            <IgIcon />
            @caffineria
          </a>
          <a
            href="tel:0249420043"
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'rgba(253,248,240,0.5)' }}
          >
            <Phone size={15} />
            02 4942 0043
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: 'rgba(253,248,240,0.25)' }}>
          © {new Date().getFullYear()} Caffineria. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
