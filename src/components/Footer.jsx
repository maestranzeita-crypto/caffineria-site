import { Reveal } from './Motion'

function IgIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#1A0808', padding: '56px 32px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
      }}>
        <Reveal delay={0}>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://instagram.com/caffineria"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 500,
                color: 'rgba(253,248,240,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <IgIcon />
              @caffineria
            </a>
            <a
              href="tel:0249420043"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 14,
                color: 'rgba(253,248,240,0.45)',
                textDecoration: 'none',
              }}
            >
              <PhoneIcon />
              02 4942 0043
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 14,
            color: 'rgba(253,248,240,0.25)',
            letterSpacing: '0.05em',
          }}>
            caffè &amp; vino · Milano
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p style={{ fontSize: 11, color: 'rgba(253,248,240,0.15)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Caffineria. Tutti i diritti riservati.
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
