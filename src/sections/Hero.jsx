import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './Hero.css'
import './About.css'

// SECCIÓN 1: Hero + ¿Quién soy? (una sola <section>)
export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__sparkle hero__sparkle--1">✦</span>
        <span className="hero__sparkle hero__sparkle--2">✦</span>
        <span className="hero__sparkle hero__sparkle--3">✦</span>
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">
            <span aria-hidden="true">✦</span>
            {t('hero.greeting')}
          </p>
          <h1 className="hero__name">{t('hero.name')}</h1>
          <h2 className="hero__role">{t('hero.role')}</h2>
          <p className="hero__tagline">{t('hero.tagline')}</p>
          <div className="hero__cta">
            <a href="#proyectos" className="btn btn-primary">{t('hero.ctaProjects')}</a>
            <a href={config.cvFile} download className="btn btn-outline">{t('hero.ctaCv')}</a>
          </div>
        </div>

        <div className="hero__avatar" aria-hidden="true">
          <div className="hero__avatar-ring">
            <span className="hero__avatar-initial">A</span>
          </div>
        </div>
      </div>

      {/* ¿Quién soy? */}
      <div className="container hero__about">
        <div className="section-header reveal">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p className="about__lead">{t('about.lead')}</p>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <a href={config.cvFile} download className="btn btn-primary about__cv">
              {t('about.downloadCv')}
            </a>
          </div>

          <div className="about__stats reveal" style={{ display: 'grid', gap: '1.2rem' }}>
            <div className="stat-card">
              <span className="stat-card__num">{config.stats.projects}+</span>
              <span className="stat-card__label">{t('about.statsProjects')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__num">{config.stats.tech}+</span>
              <span className="stat-card__label">{t('about.statsTech')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__num">{config.stats.years}</span>
              <span className="stat-card__label">{t('about.statsYears')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
