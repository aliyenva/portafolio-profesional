import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import './Gallery.css'

// SECCIÓN 3: Galería de trabajos
export default function Gallery() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const gridRef = useRef(null)

  const items = t('gallery.items')
  const filtered = filter === 'all' ? items : items.filter((i) => i.type === filter)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll('.project-card')
    const id = requestAnimationFrame(() => cards.forEach((c) => c.classList.add('visible')))
    return () => cancelAnimationFrame(id)
  }, [filter, items])

  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'individual', label: t('gallery.filters.individual') },
    { id: 'group', label: t('gallery.filters.group') },
  ]

  return (
    <section id="proyectos" className="section bg-alt gallery">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('gallery.title')}</h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </div>

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

        <div className="gallery__grid" ref={gridRef}>
          {filtered.map((item, idx) => (
            <article
              className="project-card reveal"
              key={`${filter}-${item.title}`}
              style={{ transitionDelay: `${idx * 0.06}s` }}
              tabIndex={0}
              onClick={() => setSelected(item)}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelected(item) }}
            >
              <div className="project-card__thumb">
                <span className={`project-card__badge project-card__badge--${item.type}`}>
                  {item.type === 'group' ? t('gallery.filters.group') : t('gallery.filters.individual')}
                </span>
                <span className="project-card__icon" aria-hidden="true">{'</>'}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{item.title}</h3>
                <p className="project-card__desc">{item.desc}</p>
                <ul className="project-card__tags">
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <span className="project-card__more">{t('gallery.viewProject')} ✦</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
