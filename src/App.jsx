import './index.css'

import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import EventiSettimana  from './components/EventiSettimana'
import ChiSiamo         from './components/ChiSiamo'
import SezioneGiorno    from './components/SezioneGiorno'
import SezioneSera      from './components/SezioneSera'
import Menu             from './components/Menu'
import Sedi             from './components/Sedi'
import Footer           from './components/Footer'

// Rimuoviamo i vecchi componenti non più usati
// Atmosfera, DoppiaAnima, NotteSection → sostituiti da SezioneGiorno e SezioneSera

export default function App() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />

      {/* CHIARO: hero → chi siamo → eventi → giorno */}
      <Hero />
      <ChiSiamo />
      <EventiSettimana />
      <SezioneGiorno />

      {/* SCURO: sera/vino con video */}
      <SezioneSera />

      {/* RITORNO AL CHIARO: menu → sedi */}
      <Menu />
      <Sedi />

      <Footer />
    </div>
  )
}
