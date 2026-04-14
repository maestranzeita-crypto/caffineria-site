import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const categorie = [
  {
    icon: '🥐',
    titolo: 'Colazione',
    orario: 'dalle 7:30',
    colore: '#8B6914',
    bg: '#FDF8F0',
    voci: [
      { nome: 'Espresso', prezzo: '€1,00' },
      { nome: 'Cappuccino', prezzo: '€1,50' },
      { nome: 'Brioche artigianale', prezzo: '€1,00' },
      { nome: 'Cornetto al burro', prezzo: '€1,20' },
      { nome: 'Succhi freschi', prezzo: '€3,50' },
    ],
  },
  {
    icon: '🥯',
    titolo: 'Pranzo',
    orario: 'dalle 12:00',
    colore: '#3C2415',
    bg: '#F5EDD8',
    voci: [
      { nome: 'Bagel classico', prezzo: '€5,40' },
      { nome: 'Bagel del giorno', prezzo: '€6,00' },
      { nome: 'Piatto caldo del giorno', prezzo: '€7,50' },
      { nome: 'Insalata di stagione', prezzo: '€6,50' },
      { nome: 'Zuppa del giorno', prezzo: '€5,00' },
    ],
  },
  {
    icon: '🍷',
    titolo: 'Aperitivo & Vini',
    orario: 'dalle 18:00',
    colore: '#722F37',
    bg: '#3C2415',
    dark: true,
    voci: [
      { nome: 'Vino sfuso al calice', prezzo: '€3,00' },
      { nome: 'Bottiglia (calice)', prezzo: '€4,50' },
      { nome: 'Birra artigianale', prezzo: '€4,50' },
      { nome: 'Spritz della casa', prezzo: '€6,00' },
      { nome: 'Aperitivo del mercoledì', prezzo: 'speciale' },
    ],
  },
]

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-24 md:py-36"
      style={{ background: '#F5EDD8' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 text-center" style={{ color: '#722F37' }}>
            Il menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4" style={{ color: '#3C2415' }}>
            Dalla mattina alla notte
          </h2>
          <p className="text-center max-w-xl mx-auto mb-16 text-base" style={{ color: '#3C2415', opacity: 0.65 }}>
            Ingredienti scelti, stagionali, locali. Il menu cambia con il ritmo delle stagioni.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {categorie.map((cat, i) => (
            <FadeIn key={cat.titolo} delay={i * 0.1}>
              <div
                className="rounded-2xl overflow-hidden shadow-lg h-full flex flex-col"
                style={{ background: cat.bg }}
              >
                {/* Header card */}
                <div
                  className="p-6 pb-5"
                  style={{ borderBottom: `2px solid ${cat.dark ? 'rgba(155,74,84,0.3)' : 'rgba(60,36,21,0.12)'}` }}
                >
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3
                    className="font-display text-2xl font-semibold mb-1"
                    style={{ color: cat.dark ? '#FDF8F0' : '#3C2415' }}
                  >
                    {cat.titolo}
                  </h3>
                  <p className="text-xs tracking-widest uppercase" style={{ color: cat.dark ? '#9B4A54' : cat.colore }}>
                    {cat.orario}
                  </p>
                </div>

                {/* Voci */}
                <div className="p-6 flex-1 flex flex-col gap-3">
                  {cat.voci.map(v => (
                    <div key={v.nome} className="flex justify-between items-center">
                      <span
                        className="text-sm font-medium"
                        style={{ color: cat.dark ? 'rgba(253,248,240,0.85)' : 'rgba(60,36,21,0.85)' }}
                      >
                        {v.nome}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: cat.dark ? '#9B4A54' : cat.colore }}
                      >
                        {v.prezzo}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                {cat.dark && (
                  <div className="px-6 pb-6">
                    <p className="text-xs" style={{ color: 'rgba(253,248,240,0.4)' }}>
                      * Le etichette cambiano ogni settimana
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
