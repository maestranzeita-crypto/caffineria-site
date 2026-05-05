import { useEffect, useRef } from 'react'

/**
 * Wrapper che inietta una variabile CSS --scroll-progress (0→1)
 * basata sulla posizione di scorrimento della pagina.
 * Viene usata da App.jsx per interpolare i colori caffè → vino.
 */
export function useScrollProgress() {
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      document.documentElement.style.setProperty('--scroll-progress', progress)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
}
