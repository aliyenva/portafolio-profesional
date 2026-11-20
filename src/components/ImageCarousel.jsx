import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import './ImageCarousel.css'

// Convierte '/images/projects/x.png' en una ruta válida también en GitHub Pages
// (donde el sitio vive bajo /portafolio-profesional/).
const resolveSrc = (src) => `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`

// Carrusel 16:9 con flechas, puntos y placeholder automático por slide.
// keyboard=true activa ArrowLeft / ArrowRight (se usa dentro del modal).
export default function ImageCarousel({ images = [], captions = [], title = '', keyboard = false }) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState({})
  const total = images.length

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total]
  )

  useEffect(() => {
    if (!keyboard || total < 2) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [keyboard, go, total])

  if (total === 0) return null

  // Evita que los clics y teclas del carrusel abran el modal de la tarjeta
  const stop = (fn) => (e) => {
    e.stopPropagation()
    fn()
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={title}
    >
      <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => {
          const label = `${t('gallery.slide')} ${i + 1} / ${total}`
          return (
            <div
              className="carousel__slide"
              key={src}
              role="group"
              aria-roledescription="slide"
              aria-label={label}
              aria-hidden={i !== index}
            >
              {failed[src] ? (
                <div className="carousel__placeholder">
                  <span className="carousel__ph-star" aria-hidden="true">✦</span>
                  <strong className="carousel__ph-count">{label}</strong>
                  {captions[i] && <span className="carousel__ph-caption">{captions[i]}</span>}
                  <span className="carousel__ph-hint">{t('gallery.placeholderHint')}</span>
                  <code className="carousel__ph-path">public{src}</code>
                </div>
              ) : (
                <img
                  src={resolveSrc(src)}
                  alt={`${title} — ${captions[i] || label}`}
                  loading="lazy"
                  onError={() => setFailed((f) => ({ ...f, [src]: true }))}
                />
              )}
            </div>
          )
        })}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className="carousel__btn carousel__btn--prev"
            onClick={stop(() => go(-1))}
            onKeyDown={(e) => e.stopPropagation()}
            aria-label={t('gallery.prev')}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__btn carousel__btn--next"
            onClick={stop(() => go(1))}
            onKeyDown={(e) => e.stopPropagation()}
            aria-label={t('gallery.next')}
          >
            ›
          </button>

          <div className="carousel__dots">
            {images.map((src, i) => (
              <button
                type="button"
                key={src}
                className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                onClick={stop(() => setIndex(i))}
                onKeyDown={(e) => e.stopPropagation()}
                aria-label={`${t('gallery.goTo')} ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
