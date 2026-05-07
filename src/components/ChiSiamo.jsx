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
              Un posto da chiamare casa,<br />
              <em>una storia da custodire.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(60,36,21,0.72)',
              marginBottom: 20,
            }}>
              Ci sono posti che non sono solo bar. Sono angoli di quotidianità, dove ci si incontra, le giornate iniziano con il profumo di caffè e le serate si chiudono con un brindisi tra amici. Caffineria è sempre stato tutto questo: un punto in cui ritrovarsi e da chiamare casa.
            </p>
          </Reveal>

          <Reveal delay={0.20}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(60,36,21,0.72)',
              marginBottom: 20,
            }}>
              Tanti anni fa, tre ragazze con un'idea e tanta passione hanno deciso di creare qualcosa di speciale. Hanno immaginato, costruito e fatto crescere questo posto con dedizione, sorrisi e tante tazzine di caffè.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(60,36,21,0.72)',
              marginBottom: 20,
            }}>
              Ma in questa storia c'era già qualcuno che amava Caffineria quanto loro. Cinzia, che giorno dopo giorno ha lavorato al loro fianco, imparando ogni segreto del mestiere, condividendo progetti, sogni e giornate dietro al bancone. Qui è cresciuta, qui ha imparato ad accogliere i clienti con un sorriso sincero, qui ha visto Caffineria diventare un luogo speciale, pieno di vita e di storie.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: 'rgba(60,36,21,0.72)',
              marginBottom: 40,
            }}>
              Ed è per questo che, quando è arrivato il momento di passare il testimone, Cinzia ha scelto di esserci. Ha colto l'occasione per portare avanti questa storia con lo stesso entusiasmo e la stessa passione di sempre.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
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
              "Certi posti meritano di continuare a vivere."
            </blockquote>
          </Reveal>
        </div>

        {/* Foto */}
        <FadeIn delay={0.2}>
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(60,36,21,0.18)',
            aspectRatio: '3/4',
          }}>
            <img
              src="/foto2.jpg"
              alt="Caffineria"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
