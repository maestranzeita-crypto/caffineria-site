import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IconCup = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2c0 0 1 1 1 3s-1 3-1 3" /><path d="M10 2c0 0 1 1 1 3s-1 3-1 3" />
    <path d="M3 10h13l-1.5 9H4.5L3 10z" /><path d="M16 12h2a2 2 0 0 1 0 4h-2" />
  </svg>
)
const IconLeaf = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 5-3 8-3 8s2 0 3 1c-1 4-3 5-8 9z" />
    <path d="M2 21c3-3 6-6 9-8" />
  </svg>
)
const IconCake = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1" />
    <path d="M2 21h20" /><path d="M7 8v2" /><path d="M12 8v2" /><path d="M17 8v2" />
    <path d="M7 4h.01" /><path d="M12 4h.01" /><path d="M17 4h.01" />
  </svg>
)
const IconSun = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)
const IconPlate = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
)
const IconCocktail = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" /><path d="M12 11v11" />
    <path d="M20 2H4l8 9.46L20 2z" />
  </svg>
)
const IconWine = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8l-2 8a4 4 0 0 1-4 0L8 2z" />
    <line x1="12" y1="10" x2="12" y2="20" /><line x1="8" y1="20" x2="16" y2="20" />
  </svg>
)

const categories = [
  {
    id: 'caffe', label: 'Caffetteria', icon: <IconCup />,
    items: [
      { name: 'Caffè 100% Arabica', price: '1,30 €' },
      { name: 'Decaffeinato Agust', price: '1,40 €' },
      { name: 'Americano', price: '1,50 €' },
      { name: 'Corretto', price: '1,70 €' },
      { name: 'Macchiatone', price: '1,50 €' },
      { name: 'Cappuccino', price: '1,80 €' },
      { name: 'Latte Macchiato', price: '2,20 €' },
      { name: 'Americano Macchiato', price: '1,70 €' },
      { name: 'Marocchino', price: '1,60 €', note: 'Deca/Orzo 1,70 €' },
      { name: 'Orzo / Ginseng', price: '1,50 – 2,00 €', note: 'Piccolo 1,50 € / Grande 2,00 €' },
      { name: 'Cappuccino Orzo/Ginseng', price: '2,20 €' },
      { name: 'Latte Bianco', price: '0,50 – 1,50 €', note: 'Piccolo / Medio / Grande' },
      { name: 'Filtrato', price: '1,70 – 2,10 €', note: 'Medio 1,70 € / Grande 2,10 €' },
      { name: 'Shakerato Caffè', price: '3,30 €' },
      { name: 'Shakerato Ginseng', price: '3,50 €' },
      { name: 'Shakerato con Baileys', price: '4,60 €' },
      { name: 'Cioccolata', price: '3,00 €', note: 'Con panna 3,50 €' },
      { name: 'Tè Caldo / Tisane', price: '2,50 €' },
      { name: 'Tè Matcha', price: '3,50 €' },
      { name: 'Matcha Cappuccino', price: '2,10 €', note: 'Versione latte 2,40 €' },
      { name: 'Golden Milk Cappuccino', price: '2,10 €', note: 'Versione latte 2,40 €' },
      { name: 'Leche e Leche', price: '2,50 €' },
      { name: 'Caffinero', price: '2,80 €' },
      { name: 'Aggiunta Ghiaccio', price: '+0,40 €' },
    ],
  },
  {
    id: 'healthy', label: 'Healthy', icon: <IconLeaf />,
    items: [
      { name: 'Spremuta', price: '4,00 – 5,00 €', note: 'Piccola 4,00 € / Grande 5,00 €' },
      { name: 'Succo', price: '3,00 €' },
      { name: 'Yogurt', price: '4,00 €', note: 'Con granola, miele e marmellata' },
      { name: 'Acqua Menta', price: '1,50 €' },
      { name: 'Menta Latte', price: '2,50 €' },
      { name: 'Aggiunta Latte di Soia', price: '+0,20 €' },
      { name: 'Aggiunta Latte di Avena', price: '+0,30 €' },
      { name: 'Aggiunta Latte di Mandorla', price: '+0,40 €' },
    ],
  },
  {
    id: 'dolci', label: 'Dolci', icon: <IconCake />,
    items: [
      { name: 'Torte Artigianali', price: '3,50 €', note: 'Carrot Cake, Mela/Cannella, Limone' },
      { name: 'Biscotti Cocco e Limone / Burro', price: '1,80 €' },
      { name: 'Biscotti Gocce di Cioccolato', price: '2,00 €' },
      { name: 'Muffin Artigianali', price: '3,50 €', note: 'Cioccolato, Mirtillo, Red Velvet' },
      { name: 'Muffin Vegani', price: '3,50 €' },
      { name: 'Pancake', price: '4,00 €', note: 'Aggiunta panna montata +0,50 €' },
    ],
  },
  {
    id: 'brunch', label: 'Brunch', icon: <IconSun />,
    badge: 'Sab & Dom  9:30 – 11:30',
    footer: 'Ogni brunch include: biscotto artigianale al burro + spremuta e caffè filtrato.',
    items: [
      { name: 'Toast', price: '11,00 €' },
      { name: 'Bagel Salato', price: '12,00 €' },
      { name: 'Pancakes', price: '10,50 €' },
      { name: 'Pane, Burro e Marmellata', price: 'incluso' },
    ],
  },
  {
    id: 'pranzo', label: 'Pranzo', icon: <IconPlate />,
    items: [
      { name: 'Insalata Vegetariana', price: '7,50 €' },
      { name: 'Insalata Salmone', price: '8,00 €' },
      { name: 'Piatto di Bresaola', price: '8,00 €', note: 'Rucola, grana, limone' },
      { name: 'Piatto Acciughe', price: '8,00 €', note: 'Finocchio, arancia, acciughe' },
      { name: 'Bagel Salmone', price: '7,00 €' },
      { name: 'Bagel Mousse Tonno', price: '6,50 €' },
      { name: 'Bagel Crudo', price: '7,00 €', note: 'Crudo, Brie, Miele' },
      { name: 'Bagel Pesto', price: '6,50 €' },
      { name: 'Bagel Bresaola', price: '7,00 €' },
      { name: 'Maxi Toast', price: '4,50 €' },
      { name: 'Panino', price: 'da 6,50 €' },
      { name: 'Focaccia Farcita', price: 'da 4,50 €' },
      { name: 'Piadina', price: '6,50 €' },
    ],
  },
  {
    id: 'aperitivo', label: 'Aperitivo', icon: <IconCocktail />,
    items: [
      { name: 'Spritz', price: '6,00 €', note: 'Aperol, Campari, Vermouth, Cynar, Select — +4,00 € Tagliere' },
      { name: 'Gin Tonic / Vodka Tonic', price: 'da 7,00 €' },
      { name: 'Negroni / Sbagliato', price: '7,00 €' },
      { name: 'Mojito', price: '10,00 €' },
      { name: 'Vermouth Cocchi', price: '4,50 €' },
      { name: 'Amari Classici', price: '4,00 €' },
      { name: 'Amari Artigianali', price: '5,00 €', note: 'Jefferson, Taneda, Nonino, Venti' },
      { name: 'Pisco / Grappe', price: '4,50 €' },
      { name: 'Rum Diplomatico / Whisky', price: '7,00 €' },
      { name: 'Shot Classici', price: '3,00 €' },
      { name: 'Shot Artigianali', price: '3,50 €' },
      { name: 'Shot Tequila', price: '3,00 €' },
      { name: 'Shot Diplomatico', price: '5,00 €' },
    ],
  },
  {
    id: 'vini', label: 'Vini & Birre', icon: <IconWine />,
    items: [
      { name: 'Montepulciano DOC', price: '5,00 € / 20,00 €', note: 'Calice / Bottiglia — Formula Aperitivo 9,00 € — Take away 15,00 €' },
      { name: 'Valpolicella', price: '6,00 € / 24,00 €', note: 'Calice / Bottiglia — Formula Aperitivo 10,00 € — Take away 18,00 €' },
      { name: 'Morellino di Scansano Bio', price: '6,00 € / 24,00 €', note: 'Calice / Bottiglia — Formula Aperitivo 10,00 € — Take away 18,00 €' },
      { name: 'Nebbiolo Langhe DOC', price: '6,00 € / 24,00 €', note: 'Calice / Bottiglia — Formula Aperitivo 10,00 € — Take away 18,00 €' },
      { name: 'Prosecco DOC Extra Brut', price: '6,00 € / 22,00 €', note: 'Calice / Bottiglia — Formula Aperitivo 10,00 € — Take away 15,00 €' },
      { name: 'HB Pils alla spina', price: '3,00 – 5,00 €', note: '0,2L 3,00 € / 0,4L 5,00 €' },
      { name: 'America IPA 6,1%', price: '3,50 – 6,00 €', note: '0,2L 3,50 € / 0,4L 6,00 €' },
      { name: 'Lattine War Artigianali', price: '5,00 €', note: 'Take away' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState('caffe')
  const current = categories.find(c => c.id === active)

  return (
    <section style={{ padding: '48px 24px 80px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 36 }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '9px 18px', borderRadius: 999,
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                transition: 'all 0.25s',
                border: active === cat.id ? 'none' : '1px solid rgba(60,36,21,0.15)',
                background: active === cat.id ? '#722F37' : 'rgba(253,248,240,0.7)',
                color: active === cat.id ? '#FDF8F0' : '#3C2415',
                boxShadow: active === cat.id ? '0 2px 8px rgba(114,47,55,0.25)' : 'none',
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Badge brunch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
          >
            {current.badge && (
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <span style={{
                  display: 'inline-block', padding: '6px 16px', borderRadius: 999,
                  background: 'rgba(114,47,55,0.1)', color: '#722F37',
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>
                  {current.badge}
                </span>
              </div>
            )}

            {/* Items grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 12 }}>
              {current.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    padding: '16px 20px', borderRadius: 16,
                    background: 'rgba(253,248,240,0.6)',
                    border: '1px solid rgba(60,36,21,0.09)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div style={{ flex: 1, paddingRight: 16 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#3C2415', margin: 0 }}>{item.name}</p>
                    {item.note && (
                      <p style={{ fontSize: 12, color: 'rgba(60,36,21,0.5)', margin: '3px 0 0', lineHeight: 1.4 }}>{item.note}</p>
                    )}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#722F37', whiteSpace: 'nowrap', fontFamily: "'Playfair Display', serif" }}>
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>

            {current.footer && (
              <p style={{ textAlign: 'center', fontSize: 13, color: 'rgba(60,36,21,0.5)', marginTop: 24, fontStyle: 'italic' }}>
                {current.footer}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(60,36,21,0.35)', marginTop: 40 }}>
          Il menu può variare in base alla disponibilità giornaliera e stagionale.
        </p>
      </div>
    </section>
  )
}
