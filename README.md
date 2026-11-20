# Portafolio Profesional — One-Page (React)

Prueba de suficiencia **BISOFT-23 Portafolio Profesional** · Universidad CENFOTEC · Período C3-2026.
Portafolio web estilo **One-Page** con navegación por saltos entre 5 secciones, construido con **React + Vite**.

---

## Requisitos de la Parte I y dónde se cumplen

| # | Requisito (5 pts c/u) | Implementación |
|---|------------------------|----------------|
| 1 | Estilo ONE-PAGE, navegación por saltos a 5 secciones | `Header.jsx` (anclas `#inicio`, `#habilidades`, `#projects`, `#trayectoria`, `#contacto`) + `scroll-behavior: smooth` |
| 2 | Estructura semántica (`header`, `nav`, `main`, `section`, `footer`) | `<header><nav>` en `Header`, 5 `<section>` dentro de `<main>`, `<footer>` en `Footer` |
| 3 | Diseño uniforme, creativo y minimalista | Estilo kawaii-profesional: formas redondeadas, estrellas de 4 puntas, botones tipo píldora |
| 4 | 5 secciones de contenido (sin contar header ni footer) | 1. Inicio + ¿Quién soy? · 2. Habilidades · 3. Galería de trabajos · 4. Trayectoria y formación · 5. Contacto |
| 5 | Regla 60-30-10 | Lavanda `#D9CCFA` (60%), azul marino `#1E3A5F` (30%), rosa `#F472B6` (10%). **El blanco no entra en la regla** |
| 6 | Efectos de transición / animación | Aparición al scroll, estrellas que giran (`sparkle`), flotación, rebote en botones y pestañas |
| 7 | Switch de idioma ES ⇄ EN | `LanguageSwitch.jsx` + `LanguageContext.jsx` + `translations.js` |
| 8 | Elementos interactivos | Pestañas de habilidades, filtros de galería, carrusel de capturas, modal de detalle de proyecto, línea de tiempo, menú móvil |
| 9 | Botón scrolltop | `ScrollTop.jsx` |
| 10 | Chat de WhatsApp | `WhatsAppChat.jsx` |
| 11 | Galería de trabajos (individuales y grupales) | `Gallery.jsx` + `ImageCarousel.jsx` + `ProjectModal.jsx`, datos en `src/data/projects.js`, con descripción y logro de cada proyecto |
| 12 | Formulario de contacto validado y funcional | `Contact.jsx`, validación + envío con EmailJS |

Todo el sitio es **responsivo** (móvil 375px, tablet 768px, escritorio 1440px).

---

## Regla 60-30-10 (paleta)

- **60% Principal:** `#D9CCFA` (lavanda pastel): fondos de sección, superficies, tarjetas y miniaturas.
- **30% Secundario:** `#1E3A5F` (azul marino): títulos, footer, pestañas activas y contraste.
- **10% Acento:** `#F472B6` (rosa pastel): botones de acción, hover, estrellas, insignias e indicadores.
- El **blanco** (`#FAFAFC`) se usa solo como color de limpieza (fondo neutro), **no** dentro de la regla.

El logotipo personal (`src/components/Logo.jsx` y `public/logo.svg`) es una estrella de 4 puntas rosa sobre un círculo azul marino con la inicial "A", y de ahí salen los tres colores de la paleta.

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
│  ├─ Alison_Yeung_2026_updated.pdf   (currículum descargable)
│  └─ images/projects/                (capturas de la galería)
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ components/          (Header, Footer, LanguageSwitch, ScrollTop, WhatsAppChat, Logo, ImageCarousel, ProjectModal)
   ├─ sections/            (Hero, Skills, Gallery, Timeline, Contact)
   ├─ context/             (LanguageContext)
   ├─ hooks/               (useReveal)
   ├─ i18n/                (translations)
   ├─ data/                (config, projects)
   └─ styles/              (global.css)
```

---

## Capturas de la galería (carrusel)

Cada proyecto tiene un carrusel 16:9 con flechas `‹` `›`, puntos de navegación y, dentro del
modal de detalle, navegación con las teclas `←` `→`. Para agregar tus screenshots, **arrástralos a
`public/images/projects/`** con exactamente estos nombres (PNG, idealmente 1600×900):

| Proyecto | Archivos |
|---|---|
| PiedPiper Carbon Hub (grupal) | `piedpiper-1.png` (dashboard), `piedpiper-2.png` (métricas de carbono), `piedpiper-3.png` (arquitectura / vista responsiva) |
| Plataforma de Salud Digital (individual) | `ehr-1.png`, `ehr-2.png`, `ehr-3.png` |
| Portafolio Profesional < AYV > (individual) | `portfolio-1.png`, `portfolio-2.png` |

Mientras un archivo no exista, esa vista muestra un placeholder lila (`#EDE9FE`, borde punteado
`#C4B5FD`) con el número de vista (`Vista 1 / 3`) y la ruta exacta esperada. Para cambiar
nombres, cantidad de capturas o textos de los proyectos, edita `src/data/projects.js`.

Después de agregar las imágenes, publícalas con:

```bash
git add public/images/projects
git commit -m "Agregar capturas de proyectos"
git push
```
