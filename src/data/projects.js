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
    links: [{ label: 'GitHub Repo', url: 'https://github.com/aliyenva/ProyectoEstructuras-EHR' }],
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
    id: 'coscraft-planner',
    type: 'individual',
    images: ['/images/projects/CrossCraft-1.png', '/images/projects/CrossCraft-2.png'],
    links: [{ label: 'GitHub Repo', url: 'https://github.com/aliyenva/coscraft-planner' }],
    tags: ['Angular / React', 'TypeScript', 'Node.js', 'SQLite'],
    es: {
      title: 'CosCraft Planner — Organizador de Proyectos de Cosplay y Presupuestos',
      desc: 'Aplicación web interactiva diseñada para planificar proyectos de cosplay y diseño de vestuario por evento o convención. Permite desglosar piezas del traje, gestionar listas de materiales y telas, monitorear el progreso porcentual por prop o prenda, registrar tiempo invertido y controlar el presupuesto en tiempo real.',
      achievement:
        'Logro: Desarrollo de una aplicación web full-stack con seguimiento granular de avance y cálculo dinámico de costos para producción de vestuario y utilería.',
      captions: [],
    },
    en: {
      title: 'CosCraft Planner — Cosplay & Costume Budget Organizer',
      desc: 'Interactive web application designed to plan cosplay and costume design projects by event or convention. Breaks down outfit components, manages fabric and material checklists, tracks percentage progress per prop or garment, logs crafting hours, and calculates budgets in real time.',
      achievement:
        'Achievement: Developed a full-stack web application featuring granular progress tracking and dynamic cost calculation for costume and prop production.',
      captions: [],
    },
  },
]
