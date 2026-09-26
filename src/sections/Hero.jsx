import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './Hero.css'

// SECCIÓN 1: Inicio / ¿Quién soy? (presentación)
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1"></span>
        <span className="hero__blob hero__blob--2"></span>
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">{t('hero.greeting')}</p>
          <h1 className="hero__name">{t('hero.name')}</h1>
          <h2 className="hero__role">{t('hero.role')}</h2>
          <p className="hero__tagline">{t('hero.tagline')}</p>

          <div className="hero__cta">
            <a href="#proyectos" className="btn btn-primary">
              {t('hero.ctaProjects')}
            </a>
            <a
              href={config.cvFile}
              download
              className="btn btn-outline"
            >
              {t('hero.ctaCv')}
            </a>
          </div>
        </div>

        <div className="hero__avatar" aria-hidden="true">
          <div className="hero__avatar-ring">
            <span className="hero__avatar-initial">A</span>
          </div>
        </div>
      </div>

      <a href="#sobre-mi" className="hero__scroll" aria-label={t('hero.scroll')}>
        <span className="hero__scroll-text">{t('hero.scroll')}</span>
        <span className="hero__scroll-mouse"></span>
      </a>
    </section>
  )
}
