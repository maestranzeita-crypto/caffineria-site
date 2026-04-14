import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'

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

const sedi = [
  {
    nome: 'Martesana',
    indirizzo: 'Via Privata Prandina 1, Milano',
    telefono: '02 4942 0043',
    orari: [
      { giorni: 'Lunedì', ore: '7:30 – 15:00' },
      { giorni: 'Mar – Gio', ore: '7:30 – 22:30' },
      { giorni: 'Venerdì', ore: '7:30 – 23:00' },
      { giorni: 'Sabato', ore: '8:00 – 23:00' },
      { giorni: 'Domenica', ore: '7:30 – 22:30' },
    ],
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5!2d9.2235!3d45.4800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a40a0e4d8b%3A0x1!2sVia+Privata+Prandina+1%2C+Milano!5e0!3m2!1sit!2sit!4v1700000000000',
  },
  {
    nome: 'NoLo',
    indirizzo: 'Piazza Morbegno 2, Milano',
    telefono: null,
    orari: [
      { giorni: 'Dom – Gio', ore: '8:00 – 23:00' },
      { giorni: 'Ven – Sab', ore: '8:00 – 01:00' },
    ],
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0!2d9.2100!3d45.4950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b40a0e4d8b%3A0x1!2sPiazza+Morbegno+2%2C+Milano!5e0!3m2!1sit!2sit!4v1700000000001',
  },
]

export default function Sedi() {
  return (
    <section
      id="sedi"
      className="py-24 md:py-36"
      style={{ background: '#3C2415' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 text-center" style={{ color: '#9B4A54' }}>
            Dove siamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4" style={{ color: '#FDF8F0' }}>
            Le nostre sedi
          </h2>
          <p className="text-center max-w-lg mx-auto mb-16 text-base" style={{ color: 'rgba(253,248,240,0.6)' }}>
            Due indirizzi milanesi, stessa anima.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {sedi.map((sede, i) => (
            <FadeIn key={sede.nome} delay={i * 0.15}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: 'rgba(253,248,240,0.06)', border: '1px solid rgba(253,248,240,0.1)' }}
              >
                {/* Map */}
                <div className="w-full" style={{ height: 220 }}>
                  <iframe
                    src={sede.mapSrc}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mappa ${sede.nome}`}
                  />
                </div>

                {/* Info */}
                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-1" style={{ color: '#FDF8F0' }}>
                      Caffineria {sede.nome}
                    </h3>
                    <div className="flex items-start gap-2 mt-3">
                      <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#9B4A54' }} />
                      <span className="text-sm" style={{ color: 'rgba(253,248,240,0.7)' }}>{sede.indirizzo}</span>
                    </div>
                    {sede.telefono && (
                      <div className="flex items-center gap-2 mt-2">
                        <Phone size={15} className="flex-shrink-0" style={{ color: '#9B4A54' }} />
                        <a
                          href={`tel:${sede.telefono.replace(/\s/g, '')}`}
                          className="text-sm hover:underline"
                          style={{ color: 'rgba(253,248,240,0.7)' }}
                        >
                          {sede.telefono}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Orari */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={15} style={{ color: '#9B4A54' }} />
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#9B4A54' }}>
                        Orari
                      </span>
                    </div>
                    <div className="space-y-2">
                      {sede.orari.map(o => (
                        <div key={o.giorni} className="flex justify-between items-center">
                          <span className="text-sm" style={{ color: 'rgba(253,248,240,0.6)' }}>{o.giorni}</span>
                          <span className="text-sm font-medium" style={{ color: '#FDF8F0' }}>{o.ore}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
