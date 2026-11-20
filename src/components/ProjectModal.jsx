import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import './ProjectModal.css'

export default function ProjectModal({ item, onClose }) {
  const { t } = useLanguage()

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!item) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>

        <div className="modal-thumb" aria-hidden="true">
          <span className="modal-thumb__icon">{'</>'}</span>
          <span className={`modal-thumb__badge badge--${item.type}`}>
            {item.type === 'group' ? t('gallery.filters.group') : t('gallery.filters.individual')}
          </span>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{item.title}</h2>
          <p className="modal-desc">{item.desc}</p>

          <ul className="modal-tags">
            {item.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>

          {item.links?.length > 0 && (
            <div className="modal-links">
              {item.links.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
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
