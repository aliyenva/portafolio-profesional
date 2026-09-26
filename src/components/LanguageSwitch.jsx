import { useLanguage } from '../context/LanguageContext.jsx'
import './LanguageSwitch.css'

// Componente Switch para cambiar el idioma español <-> inglés
export default function LanguageSwitch() {
  const { lang, toggleLang, t } = useLanguage()
  const isEn = lang === 'en'

  return (
    <button
      className={`lang-switch ${isEn ? 'en' : 'es'}`}
      onClick={toggleLang}
      role="switch"
      aria-checked={isEn}
      aria-label={t('switch.label')}
      title={t('switch.label')}
    >
      <span className="lang-switch__thumb" aria-hidden="true"></span>
      <span className={`lang-switch__option ${!isEn ? 'is-active' : ''}`}>ES</span>
      <span className={`lang-switch__option ${isEn ? 'is-active' : ''}`}>EN</span>
    </button>
  )
}
