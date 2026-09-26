# Portafolio Profesional — One-Page (React)

Prueba de suficiencia **BISOFT-23 Portafolio Profesional** · Universidad CENFOTEC · Período C3-2026.
Portafolio web estilo **One-Page** con navegación por saltos entre 5 secciones, construido con **React + Vite**.

---

## ✅ Requisitos de la Parte I y dónde se cumplen

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

## 🎨 Regla 60-30-10 (paleta)

- **60% Principal:** `#1a2238` (azul marino profundo)
- **30% Secundario:** `#394867` (azul acero)
- **10% Acento:** `#f9b17a` (dorado ámbar)
- El **blanco** (`#ffffff`) se usa solo como color de limpieza (texto/espacios), **no** dentro de la regla.

El logotipo personal (`src/components/Logo.jsx` y `public/logo.svg`) define esta identidad visual.

---

## 🚀 Cómo ejecutar

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilar para producción (genera /dist)
npm run preview  # previsualizar el build
```

---

## ⚙️ Personalización (IMPORTANTE antes de entregar)

Edita **`src/data/config.js`** con tus datos reales:

- `email` → correo donde llegarán los mensajes del formulario.
- `whatsapp` → tu número en formato internacional sin `+` ni espacios (ej. `50688887777`).
- `github` y `linkedin` → URLs de tus perfiles.
- `skills`, `stats` → tus habilidades y estadísticas.

Coloca tu currículum como `public/cv-alison.pdf` (o ajusta `cvFile`).
Puedes editar los textos y proyectos en `src/i18n/translations.js`.

### Formulario de contacto
Usa [FormSubmit](https://formsubmit.co) (sin backend). La **primera vez** que alguien envía el
formulario, FormSubmit manda un correo de activación a tu dirección: confírmalo una vez y a partir
de ahí todos los mensajes llegarán a tu buzón.

---

## 🌐 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub y sube el proyecto.
2. En `vite.config.js`, ajusta `base` al nombre del repo, por ejemplo `base: '/mi-portafolio/'`.
3. Ejecuta:
   ```bash
   npm run build
   npm run deploy
   ```
   (el script `deploy` usa `gh-pages` para publicar la carpeta `dist`).
4. En GitHub → Settings → Pages, selecciona la rama `gh-pages`.

También puedes desplegar en **Vercel** o **Netlify** importando el repositorio.

---

## 📦 Estructura del proyecto

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
