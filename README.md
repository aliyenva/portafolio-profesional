# Portafolio Profesional — One-Page (React)

Prueba de suficiencia **BISOFT-23 Portafolio Profesional** · Universidad CENFOTEC · Período C3-2026.
Portafolio web estilo **One-Page** con navegación por saltos entre 5 secciones, construido con **React + Vite**.

---

## Requisitos de la Parte I y dónde se cumplen

| # | Requisito (5 pts c/u) | Implementación |
|---|------------------------|----------------|
| 1 | Estilo ONE-PAGE, navegación por saltos a 5 secciones | `Header.jsx` (nav con anclas `#inicio`, `#sobre-mi`, `#proyectos`, `#servicios`, `#contacto`) + `scroll-behavior: smooth` |
| 2 | Estructura semántica (`header`, `nav`, `section`, `footer`) | `Header` usa `<header><nav>`, cada sección es `<section>`, `Footer` usa `<footer>` |
| 3 | Diseño uniforme, creativo y minimalista | Sistema de diseño en `global.css` |
| 4 | 5 secciones de contenido (sin contar header ni footer) | Hero, About, Gallery, Services, Contact |
| 5 | Regla 60-30-10 | Variables en `global.css`: principal `#1a2238` (60%), secundario `#394867` (30%), acento `#f9b17a` (10%). **El blanco NO entra en la regla** |
| 6 | Efectos de transición / animación | `useReveal.js` (aparición al scroll), keyframes `fadeUp`, `floaty`, `pulse` |
| 7 | Switch de idioma ES ⇄ EN | `LanguageSwitch.jsx` + `LanguageContext.jsx` + `translations.js` |
| 8 | Elementos interactivos | Filtros de galería, barras de skills, menú responsivo, scrollspy |
| 9 | Botón scrolltop | `ScrollTop.jsx` |
| 10 | Chat de WhatsApp | `WhatsAppChat.jsx` |
| 11 | Galería de trabajos (individuales y grupales) | `Gallery.jsx` con filtro y descripción de logros |
| 12 | Formulario de contacto validado y funcional (envía a correo) | `Contact.jsx` con validación + envío vía FormSubmit |

Todo el sitio es **responsivo** (móvil, tablet, escritorio).

---

## Regla 60-30-10 (paleta)

- **60% Principal:** `#1a2238` (azul marino profundo)
- **30% Secundario:** `#394867` (azul acero)
- **10% Acento:** `#f9b17a` (dorado ámbar)
- El **blanco** (`#ffffff`) se usa solo como color de limpieza (texto/espacios), **no** dentro de la regla.

El logotipo personal (`src/components/Logo.jsx` y `public/logo.svg`) define esta identidad visual.

---

## Cómo ejecutar

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilar para producción (genera /dist)
npm run preview  # previsualizar el build
```

---

## Estructura del proyecto

```
PortafolioProfesionalAlison/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  ├─ logo.svg
│  └─ cv-alison.pdf        (agrega tu CV aquí)
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ components/          (Header, Footer, LanguageSwitch, ScrollTop, WhatsAppChat, Logo)
   ├─ sections/            (Hero, About, Gallery, Services, Contact)
   ├─ context/             (LanguageContext)
   ├─ hooks/               (useReveal)
   ├─ i18n/                (translations)
   ├─ data/                (config)
   └─ styles/              (global.css)
```
