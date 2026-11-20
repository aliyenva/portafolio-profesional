// ============================================================
// GALERÍA DE TRABAJOS — datos de los proyectos
// ------------------------------------------------------------
// Las capturas van en: public/images/projects/
// Si un archivo todavía no existe, el carrusel muestra un
// placeholder con la ruta exacta que hay que usar.
// ============================================================
export const projects = [
  {
    id: 'piedpiper',
    type: 'group',
    images: [
      '/images/projects/piedpiper-1.png',
      '/images/projects/piedpiper-2.png',
      '/images/projects/piedpiper-3.png',
    ],
    links: [
      { label: 'Frontend Repo', url: 'https://github.com/Alli293/piedpiper-frontend' },
      { label: 'Backend Repo', url: 'https://github.com/Alli293/piedpiper-backend' },
    ],
    tags: ['React', 'JavaScript', 'REST API', 'Backend / Node.js', 'Git / GitHub'],
    es: {
      title: 'PiedPiper Carbon Hub — Plataforma de Gestión y Huella de Carbono',
      desc: 'Aplicación web full-stack con arquitectura desacoplada (Frontend y Backend independientes) diseñada para el monitoreo, cálculo y gestión centralizada de métricas ambientales y huella de carbono.',
      achievement:
        'Logro: Se implementó una arquitectura cliente-servidor modular y escalable conectando ambos repositorios mediante API REST, facilitando el seguimiento claro de indicadores de sostenibilidad.',
      captions: ['Dashboard principal', 'Cálculo / Métricas de carbono', 'Arquitectura / Vista responsiva'],
    },
    en: {
      title: 'PiedPiper Carbon Hub — Carbon Footprint & Sustainability Platform',
      desc: 'Full-stack web application built with a decoupled architecture (separate Frontend and Backend repositories) designed for centralized monitoring, calculation, and management of environmental metrics and carbon footprint.',
      achievement:
        'Achievement: Engineered a modular, scalable client-server architecture connecting both repositories via REST API, enabling streamlined tracking of sustainability indicators.',
      captions: ['Main dashboard', 'Carbon calculation / metrics', 'Architecture / Responsive view'],
    },
  },
  {
    id: 'ehr',
    type: 'individual',
    images: [
      '/images/projects/ehr-1.png',
      '/images/projects/ehr-2.png',
      '/images/projects/ehr-3.png',
    ],
    links: [],
    tags: ['C++17', 'Red-Black Trees', 'Linear Hashing', 'WinHTTP', 'MongoDB'],
    es: {
      title: 'Plataforma de Salud Digital e Historial Clínico Interconectado',
      desc: 'Sistema de expedientes médicos electrónicos desarrollado en C++17 sin dependencias externas, integrando Árboles Rojo-Negro, Hashing Lineal, Max-Heaps y sincronización en la nube con MongoDB mediante WinHTTP nativo.',
      achievement:
        'Logro: Búsqueda de pacientes en tiempo logarítmico O(log n), acceso promedio O(1) y persistencia en la nube en tiempo real utilizando únicamente APIs nativas de Windows.',
      captions: [],
    },
    en: {
      title: 'Digital Health Platform & Interconnected EHR System',
      desc: 'Electronic Health Record system engineered in C++17 with zero third-party dependencies, combining Red-Black Trees, Linear Hashing, Max-Heaps, and native WinHTTP cloud synchronization with MongoDB.',
      achievement:
        'Achievement: Achieved O(log n) patient lookup, O(1) average-case record access, and real-time cloud persistence using only native Windows APIs.',
      captions: [],
    },
  },
  {
    id: 'portfolio',
    type: 'individual',
    images: ['/images/projects/portfolio-1.png', '/images/projects/portfolio-2.png'],
    links: [{ label: 'GitHub Repo', url: 'https://github.com/aliyenva/portafolio-profesional' }],
    tags: ['React', 'HTML5 Semántico', 'CSS3 (60-30-10)', 'EmailJS / Web3Forms'],
    es: {
      title: 'Portafolio Profesional Interactivo < AYV >',
      desc: 'Aplicación web One-Page bilingüe (ES/EN) con identidad visual kawaii-profesional, estructura HTML5 semántica, regla de color 60-30-10 y formulario de contacto conectado a buzón electrónico.',
      achievement:
        'Logro: Integración equilibrada entre accesibilidad semántica, diseño responsivo multi-dispositivo y micro-interacciones dinámicas en React.',
      captions: [],
    },
    en: {
      title: '< AYV > Interactive Professional Portfolio',
      desc: 'Bilingual (ES/EN) One-Page web application featuring a kawaii-professional brand identity, semantic HTML5 structure, strict 60-30-10 color theory, and a validated contact form wired to email.',
      achievement:
        'Achievement: Balanced strict semantic accessibility, responsive multi-device layout, and dynamic React micro-interactions.',
      captions: [],
    },
  },
]
