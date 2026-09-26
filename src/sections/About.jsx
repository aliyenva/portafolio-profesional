import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './About.css'

// SECCIÓN 2: Sobre mí
export default function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="section bg-alt about">
      <div className="container">
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

          <div className="about__stats reveal">
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
