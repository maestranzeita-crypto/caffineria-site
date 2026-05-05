import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import DoppiaAnima from './components/DoppiaAnima'
import Sedi from './components/Sedi'
import Footer from './components/Footer'
import MenuPage from './pages/MenuPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ChiSiamo />
              <DoppiaAnima />
              <Sedi />
            </>
          } />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
