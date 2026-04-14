import { Reveal, FadeIn } from './Motion'

export default function ChiSiamo() {
  return (
    <section
      id="chi-siamo"
      style={{
        background: '#FDF8F0',
        padding: '120px 32px',
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}
        className="chi-siamo-grid"
      >
        {/* Testo */}
        <div>
          <Reveal delay={0}>
            <p style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#722F37',
              marginBottom: 20,
            }}>
              La nostra storia
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 600,
              color: '#3C2415',
              lineHeight: 1.25,
              marginBottom: 28,
            }}>
              Nate dalla nostalgia,<br />
              <em>costruite con amore.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(60,36,21,0.72)',
              marginBottom: 20,
            }}>
              Caffineria nasce da un gruppo di ragazze italiane di ritorno dall'estero. Dopo anni fuori, ci siamo ritrovate a sentire la mancanza di due cose semplici: il caffè al bar la mattina e il vino con gli amici la sera.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(60,36,21,0.72)',
              marginBottom: 40,
            }}>
              Così abbiamo deciso di creare il posto che volevamo trovare — non solo un locale, ma un rituale quotidiano. Dalla prima brioche all'ultimo calice.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontStyle: 'italic',
              color: '#722F37',
              borderLeft: '3px solid #722F37',
              paddingLeft: 24,
              margin: 0,
              lineHeight: 1.4,
            }}>
              "Ci mettiamo testa, corpo e anima."
            </blockquote>
          </Reveal>
        </div>

        {/* Immagine */}
        <FadeIn delay={0.2}>
          <div style={{ position: 'relative' }}>
            {/* Offset decorativo */}
            <div style={{
              position: 'absolute',
              top: -16, right: -16,
              width: '100%', height: '100%',
              borderRadius: 16,
              background: '#F5EDD8',
              zIndex: 0,
            }} />
            <img
              src="/img5.png"
              alt="Ambiente Caffineria"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: 16,
                display: 'block',
              }}
            />
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .chi-siamo-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
