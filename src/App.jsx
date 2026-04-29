import './index.css'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import ChiSiamo      from './components/ChiSiamo'
import SezioneGiorno from './components/SezioneGiorno'
import SezioneSera   from './components/SezioneSera'
import Menu          from './components/Menu'
import Sedi          from './components/Sedi'
import Footer        from './components/Footer'

export default function App() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <ChiSiamo />
      <SezioneGiorno />
      <SezioneSera />
      <Menu />
      <Sedi />
      <Footer />
    </div>
  )
}
