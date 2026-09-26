import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import './FloatingButtons.css'

// Botón scrolltop: aparece al bajar y regresa al inicio del portafolio
export default function ScrollTop() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scrolltop ${visible ? 'scrolltop--visible' : ''}`}
      onClick={goTop}
      aria-label={t('scrolltop')}
      title={t('scrolltop')}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 19V5M12 5l-7 7M12 5l7 7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
