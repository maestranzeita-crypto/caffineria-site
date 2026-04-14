import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function ChiSiamo() {
  return (
    <section
      id="chi-siamo"
      className="py-24 md:py-36"
      style={{ background: '#FDF8F0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: testo */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: '#722F37' }}>
                La nostra storia
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8" style={{ color: '#3C2415' }}>
                Nate dalla nostalgia,<br />
                <em>costruite con amore</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#3C2415', opacity: 0.8 }}>
                Caffineria nasce da un gruppo di ragazze italiane di ritorno dall'estero. Dopo anni fuori, ci siamo ritrovate a sentire la mancanza di due cose semplici: il caffè al bar la mattina e il vino con gli amici la sera.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: '#3C2415', opacity: 0.8 }}>
                Così abbiamo deciso di creare il posto che volevamo trovare. Non solo un locale, ma un rituale quotidiano — dalla prima brioche all'ultimo calice. Milano ci ha accolte, e noi ci mettiamo testa, corpo e anima.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <blockquote
                className="font-display text-2xl md:text-3xl italic border-l-4 pl-6"
                style={{ color: '#722F37', borderColor: '#722F37' }}
              >
                "Ci mettiamo testa, corpo e anima."
              </blockquote>
            </FadeIn>
          </div>

          {/* Right: immagine caffè */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: '#F5EDD8' }}
              />
              <img
                src="/img2.jpeg"
                alt="Caffè Caffineria"
                className="relative rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: '4/5', maxHeight: 560 }}
              />
              {/* badge */}
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-lg"
                style={{ background: '#722F37' }}
              >
                <span className="font-display text-3xl" style={{ color: '#FDF8F0' }}>☕</span>
                <span className="text-xs font-semibold tracking-wide mt-1" style={{ color: '#FDF8F0' }}>dal 2020</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
