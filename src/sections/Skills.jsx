import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './Skills.css'

export default function Skills() {
  const { t } = useLanguage()
  const [active, setActive] = useState('all')
  const gridRef = useRef(null)

  const categories = ['all', 'backend', 'frontend', 'devops', 'support']

  const filtered = active === 'all'
    ? config.skills
    : config.skills.filter(s => s.category === active)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const pills = grid.querySelectorAll('.skill-pill')
    const id = requestAnimationFrame(() => pills.forEach(p => p.classList.add('visible')))
    return () => cancelAnimationFrame(id)
  }, [active])

  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </div>

        {/* Filter tabs */}
        <div className="skills-tabs reveal" role="tablist">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`skills-tab ${active === cat ? 'is-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {t(`skills.cat.${cat}`)}
            </button>
          ))}
        </div>

        {/* Skill pills */}
        <div className="skills-grid" ref={gridRef}>
          {filtered.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-pill reveal"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <span className="skill-pill__icon" aria-hidden="true">{skill.icon}</span>
              <span className="skill-pill__name">{skill.name}</span>
              <div className="skill-pill__bar">
                <div
                  className="skill-pill__fill"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <span className="skill-pill__pct">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
