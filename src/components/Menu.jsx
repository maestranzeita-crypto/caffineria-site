import { Reveal } from './Motion'

const IconCaffe = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="18" height="12" rx="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M22 17h3a3 3 0 0 1 0 6h-3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M9 14V11a2 2 0 0 1 2-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M14 14V10a2 2 0 0 1 2-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <line x1="4" y1="28" x2="22" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IconPranzo = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C10 4 5 9.5 5 16s5 12 11 12 11-5.5 11-12S22 4 16 4z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M10 16h12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 11l-3 5 3 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M19 11l3 5-3 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const IconVino = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4h12l-2 10a6 6 0 0 1-8 0L10 4z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <line x1="16" y1="20" x2="16" y2="27" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="11" y1="27" x2="21" y2="27" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 10h12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const CATEGORIE = [
  {
    Icon: IconCaffe,
    titolo: 'Colazione',
    orario: 'dalle 7:30',
    bg: '#FDF8F0',
    accentColor: '#8B6914',
    borderColor: 'rgba(60,36,21,0.08)',
    textColor: '#3C2415',
    subColor: 'rgba(60,36,21,0.55)',
    voci: [
      { nome: 'Espresso', prezzo: '€1,00' },
      { nome: 'Cappuccino', prezzo: '€1,50' },
      { nome: 'Caffè macchiato', prezzo: '€1,10' },
      { nome: 'Brioche artigianale', prezzo: '€1,00' },
      { nome: 'Cornetto al burro', prezzo: '€1,20' },
      { nome: 'Succo fresco', prezzo: '€3,50' },
    ],
  },
  {
    Icon: IconPranzo,
    titolo: 'Pranzo',
    orario: 'dalle 12:00',
    bg: '#F5EDD8',
    accentColor: '#3C2415',
    borderColor: 'rgba(60,36,21,0.1)',
    textColor: '#3C2415',
    subColor: 'rgba(60,36,21,0.55)',
    voci: [
      { nome: 'Bagel classico', prezzo: '€5,40' },
      { nome: 'Bagel del giorno', prezzo: '€6,00' },
      { nome: 'Piatto caldo', prezzo: '€7,50' },
      { nome: 'Insalata stagionale', prezzo: '€6,50' },
      { nome: 'Zuppa del giorno', prezzo: '€5,00' },
      { nome: 'Dolce del giorno', prezzo: '€3,50' },
    ],
  },
  {
    Icon: IconVino,
    titolo: 'Aperitivo & Vini',
    orario: 'dalle 18:00',
    bg: '#2A0E12',
    accentColor: '#C4757E',
    borderColor: 'rgba(155,74,84,0.2)',
    textColor: '#FDF8F0',
    subColor: 'rgba(253,248,240,0.45)',
    voci: [
      { nome: 'Vino sfuso al calice', prezzo: '€3,00' },
      { nome: 'Bottiglia (calice)', prezzo: '€4,50' },
      { nome: 'Birra artigianale', prezzo: '€4,50' },
      { nome: 'Spritz della casa', prezzo: '€6,00' },
      { nome: 'Vale Doppio — mercoledì sera', prezzo: '€8 × 2' },
      { nome: 'Tagliere accompagnamento', prezzo: '€8,00' },
    ],
  },
]

export default function Menu() {
  return (
    <section
      id="menu"
      style={{ background: '#F9F3E8', padding: '120px 32px' }}
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
              Il menu
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              color: '#3C2415', lineHeight: 1.25, marginBottom: 16,
            }}>
              Dalla mattina alla notte
            </h2>
            <p style={{
              fontSize: 15, color: 'rgba(60,36,21,0.6)',
              maxWidth: 440, margin: '0 auto', lineHeight: 1.75,
            }}>
              Ingredienti scelti, stagionali, locali. Il menu cambia con il ritmo delle stagioni.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          alignItems: 'start',
        }} className="menu-grid">
          {CATEGORIE.map((cat, i) => (
            <Reveal key={cat.titolo} delay={i * 0.1}>
              <div style={{
                background: cat.bg,
                borderRadius: 20,
                overflow: 'hidden',
                border: `1px solid ${cat.borderColor}`,
              }}>
                {/* Header card */}
                <div style={{
                  padding: '32px 28px 24px',
                  borderBottom: `1px solid ${cat.borderColor}`,
                }}>
                  <span style={{ display: 'block', marginBottom: 12 }}>
                    <cat.Icon color={cat.accentColor} />
                  </span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 600,
                    color: cat.textColor, marginBottom: 6,
                  }}>
                    {cat.titolo}
                  </h3>
                  <p style={{
                    fontSize: 11, fontWeight: 600,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: cat.accentColor,
                  }}>
                    {cat.orario}
                  </p>
                </div>

                {/* Voci */}
                <div style={{ padding: '24px 28px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {cat.voci.map((v, j) => (
                      <div
                        key={v.nome}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '11px 0',
                          borderBottom: j < cat.voci.length - 1 ? `1px solid ${cat.borderColor}` : 'none',
                        }}
                      >
                        <span style={{ fontSize: 14, color: cat.textColor, fontWeight: 400, opacity: 0.85 }}>
                          {v.nome}
                        </span>
                        <span style={{ fontSize: 13, color: cat.accentColor, fontWeight: 600, flexShrink: 0, marginLeft: 12 }}>
                          {v.prezzo}
                        </span>
                      </div>
                    ))}
                  </div>
                  {cat.note && (
                    <p style={{
                      fontSize: 11, color: cat.subColor,
                      marginTop: 16, fontStyle: 'italic',
                    }}>
                      {cat.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .menu-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
