import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import ChiSiamo      from './components/ChiSiamo'
import SezioneSera   from './components/SezioneSera'
import SezioneGiovedi from './components/SezioneGiovedi'
import Footer        from './components/Footer'
import CookieBanner  from './components/CookieBanner'
import MenuPage      from './pages/MenuPage'
import PrivacyPage   from './pages/PrivacyPage'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ChiSiamo />
<SezioneSera />
              <SezioneGiovedi />
            </>
          } />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
