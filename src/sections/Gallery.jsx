import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import './Gallery.css'

// SECCIÓN 3: Galería de trabajos (proyectos individuales y grupales)
export default function Gallery() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const items = t('gallery.items') // array traducido
  const filtered =
    filter === 'all' ? items : items.filter((i) => i.type === filter)

  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'individual', label: t('gallery.filters.individual') },
    { id: 'group', label: t('gallery.filters.group') },
  ]

  return (
    <section id="proyectos" className="section gallery">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('gallery.title')}</h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </div>

        {/* Elemento interactivo: filtros */}
        <div className="gallery__filters reveal" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={`gallery__filter ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((item, idx) => (
            <article
              className="project-card reveal"
              key={item.title}
              style={{ transitionDelay: `${idx * 0.06}s` }}
            >
              <div className="project-card__thumb">
                <span className={`project-card__badge project-card__badge--${item.type}`}>
                  {item.type === 'group'
                    ? t('gallery.filters.group')
                    : t('gallery.filters.individual')}
                </span>
                <span className="project-card__icon" aria-hidden="true">
                  {'</>'}
                </span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{item.title}</h3>
                <p className="project-card__desc">{item.desc}</p>
                <ul className="project-card__tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {item.links && item.links.length > 0 && (
                  <div className="project-card__links">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                      >
                        {link.label}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
