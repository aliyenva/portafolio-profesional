import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import Logo from './Logo.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <Logo size={44} />
            <span>Alison</span>
          </div>
          <p className="footer__tagline">{t('footer.tagline')}</p>
        </div>

        {/* Espacios digitales: GitHub y LinkedIn (requisito de entrega) */}
        <div className="footer__social">
          <h4>{t('footer.social')}</h4>
          <div className="footer__social-links">
            <a href={config.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
            <a href={config.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {year} Alison · {t('footer.rights')} · {t('footer.madeWith')} ⚛️
          </p>
        </div>
      </div>
    </footer>
  )
}
