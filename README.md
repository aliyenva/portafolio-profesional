# Portafolio Profesional — One-Page (React)

Prueba de suficiencia **BISOFT-23 Portafolio Profesional** · Universidad CENFOTEC · Período C3-2026.
Portafolio web estilo **One-Page** con navegación por saltos entre 5 secciones, construido con **React + Vite**.

---

## Requisitos de la Parte I y dónde se cumplen

| # | Requisito (5 pts c/u) | Implementación |
|---|------------------------|----------------|
| 1 | Estilo ONE-PAGE, navegación por saltos a 5 secciones | `Header.jsx` (anclas `#inicio`, `#habilidades`, `#proyectos`, `#trayectoria`, `#contacto`) + `scroll-behavior: smooth` |
| 2 | Estructura semántica (`header`, `nav`, `main`, `section`, `footer`) | `<header><nav>` en `Header`, 5 `<section>` dentro de `<main>`, `<footer>` en `Footer` |
| 3 | Diseño uniforme, creativo y minimalista | Estilo kawaii-profesional: formas redondeadas, estrellas de 4 puntas, botones tipo píldora |
| 4 | 5 secciones de contenido (sin contar header ni footer) | 1. Inicio + ¿Quién soy? · 2. Habilidades · 3. Galería de trabajos · 4. Trayectoria y formación · 5. Contacto |
| 5 | Regla 60-30-10 | Lavanda `#D9CCFA` (60%), azul marino `#1E3A5F` (30%), rosa `#F472B6` (10%). **El blanco no entra en la regla** |
| 6 | Efectos de transición / animación | Aparición al scroll, estrellas que giran (`sparkle`), flotación, rebote en botones y pestañas |
| 7 | Switch de idioma ES ⇄ EN | `LanguageSwitch.jsx` + `LanguageContext.jsx` + `translations.js` |
| 8 | Elementos interactivos | Pestañas de habilidades, filtros de galería, modal de detalle de proyecto, línea de tiempo, menú móvil |
| 9 | Botón scrolltop | `ScrollTop.jsx` |
| 10 | Chat de WhatsApp | `WhatsAppChat.jsx` |
| 11 | Galería de trabajos (individuales y grupales) | `Gallery.jsx` + `ProjectModal.jsx`, con descripción del logro de cada proyecto |
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
│  └─ Alison_Yeung_2026_updated.pdf   (currículum descargable)
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
