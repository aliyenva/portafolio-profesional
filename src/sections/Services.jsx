import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './Services.css'

// SECCIÓN 4: Servicios y habilidades
export default function Services() {
  const { t } = useLanguage()
  const items = t('services.items')

  const icons = ['💻', '🛠️', '🎨', '📱']

  return (
    <section id="servicios" className="section bg-alt services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services__grid">
          {items.map((item, idx) => (
            <article
              className="service-card reveal"
              key={item.title}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <span className="service-card__icon" aria-hidden="true">
                {icons[idx % icons.length]}
              </span>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="skills reveal">
          <h3 className="skills__title">{t('services.skillsTitle')}</h3>
          <div className="skills__list">
            {config.skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <div className="skill__head">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill__bar">
                  <span
                    className="skill__fill"
                    style={{ width: `${skill.level}%` }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
