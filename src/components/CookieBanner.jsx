import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200,
      width: 'calc(100% - 48px)',
      maxWidth: 620,
      background: '#1A0808',
      borderRadius: 16,
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
    }}>
      <p style={{ fontSize: 13, color: 'rgba(253,248,240,0.8)', lineHeight: 1.6, margin: 0 }}>
        Questo sito utilizza solo cookie tecnici necessari al funzionamento.
        Nessun dato viene ceduto a terze parti.{' '}
        <Link to="/privacy" style={{ color: '#FDF8F0', textDecoration: 'underline' }}>
          Privacy policy
        </Link>
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button
          onClick={reject}
          style={{
            padding: '9px 20px',
            borderRadius: 999,
            border: '1.5px solid rgba(253,248,240,0.25)',
            background: 'transparent',
            color: 'rgba(253,248,240,0.65)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Rifiuta
        </button>
        <button
          onClick={accept}
          style={{
            padding: '9px 20px',
            borderRadius: 999,
            border: 'none',
            background: '#722F37',
            color: '#FDF8F0',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Accetta
        </button>
      </div>
    </div>
  )
}
