import { Reveal, FadeIn } from './Motion'

const eventi = [
  {
    giorno: 'Mercoledì',
    titolo: 'Vale doppio',
    descrizione: '2 Aperol Spritz',
    prezzo: '€ 8',
    accent: '#C2773A',
    bg: '#FDF3E7',
  },
  {
    giorno: 'Giovedì',
    titolo: 'Doppia birra',
    descrizione: '2 birre medie chiare',
    prezzo: '€ 7',
    accent: '#722F37',
    bg: '#FDF8F0',
  },
]

export default function EventiSettimana() {
  return (
    <section
      id="eventi"
      style={{
        backgroundImage: 'url(/img5.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 32px',
        position: 'relative',
      }}
    >
      {/* overlay scuro per leggibilità */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(30, 15, 5, 0.62)',
        zIndex: 0,
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Reveal delay={0}>
            <p style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#F5C97A',
              marginBottom: 16,
            }}>
              Ogni settimana
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.25,
              margin: 0,
            }}>
              Gli eventi della settimana
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div
          className="eventi-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
            marginBottom: 48,
          }}
        >
          {eventi.map((e, i) => (
            <FadeIn key={e.giorno} delay={0.1 + i * 0.12}>
              <div style={{
                background: e.bg,
                borderRadius: 20,
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                boxShadow: '0 2px 24px rgba(60,36,21,0.07)',
                border: '1px solid rgba(60,36,21,0.07)',
              }}>
                {/* Giorno */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: e.accent,
                  }}>
                    {e.giorno}
                  </span>
                </div>

                {/* Titolo */}
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 600,
                  color: '#3C2415',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  {e.titolo}
                </h3>

                {/* Descrizione + prezzo */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 17,
                    color: 'rgba(60,36,21,0.72)',
                    lineHeight: 1.5,
                  }}>
                    {e.descrizione}
                  </span>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: e.accent,
                    letterSpacing: '-0.01em',
                  }}>
                    {e.prezzo}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Nota prenotazione */}
        <Reveal delay={0.36}>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
          }}>
            {/* Icona calendario */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="14" height="12" rx="2" stroke="#722F37" strokeWidth="1.4"/>
              <path d="M2 8H16" stroke="#722F37" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M6 2V5M12 2V5" stroke="#722F37" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <p style={{
              fontSize: 14,
              fontWeight: 500,
              color: 'rgba(60,36,21,0.65)',
              margin: 0,
              fontStyle: 'italic',
              letterSpacing: '0.01em',
            }}>
              Caffineria ti consiglia di prenotare in anticipo il tuo tavolo.
            </p>
          </div>
        </Reveal>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .eventi-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
