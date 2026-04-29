import { Reveal } from './Motion'

const SEDI = [
  {
    nome: 'Martesana',
    indirizzo: 'Via Privata Prandina 1',
    citta: 'Milano',
    telefono: '02 4942 0043',
    orari: [
      { g: 'Lunedì',    o: '7:30 – 15:00' },
      { g: 'Mar – Gio', o: '7:30 – 22:30' },
      { g: 'Venerdì',   o: '7:30 – 23:00' },
      { g: 'Sabato',    o: '8:00 – 23:00' },
      { g: 'Domenica',  o: '7:30 – 22:30' },
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.8!2d9.233!3d45.481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhIFByaXZhdGEgUHJhbmRpbmEgMQ!5e0!3m2!1sit!2sit!4v1700000000000',
  },
]

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export default function Sedi() {
  return (
    <section
      id="sedi"
      style={{
        backgroundImage: 'linear-gradient(rgba(253,248,240,0.75), rgba(253,248,240,0.75)), url(/foto2a.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '120px 32px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Reveal>
            <p style={{
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#722F37', marginBottom: 16,
            }}>
              Dove siamo
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              color: '#3C2415', marginBottom: 12,
            }}>
              Le nostre sedi
            </h2>
            <p style={{
              fontSize: 15, color: 'rgba(60,36,21,0.6)',
              maxWidth: 380, margin: '0 auto', lineHeight: 1.7,
            }}>
              Vieni a trovarci.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 560px)',
          gap: 24,
          justifyContent: 'center',
        }} className="sedi-grid">
          {SEDI.map((sede, i) => (
            <Reveal key={sede.nome} delay={i * 0.12}>
              <div style={{
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid rgba(60,36,21,0.09)',
                background: '#fff',
              }}>
                {/* Mappa */}
                <div style={{ height: 220, background: '#E8E0D0' }}>
                  <iframe
                    src={sede.map}
                    width="100%"
                    height="220"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mappa ${sede.nome}`}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '28px 32px' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 600,
                    color: '#3C2415', marginBottom: 20,
                  }}>
                    Caffineria {sede.nome}
                  </h3>

                  {/* Indirizzo */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: '#722F37', marginTop: 2 }}><MapIcon /></span>
                    <span style={{ fontSize: 14, color: 'rgba(60,36,21,0.7)', lineHeight: 1.5 }}>
                      {sede.indirizzo}, {sede.citta}
                    </span>
                  </div>

                  {/* Telefono */}
                  {sede.telefono && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                      <span style={{ color: '#722F37' }}><PhoneIcon /></span>
                      <a
                        href={`tel:${sede.telefono.replace(/\s/g, '')}`}
                        style={{ fontSize: 14, color: 'rgba(60,36,21,0.7)', textDecoration: 'none' }}
                      >
                        {sede.telefono}
                      </a>
                    </div>
                  )}
                  {!sede.telefono && <div style={{ marginBottom: 24 }} />}

                  {/* Orari */}
                  <div style={{
                    borderTop: '1px solid rgba(60,36,21,0.07)',
                    paddingTop: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                      <span style={{ color: '#722F37' }}><ClockIcon /></span>
                      <span style={{
                        fontSize: 11, fontWeight: 600,
                        letterSpacing: '0.22em', textTransform: 'uppercase',
                        color: '#722F37',
                      }}>
                        Orari
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {sede.orari.map(o => (
                        <div key={o.g} style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: 13, color: 'rgba(60,36,21,0.55)' }}>{o.g}</span>
                          <span style={{ fontSize: 13, color: '#3C2415', fontWeight: 500 }}>{o.o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sedi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
