import { useEffect } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Atmosfera from './components/Atmosfera'
import DoppiaAnima from './components/DoppiaAnima'
import NotteSection from './components/NotteSection'
import Menu from './components/Menu'
import Sedi from './components/Sedi'
import Footer from './components/Footer'

// Interpola tra due colori hex in base a progress (0–1)
function lerpColor(a, b, t) {
  const ah = parseInt(a.slice(1), 16)
  const bh = parseInt(b.slice(1), 16)
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff
  const rr = Math.round(ar + (br - ar) * t)
  const rg = Math.round(ag + (bg - ag) * t)
  const rb = Math.round(ab + (bb - ab) * t)
  return `rgb(${rr},${rg},${rb})`
}

function useScrollColorTransition() {
  useEffect(() => {
    const CAFFE_BG = '#FDF8F0'
    const VINO_BG  = '#1A0A0D'
    const CAFFE_ACC = '#8B6914'
    const VINO_ACC  = '#722F37'

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const raw = max > 0 ? window.scrollY / max : 0
      // Prima metà della pagina rimane caffè, poi transizione verso vino
      const t = Math.max(0, Math.min(1, (raw - 0.25) / 0.5))

      document.documentElement.style.setProperty(
        '--page-bg', lerpColor(CAFFE_BG, VINO_BG, t)
      )
      document.documentElement.style.setProperty(
        '--page-accent', lerpColor(CAFFE_ACC, VINO_ACC, t)
      )
      document.documentElement.style.setProperty('--scroll-t', t)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
}

export default function App() {
  useScrollColorTransition()

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Atmosfera />
      <DoppiaAnima />
      <NotteSection />
      <Menu />
      <Sedi />
      <Footer />
    </div>
  )
}
