import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import ImageCarousel from './ImageCarousel.jsx'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  const { t, lang } = useLanguage()

  // Escape cierra el modal; se bloquea el scroll del fondo
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  const text = project[lang]

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={t('gallery.close')}>✕</button>

        <div className="modal-media">
          <span className={`modal-badge badge--${project.type}`}>
            {t(`gallery.badge.${project.type}`)}
          </span>
          {/* keyboard: ArrowLeft / ArrowRight navegan el carrusel dentro del modal */}
          <ImageCarousel images={project.images} captions={text.captions} title={text.title} keyboard />
        </div>

        <div className="modal-body">
          <h2 className="modal-title" id="modal-title">{text.title}</h2>
          <p className="modal-desc">{text.desc}</p>
          <p className="modal-achievement">{text.achievement}</p>

          <h3 className="modal-subtitle">{t('gallery.technologies')}</h3>
          <ul className="modal-tags">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>

          {project.links.length > 0 && (
            <div className="modal-links">
              {project.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
