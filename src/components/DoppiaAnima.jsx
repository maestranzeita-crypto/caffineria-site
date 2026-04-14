import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function DoppiaAnima() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[700px]">
        {/* Lato caffè — chiaro */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20 md:py-28"
          style={{ background: '#FDF8F0' }}
        >
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#8B6914' }}>
              Di mattina
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#3C2415' }}>
              L'anima<br /><em>del caffè</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#3C2415', opacity: 0.75 }}>
              La mattina comincia con un espresso al bancone, una brioche artigianale e la luce che entra dalle vetrine. Un momento tuo, prima che il giorno inizi davvero.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ul className="space-y-3">
              {[
                { icon: '🥐', text: 'Brioche e cornetti artigianali' },
                { icon: '☕', text: 'Espresso, cappuccino, filtro' },
                { icon: '🥯', text: 'Bagels farciti a pranzo' },
                { icon: '🥗', text: 'Piatti caldi del giorno' },
              ].map(item => (
                <li key={item.text} className="flex items-center gap-3 text-sm font-medium" style={{ color: '#3C2415' }}>
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Divider verticale */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, transparent, #8B6914, transparent)', opacity: 0.4 }}
        />

        {/* Lato vino — scuro e caldo */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20 md:py-28"
          style={{ background: '#3C2415' }}
        >
          <FadeIn delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#9B4A54' }}>
              Di sera
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#FDF8F0' }}>
              L'anima<br /><em>del vino</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#FDF8F0', opacity: 0.75 }}>
              Quando le luci si abbassano, il locale si trasforma. Vini naturali da cantine indipendenti, etichette che cambiano ogni settimana, e il mitico aperitivo del mercoledì.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <ul className="space-y-3">
              {[
                { icon: '🍷', text: 'Vini naturali da cantine indipendenti' },
                { icon: '🔄', text: 'Etichette che cambiano ogni settimana' },
                { icon: '🍾', text: 'Aperitivo del mercoledì' },
                { icon: '🍺', text: 'Birre artigianali selezionate' },
              ].map(item => (
                <li key={item.text} className="flex items-center gap-3 text-sm font-medium" style={{ color: '#FDF8F0', opacity: 0.85 }}>
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Bollicine decorative */}
          <div className="absolute bottom-8 right-8 flex gap-2 opacity-20">
            {[12, 8, 16, 6].map((size, i) => (
              <motion.div
                key={i}
                className="rounded-full border"
                style={{ width: size, height: size, borderColor: '#9B4A54' }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
