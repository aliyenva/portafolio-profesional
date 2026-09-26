import { useEffect } from 'react'

// Activa animaciones de aparición al hacer scroll añadiendo la clase .visible
// a todos los elementos con la clase .reveal cuando entran en el viewport.
export function useReveal(dep) {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elementos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [dep])
}
