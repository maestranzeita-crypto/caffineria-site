import { Reveal, FadeIn } from './Motion'

export default function ChiSiamo() {
  return (
    <section
      id="chi-siamo"
      style={{
        backgroundImage: 'linear-gradient(rgba(253,248,240,0.72), rgba(253,248,240,0.72)), url(/sfondopiante.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
