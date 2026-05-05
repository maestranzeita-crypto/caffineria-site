import { Reveal, FadeIn } from './Motion'

const voci = [
  { nome: 'Espresso', prezzo: '€1,00' },
  { nome: 'Cappuccino', prezzo: '€1,50' },
  { nome: 'Brioche artigianale', prezzo: '€1,00' },
  { nome: 'Bagel farcito', prezzo: '€5,40' },
  { nome: 'Piatto caldo del giorno', prezzo: '€7,50' },
]

export default function SezioneGiorno() {
  return (
    <section
      style={{
        background: '#F9F3E8',
        padding: '120px 32px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Reveal>
            <p style={{
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#8B6914', marginBottom: 16,
            }}>
              Di mattina
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              color: '#3C2415',
              lineHeight: 1.25,
              marginBottom: 16,
            }}>
              Il rituale del mattino
            </h2>
            <p style={{
              fontSize: 16, color: 'rgba(60,36,21,0.65)',
              maxWidth: 480, margin: '0 auto', lineHeight: 1.75,
            }}>
              Brioche artigianali, cappuccini cremosi, bagels farciti. La mattina comincia bene, sempre.
            </p>
          </Reveal>
        </div>

        {/* Grid foto + testo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          alignItems: 'stretch',
        }} className="giorno-grid">
          {/* Foto colazione */}
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: '100%', minHeight: 360 }}>
              <img
                src="/img3.jpeg"
                alt="Colazione Caffineria"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </FadeIn>

          {/* Foto caffè + voci menu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <FadeIn delay={0.18}>
              <div style={{ borderRadius: 16, overflow: 'hidden', flex: '0 0 auto' }}>
                <img
                  src="/img2.jpeg"
                  alt="Caffè Caffineria"
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </FadeIn>

            {/* Prezzi */}
            <Reveal delay={0.24}>
              <div style={{
                background: '#FDF8F0',
                borderRadius: 16,
                padding: '28px 32px',
                border: '1px solid rgba(60,36,21,0.07)',
              }}>
                <p style={{
                  fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: '#8B6914', marginBottom: 20,
                }}>
                  Dal menu
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {voci.map(v => (
                    <div key={v.nome} style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: 14,
                      borderBottom: '1px solid rgba(60,36,21,0.06)',
                    }}>
                      <span style={{ fontSize: 15, color: '#3C2415', fontWeight: 400 }}>{v.nome}</span>
                      <span style={{ fontSize: 14, color: '#8B6914', fontWeight: 600 }}>{v.prezzo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .giorno-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
