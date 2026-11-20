import { useLanguage } from '../context/LanguageContext.jsx'
import './Timeline.css'

const icons = {
  work: '💼',
  education: '🎓',
  cert: '🏆',
}

export default function Timeline() {
  const { t } = useLanguage()
  const entries = t('timeline.items')

  return (
    <section id="trayectoria" className="section timeline-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('timeline.title')}</h2>
          <p className="section-subtitle">{t('timeline.subtitle')}</p>
        </div>

        <div className="timeline">
          {entries.map((entry, idx) => (
            <article
              key={entry.org + entry.role}
              className={`timeline-entry reveal ${idx % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="timeline-entry__dot" aria-hidden="true">
                {icons[entry.type] || '✦'}
              </div>
              <div className="timeline-entry__card">
                <span className={`timeline-entry__badge badge--${entry.type}`}>
                  {t(`timeline.type.${entry.type}`)}
                </span>
                <h3 className="timeline-entry__role">{entry.role}</h3>
                <p className="timeline-entry__org">{entry.org}</p>
                <p className="timeline-entry__date">{entry.date}</p>
                <p className="timeline-entry__desc">{entry.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
