import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import ChiSiamo      from './components/ChiSiamo'
import SezioneGiorno from './components/SezioneGiorno'
import SezioneSera   from './components/SezioneSera'
import Footer        from './components/Footer'
import MenuPage      from './pages/MenuPage'

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
              <SezioneGiorno />
              <SezioneSera />
            </>
          } />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
