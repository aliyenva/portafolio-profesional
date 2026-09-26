import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import LanguageSwitch from './LanguageSwitch.jsx'
import Logo from './Logo.jsx'
import './Header.css'

const links = [
  { id: 'inicio', key: 'nav.home' },
  { id: 'sobre-mi', key: 'nav.about' },
  { id: 'proyectos', key: 'nav.gallery' },
  { id: 'servicios', key: 'nav.services' },
  { id: 'contacto', key: 'nav.contact' },
]

export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta la sección activa según el scroll (scrollspy)
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" onClick={handleClick}>
          <Logo size={38} />
          <span className="header__brand-name">Alison</span>
        </a>

        <nav
          className={`header__nav ${open ? 'header__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleClick}
                  className={active === link.id ? 'is-active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <LanguageSwitch />
          <button
            className={`header__burger ${open ? 'is-open' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
