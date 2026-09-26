import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from '../i18n/translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es'
      document.documentElement.lang = next
      return next
    })
  }, [])

  // t() devuelve el texto traducido a partir de una clave con notación de punto
  // ej: t('nav.about')
  const t = useCallback(
    (key) => {
      const parts = key.split('.')
      let node = translations[lang]
      for (const p of parts) {
        node = node?.[p]
        if (node === undefined) return key
      }
      return node
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
