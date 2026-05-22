import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IconCup = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2c0 0 1 1 1 3s-1 3-1 3" /><path d="M10 2c0 0 1 1 1 3s-1 3-1 3" />
    <path d="M3 10h13l-1.5 9H4.5L3 10z" /><path d="M16 12h2a2 2 0 0 1 0 4h-2" />
  </svg>
)
const IconLeaf = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 5-3 8-3 8s2 0 3 1c-1 4-3 5-8 9z" />
    <path d="M2 21c3-3 6-6 9-8" />
  </svg>
)
const IconCake = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1" />
    <path d="M2 21h20" /><path d="M7 8v2" /><path d="M12 8v2" /><path d="M17 8v2" />
    <path d="M7 4h.01" /><path d="M12 4h.01" /><path d="M17 4h.01" />
  </svg>
)
const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)
const IconPlate = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
)
const IconCocktail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" /><path d="M12 11v11" />
    <path d="M20 2H4l8 9.46L20 2z" />
  </svg>
)
const IconWine = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8l-2 8a4 4 0 0 1-4 0L8 2z" />
    <line x1="12" y1="10" x2="12" y2="20" /><line x1="8" y1="20" x2="16" y2="20" />
  </svg>
)
const IconBeer = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
    <path d="M5 3h12l-2 15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 3z" />
    <path d="M5 7h12" />
  </svg>
)
const IconChevron = ({ open }) => (
  <svg
    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CATEGORIES = [
  {
    id: 'caffe',
    label: 'Caffetteria',
    Icon: IconCup,
    accent: '#722F37',
    items: [
      { name: 'Cappuccino', price: '1,80 €', note: 'Soia 2,00 € — Avena 2,10 € — Mandorla 2,20 €' },
      { name: 'Latte Macchiato', price: '2,20 €', note: 'Soia 2,40 € — Avena 2,50 € — Mandorla 2,60 €' },
      { name: 'Marocchino', price: '1,60 €', note: 'Decaffeinato 1,70 € — Orzo 2,00 €' },
      { name: 'Latte Bianco', price: '0,50 / 1,00 / 1,50 €', note: 'Piccolo / Medio / Grande' },
      { name: 'Filtrato', price: '1,70 – 2,10 €', note: 'Medio / Grande' },
      { name: 'Orzo', price: '1,50 – 2,00 €', note: 'Piccolo / Grande — Cappuccino 2,20 € — Latte Macchiato 2,40 €' },
      { name: 'Ginseng', price: '1,50 – 2,00 €', note: 'Piccolo / Grande — Cappuccino 2,20 € — Latte Macchiato 2,40 €' },
      { name: 'Shakerato', price: '2,60 €', note: 'con Baileys 3,70 €' },
      { name: 'Shakerato Ginseng', price: '3,50 €', note: 'con Baileys 4,60 €' },
      { name: 'Tè Matcha', price: '3,50 €' },
      { name: 'Matcha Cappuccino', price: '2,20 €' },
      { name: 'Matcha Latte', price: '2,50 €' },
      { name: 'Golden Milk Cappuccino', price: '2,20 €' },
      { name: 'Golden Milk Latte', price: '2,50 €' },
    ],
  },
  {
    id: 'healthy',
    label: 'Healthy',
    Icon: IconLeaf,
    accent: '#3A7D55',
    items: [
      { name: 'Yogurt Bianco con Granola, Miele o Marmellata', price: '4,00 €' },
      {
        name: 'Soft Drinks', price: '3,00 €',
        subItems: ['Cola', 'Cola Light', 'Lemon Soda', 'Cedrata', 'San Bitter', 'Crodino', 'Campari Soda', 'Acqua Tonica', 'Ginger Beer'],
      },
      { name: 'Red Bull', price: '3,50 €' },
      { name: 'Chinotto Bio', price: '4,00 €' },
      { name: 'Acqua Naturale / Frizzante', price: '1,00 €' },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    Icon: IconCake,
    accent: '#B5500E',
    items: [
      { name: 'Torte Vegane Senza Glutine Artigianali', price: '3,50 €', subItems: ['Carrot Cake', 'Mela e Cannella'] },
      { name: 'Torta Vegana Artigianale al Limone', price: '3,50 €' },
      { name: 'Muffin Vegani', price: '3,50 €', subItems: ['Cioccolato e Pera', 'Cioccolato e Mirtillo', 'Cioccolato e Cocco'] },
      { name: 'Muffin Artigianali', price: '3,50 €', subItems: ['Mirtillo', 'Cioccolato', 'Red Velvet'] },
      { name: 'Biscotti Artigianali', price: '2,00 €', subItems: ['Gocce al Cioccolato', 'Al Burro', 'Cocco e Limone'] },
      { name: 'Pancake con Miele o Sciroppo d\'Acero', price: '4,00 €' },
      { name: 'Brioche / Cornetto', price: '1,50 €' },
      { name: 'Fagottino / Fazzoletto', price: '1,70 €' },
      { name: 'Mignon', price: '1,00 €' },
      { name: 'Brioche Salata con Edamer e Cotto', price: '2,50 €', note: 'Solo weekend' },
      { name: 'Maxi Toast con Edamer e Cotto', price: '4,50 €' },
      { name: 'Maxi Toast Farcito', price: '5,00 €' },
    ],
  },
  {
    id: 'brunch',
    label: 'Brunch',
    Icon: IconSun,
    accent: '#8B6914',
    badge: 'Sab & Dom — 9:30 / 11:30',
    footer: 'Ogni brunch include: Biscotto al Burro + Spremuta + Caffè Filtrato.',
    items: [
      { name: 'Toast', price: '11,00 €' },
      { name: 'Bagel a scelta', price: '12,00 €' },
      { name: 'Pancake con Miele o Sciroppo d\'Acero', price: '10,50 €' },
      { name: 'Pane Burro e Marmellata', price: '10,00 €' },
    ],
  },
  {
    id: 'pranzo',
    label: 'Pranzo',
    Icon: IconPlate,
    accent: '#3C2415',
    items: [
      { name: 'Insalata Vegetariana', price: '7,50 €', note: 'Insalata verde, pomodori secchi, mela, Grana, glassa di aceto balsamico' },
      { name: 'Insalata Salmone', price: '8,00 €', note: 'Insalata verde, finocchio, salmone affumicato, avocado, glassa di aceto balsamico' },
      { name: 'Piatto di Bresaola', price: '8,00 €', note: 'Rucola, bresaola, scaglie di Grana, limone' },
      { name: 'Piatto Acciughe', price: '8,00 €', note: 'Finocchio, arancia, acciughe' },
      { name: 'Bagel Salmone', price: '7,00 €', note: 'Formaggio spalmabile, salmone affumicato, avocado' },
      { name: 'Bagel Mousse Tonno', price: '6,50 €', note: 'Formaggio spalmabile, capperi, tonno' },
      { name: 'Bagel Pesto', price: '6,50 €', note: 'Pesto, pomodori secchi, scaglie di Grana' },
      { name: 'Bagel Bresaola', price: '7,00 €', note: 'Rucola, caprino e formaggio spalmabile, bresaola, limone' },
      { name: 'Bagel Crudo', price: '7,00 €', note: 'Crudo, Brie, miele' },
      { name: 'Maxi Toast', price: '4,50 €' },
      { name: 'Maxi Toast Farcito', price: '5,00 €' },
      { name: 'Panino', price: 'da 6,50 €' },
      { name: 'Focaccia Farcita', price: 'da 4,50 €' },
      { name: 'Piadina', price: '6,50 €' },
    ],
  },
  {
    id: 'spritz',
    label: 'Spritz e Cocktail',
    Icon: IconCocktail,
    accent: '#9B3A6A',
    items: [
      { name: 'Hugo Spritz', price: '6,00 €' },
      { name: 'Vodka Lemon', price: '8,00 €' },
      { name: 'Gin Tonic Columbus', price: '7,00 €' },
      { name: 'Gin Tonic Tanqueray', price: '8,00 €' },
      { name: 'Gin Tonic Hendrick\'s', price: '9,00 €' },
      { name: 'Gin Tonic Mare', price: '10,00 €' },
      { name: 'Paloma', price: '9,00 €' },
      { name: 'Moscow Mule', price: '9,00 €' },
      { name: 'Negroni / Sbagliato / Americano', price: '7,00 €' },
    ],
  },
  {
    id: 'vini',
    label: 'Vini',
    Icon: IconWine,
    accent: '#5B2333',
    intro: 'Tutti i nostri vini sono vini giovani denominazione di origine controllata.',
    items: [
      { name: 'Montepulciano DOC', price: '5,00 / 20,00 €', note: 'Calice / Bottiglia — Aperitivo 9 € — Take away 15 €', rosso: true },
      { name: 'Valpolicella', price: '6,00 / 24,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 18 €', rosso: true },
      { name: 'Morellino di Scansano Bio', price: '6,00 / 24,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 18 €', rosso: true },
      { name: 'Nebbiolo Langhe DOC', price: '6,00 / 24,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 18 €', rosso: true },
      { name: 'Girò Gaglioppo Rosato', price: '5,00 / 20,00 €', note: 'C. Tenuta Iuzzolini — Calabria | Calice / Bottiglia — Aperitivo 9 € — Take away 14 €', rosato: true },
      { name: 'Marche Rosato IGP', price: '5,00 / 20,00 €', note: 'Sangiovese, Montepulciano — C. di Sante | Calice / Bottiglia — Aperitivo 9 € — Take away 14 €', rosato: true },
      { name: 'Pecorino Bio Ciprea', price: '5,00 / 20,00 €', note: 'Simone Capecci — Marche | Calice / Bottiglia — Aperitivo 9 € — Take away 15 €' },
      { name: 'Vermentino Bio Sardegna Naturale', price: '6,00 / 24,00 €', note: 'Cantina del Rimedio | Calice / Bottiglia — Aperitivo 10 € — Take away 18 €' },
      { name: 'Greco Bianco DOC Bio', price: '6,00 / 24,00 €', note: 'C. Brigante — Calabria | Calice / Bottiglia — Aperitivo 10 € — Take away 18 €' },
      { name: 'Prosecco Asolo Superiore DOCG Extra Brut Bio', price: '6,00 / 22,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 15 €' },
    ],
  },
  {
    id: 'birre',
    label: 'Birre',
    Icon: IconBeer,
    accent: '#9A7A0A',
    items: [
      { name: 'HB Pils alla spina', price: '3,00 – 5,00 €', note: '0,2L / 0,4L' },
      { name: 'America IPA 6,1%', price: '3,50 – 6,00 €', note: '0,2L / 0,4L' },
      { name: 'Lattine War Artigianali', price: 'Non disponibili', note: 'Take away — attualmente non disponibili' },
    ],
  },
]

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } },
}

const subItemVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: { opacity: 1, height: 'auto', marginTop: 10, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.18, ease: 'easeIn' } },
}

export default function Menu() {
  const [active, setActive] = useState('caffe')
  const [openItems, setOpenItems] = useState(new Set())
  const current = CATEGORIES.find(c => c.id === active)

  useEffect(() => { setOpenItems(new Set()) }, [active])

  const toggleItem = (key) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <section style={{ padding: '56px 20px 100px', background: '#FDF8F0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'center',
            marginBottom: 48,
          }}
        >
          {CATEGORIES.map(cat => {
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '10px 20px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.22s ease',
                  border: isActive ? 'none' : '1.5px solid rgba(60,36,21,0.2)',
                  background: isActive ? cat.accent : '#fff',
                  color: isActive ? '#fff' : '#3C2415',
                  boxShadow: isActive
                    ? `0 4px 14px ${cat.accent}44`
                    : '0 1px 4px rgba(0,0,0,0.06)',
                  transform: isActive ? 'translateY(-1px)' : 'none',
                }}
              >
                <span style={{ color: isActive ? '#fff' : cat.accent, display: 'flex' }}>
                  <cat.Icon />
                </span>
                {cat.label}
              </button>
            )
          })}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Badge */}
            {current.badge && (
              <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: 28 }}>
                <span style={{
                  display: 'inline-block',
                  padding: '7px 20px',
                  borderRadius: 999,
                  background: current.accent,
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}>
                  {current.badge}
                </span>
              </motion.div>
            )}

            {/* Intro note */}
            {current.intro && (
              <motion.p variants={itemVariants} style={{
                textAlign: 'center',
                fontSize: 13,
                color: 'rgba(60,36,21,0.55)',
                marginBottom: 28,
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}>
                {current.intro}
              </motion.p>
            )}

            {/* Grid items */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 10,
            }}>
              {current.items.map((item, i) => {
                const key = `${active}-${i}`
                const isOpen = openItems.has(key)
                const hasAccordion = !!item.subItems

                const isDarkCard = active === 'vini' && item.rosso
                const cardBg = isDarkCard
                  ? '#5B1E2E'
                  : isOpen
                    ? `${current.accent}14`
                    : active === 'vini'
                      ? item.rosato ? '#FBE9EF' : '#fff'
                      : active === 'birre'
                        ? '#FFF2A0'
                        : '#fff'
                const cardBorder = isDarkCard
                  ? '1.5px solid rgba(255,255,255,0.08)'
                  : isOpen
                    ? `1.5px solid ${current.accent}40`
                    : active === 'vini'
                      ? item.rosato
                        ? '1.5px solid rgba(91,35,51,0.14)'
                        : '1.5px solid rgba(60,36,21,0.08)'
                      : active === 'birre'
                        ? '1.5px solid rgba(154,122,10,0.28)'
                        : '1.5px solid rgba(60,36,21,0.08)'
                const textColor = isDarkCard ? '#FDF8F0' : '#3C2415'
                const noteColor = isDarkCard ? 'rgba(253,248,240,0.55)' : 'rgba(60,36,21,0.45)'
                const priceColor = isDarkCard ? '#F0B8A0' : current.accent

                return (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    onClick={hasAccordion ? () => toggleItem(key) : undefined}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 14,
                      background: cardBg,
                      border: cardBorder,
                      boxShadow: isDarkCard
                        ? '0 4px 16px rgba(0,0,0,0.25)'
                        : isOpen
                          ? `0 4px 16px ${current.accent}22`
                          : '0 2px 10px rgba(60,36,21,0.07)',
                      cursor: hasAccordion ? 'pointer' : 'default',
                      transition: 'background 0.25s ease, border 0.25s ease, box-shadow 0.25s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{ flex: 1 }}>
                        <p style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: textColor,
                          margin: 0,
                          lineHeight: 1.4,
                        }}>
                          {item.name}
                        </p>
                        {item.note && (
                          <p style={{
                            fontSize: 12,
                            color: noteColor,
                            margin: '4px 0 0',
                            lineHeight: 1.4,
                          }}>
                            {item.note}
                          </p>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                        <span style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: priceColor,
                          whiteSpace: 'nowrap',
                          fontFamily: "'Playfair Display', serif",
                        }}>
                          {item.price}
                        </span>
                        {hasAccordion && (
                          <span style={{ color: priceColor }}>
                            <IconChevron open={isOpen} />
                          </span>
                        )}
                      </div>
                    </div>

                    {hasAccordion && (
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="subitems"
                            variants={subItemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{
                              borderTop: `1px solid ${current.accent}30`,
                              paddingTop: 10,
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 6,
                            }}>
                              {item.subItems.map((sub, si) => (
                                <p key={si} style={{
                                  margin: 0,
                                  fontSize: 13,
                                  color: '#3C2415',
                                  paddingLeft: 4,
                                  lineHeight: 1.5,
                                }}>
                                  <span style={{ color: current.accent, marginRight: 6, fontWeight: 700 }}>—</span>
                                  {sub}
                                </p>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Footer note */}
            {current.footer && (
              <motion.p
                variants={itemVariants}
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  color: 'rgba(60,36,21,0.5)',
                  marginTop: 28,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                }}
              >
                {current.footer}
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>

        <p style={{
          textAlign: 'center',
          fontSize: 12,
          color: 'rgba(60,36,21,0.3)',
          marginTop: 56,
          letterSpacing: '0.05em',
        }}>
          Il menu può variare in base alla disponibilità giornaliera e stagionale.
        </p>
      </div>

      <style>{`
        @media (max-width: 500px) {
          button { padding: 9px 14px !important; font-size: 12px !important; }
        }
      `}</style>
    </section>
  )
}
