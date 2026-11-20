import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import ImageCarousel from '../components/ImageCarousel.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import './Gallery.css'

// SECCIÓN 3: Galería de trabajos (una de las 5 <section> de <main>)
export default function Gallery() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const gridRef = useRef(null)

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.type === filter)

  // Las tarjetas se vuelven a montar al filtrar: forzamos su aparición
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll('.project-card')
    const id = requestAnimationFrame(() => cards.forEach((c) => c.classList.add('visible')))
    return () => cancelAnimationFrame(id)
  }, [filter, lang])

  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'group', label: t('gallery.filters.group') },
    { id: 'individual', label: t('gallery.filters.individual') },
  ]

  const open = (p) => setSelected(p)

  return (
    <section id="projects" className="section bg-alt gallery">
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
          {filtered.map((p, idx) => {
            const text = p[lang]
            return (
              <article
                className="project-card reveal"
                key={`${filter}-${p.id}`}
                style={{ transitionDelay: `${idx * 0.06}s` }}
                tabIndex={0}
                aria-label={text.title}
                onClick={() => open(p)}
                onKeyDown={(e) => {
                  if (e.target === e.currentTarget && e.key === 'Enter') open(p)
                }}
              >
                <div className="project-card__media">
                  <span className={`project-card__badge project-card__badge--${p.type}`}>
                    {t(`gallery.badge.${p.type}`)}
                  </span>
                  <ImageCarousel images={p.images} captions={text.captions} title={text.title} />
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{text.title}</h3>
                  <p className="project-card__desc">{text.desc}</p>
                  <p className="project-card__achievement">{text.achievement}</p>
                  <ul className="project-card__tags">
                    {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <span className="project-card__more">{t('gallery.viewProject')} ✦</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
