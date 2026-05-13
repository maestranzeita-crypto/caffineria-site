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
      { name: 'Caffè 100% Arabica', price: '1,30 €' },
      { name: 'Decaffeinato Agust', price: '1,40 €' },
      { name: 'Americano', price: '1,50 €' },
      { name: 'Corretto', price: '1,70 €' },
      { name: 'Macchiatone', price: '1,50 €' },
      { name: 'Cappuccino', price: '1,80 €' },
      { name: 'Latte Macchiato', price: '2,20 €' },
      { name: 'Americano Macchiato', price: '1,70 €' },
      { name: 'Marocchino', price: '1,60 €', note: 'Deca/Orzo 1,70 €' },
      { name: 'Orzo / Ginseng', price: '1,50 – 2,00 €', note: 'Piccolo / Grande' },
      { name: 'Cappuccino Orzo / Ginseng', price: '2,20 €' },
      { name: 'Latte Bianco', price: '0,50 – 1,50 €', note: 'Piccolo / Medio / Grande' },
      { name: 'Filtrato', price: '1,70 – 2,10 €', note: 'Medio / Grande' },
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
    id: 'healthy',
    label: 'Healthy',
    Icon: IconLeaf,
    accent: '#3A7D55',
    items: [
      { name: 'Spremuta', price: '4,00 – 5,00 €', note: 'Piccola / Grande' },
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
    id: 'dolci',
    label: 'Dolci',
    Icon: IconCake,
    accent: '#B5500E',
    items: [
      { name: 'Torte Artigianali', price: '3,50 €', subItems: ['Carrot Cake', 'Mela / Cannella', 'Limone'] },
      { name: 'Biscotti Cocco e Limone / Burro', price: '1,80 €' },
      { name: 'Biscotti Gocce di Cioccolato', price: '2,00 €' },
      { name: 'Muffin Artigianali', price: '3,50 €', note: 'Cioccolato, Mirtillo, Red Velvet' },
      { name: 'Muffin Vegani', price: '3,50 €' },
      { name: 'Pancake', price: '4,00 €', note: 'Aggiunta panna montata +0,50 €' },
    ],
  },
  {
    id: 'brunch',
    label: 'Brunch',
    Icon: IconSun,
    accent: '#8B6914',
    badge: 'Sab & Dom — 9:30 / 11:30',
    footer: 'Incluso: biscotto artigianale al burro + Spremuta e Caffè filtrato.',
    items: [
      { name: 'Toast', price: '11,00 €' },
      { name: 'Bagel Salato', price: '12,00 €' },
      { name: 'Pancakes', price: '10,50 €' },
      { name: 'Pane, Burro e Marmellata', price: '10,00 €' },
    ],
  },
  {
    id: 'pranzo',
    label: 'Pranzo',
    Icon: IconPlate,
    accent: '#3C2415',
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
    id: 'aperitivo',
    label: 'Aperitivo',
    Icon: IconCocktail,
    accent: '#9B3A6A',
    items: [
      { name: 'Spritz', price: '6,00 €', note: 'Aperol, Campari, Vermouth, Cynar, Select — +4 € Tagliere' },
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
    id: 'vini',
    label: 'Vini & Birre',
    Icon: IconWine,
    accent: '#5B2333',
    items: [
      { name: 'Montepulciano DOC', price: '5,00 / 20,00 €', note: 'Calice / Bottiglia — Aperitivo 9 € — Take away 15 €' },
      { name: 'Valpolicella', price: '6,00 / 24,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 18 €' },
      { name: 'Morellino di Scansano Bio', price: '6,00 / 24,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 18 €' },
      { name: 'Nebbiolo Langhe DOC', price: '6,00 / 24,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 18 €' },
      { name: 'Prosecco DOC Extra Brut', price: '6,00 / 22,00 €', note: 'Calice / Bottiglia — Aperitivo 10 € — Take away 15 €' },
      { name: 'HB Pils alla spina', price: '3,00 – 5,00 €', note: '0,2L / 0,4L', beer: true },
      { name: 'America IPA 6,1%', price: '3,50 – 6,00 €', note: '0,2L / 0,4L', beer: true },
      { name: 'Lattine War Artigianali', price: '5,00 €', note: 'Take away', beer: true },
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

                const cardBg = isOpen
                  ? `${current.accent}14`
                  : active === 'vini'
                    ? item.beer ? '#FEFAE8' : '#FBE9EF'
                    : '#fff'
                const cardBorder = isOpen
                  ? `1.5px solid ${current.accent}40`
                  : active === 'vini'
                    ? item.beer
                      ? '1.5px solid rgba(180,140,20,0.2)'
                      : '1.5px solid rgba(91,35,51,0.14)'
                    : `1.5px solid rgba(60,36,21,0.08)`

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
                      boxShadow: isOpen
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
                          color: '#3C2415',
                          margin: 0,
                          lineHeight: 1.4,
                        }}>
                          {item.name}
                        </p>
                        {item.note && (
                          <p style={{
                            fontSize: 12,
                            color: 'rgba(60,36,21,0.45)',
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
                          color: current.accent,
                          whiteSpace: 'nowrap',
                          fontFamily: "'Playfair Display', serif",
                        }}>
                          {item.price}
                        </span>
                        {hasAccordion && (
                          <span style={{ color: current.accent }}>
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
