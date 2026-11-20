// Diccionario de traducciones ES / EN para el Switch de idioma
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      gallery: 'Proyectos',
      services: 'Servicios',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Alison Yeung',
      role: 'Ingeniera de Software & Technical Support Engineer',
      tagline:
        'Bilingüe (español nativo, inglés fluido) con casi 4 años de experiencia resolviendo incidentes críticos en entornos enterprise y SaaS, y en formación continua en desarrollo de software.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      scroll: 'Desliza para explorar',
    },
    about: {
      title: '¿Quién soy?',
      subtitle: 'Mi trayectoria profesional y académica.',
      lead: 'Technical Support Engineer en ServiceNow · Bachillerato en Ingeniería de Software, CENFOTEC.',
      p1: 'Cuento con casi 4 años de experiencia manejando resolución end-to-end de incidentes mayores y críticos (P1–P3) para clientes enterprise y cloud/SaaS. Mantengo un promedio de satisfacción al cliente de 9.75 (meta: 9.0), con un 10.0 perfecto en Q1. Anteriormente trabajé como Production Support Engineer en Equifax y como Executive Assistant en McKinsey.',
      p2: 'En el ámbito académico combino mis estudios en CENFOTEC con certificaciones como ServiceNow Certified System Administrator, AWS CloudOps (en progreso) y Scrum Fundamentals. Me apasiona construir soluciones robustas, aprender nuevas tecnologías y resolver problemas de raíz.',
      statsProjects: 'Proyectos',
      statsTech: 'Tecnologías',
      statsYears: 'Años de experiencia',
      downloadCv: 'Descargar currículum',
    },
    gallery: {
      title: 'Galería de trabajos',
      subtitle:
        'Proyectos individuales y grupales desarrollados con las tecnologías aprendidas en la U.',
      viewProject: 'Ver proyecto',
      filters: {
        all: 'Todos',
        individual: 'Individuales',
        group: 'Grupales',
      },
      items: [
        {
          title: 'CarbonHub (Pied Piper)',
          type: 'group',
          tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT', 'Spring AI'],
          desc: 'Plataforma full-stack grupal para gestión de huella de carbono con 22 tablas en 13 dominios y múltiples roles de usuario. Frontend en Angular (TypeScript + SCSS), backend en Spring Boot 3.5 con PostgreSQL, auth JWT, IA con Spring AI + Google Gemini y Docker. Contribuciones: diccionario de datos completo, perfiles de actores del sistema (SRS), catálogo de requerimientos del épico de directorio de auditores y revisiones de PR en Angular identificando bugs de autenticación y data-binding.',
          links: [
            { label: 'Frontend', url: 'https://github.com/Alli293/piedpiper-frontend' },
            { label: 'Backend', url: 'https://github.com/Alli293/piedpiper-backend' },
          ],
        },
        {
          title: 'App de Finanzas Personales',
          type: 'individual',
          tags: ['React', 'Chart.js', 'JavaScript'],
          desc: 'Aplicación individual para controlar gastos e ingresos con gráficos dinámicos e interactivos. Logro: dashboard en tiempo real con visualización de tendencias.',
        },
        {
          title: 'API REST de Inventario',
          type: 'individual',
          tags: ['Java', 'Spring Boot', 'MySQL'],
          desc: 'Servicio back-end para control de inventario con autenticación JWT y endpoints documentados. Logro: cobertura completa de endpoints con Postman.',
        },
        {
          title: 'Landing Page Responsiva',
          type: 'individual',
          tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
          desc: 'Sitio one-page totalmente responsivo con animaciones CSS y diseño mobile-first. Logro: puntuación 95+ en Lighthouse.',
        },
        {
          title: 'Sistema de Tickets de Soporte',
          type: 'group',
          tags: ['Angular', 'Node.js', 'MongoDB'],
          desc: 'Proyecto grupal de mesa de ayuda con gestión de roles, notificaciones y seguimiento en tiempo real de tickets. Logro: flujo completo de escalación de incidentes.',
        },
        {
          title: 'Aplicación de Escritorio JavaFX',
          type: 'individual',
          tags: ['Java', 'JavaFX', 'SQLite'],
          desc: 'Aplicación de escritorio con interfaz gráfica en JavaFX y persistencia en SQLite. Logro: CRUD completo con validaciones y manejo de excepciones.',
        },
      ],
    },
    services: {
      title: 'Servicios y habilidades',
      subtitle: 'Lo que puedo aportar en un equipo de desarrollo o soporte.',
      items: [
        {
          title: 'Soporte Técnico & Incidentes',
          desc: 'Resolución end-to-end de incidentes P1–P3, análisis de logs con Splunk, runbooks y documentación post-incidente.',
        },
        {
          title: 'Desarrollo Back-End',
          desc: 'APIs REST con Java, Spring Boot, Node.js y bases de datos SQL/NoSQL.',
        },
        {
          title: 'Desarrollo Front-End',
          desc: 'Interfaces modernas y responsivas con Angular, React, HTML5, CSS3 y Bootstrap.',
        },
        {
          title: 'DevOps & Herramientas',
          desc: 'Git, Azure DevOps, Docker, Jenkins, GCP, Jira, Postman y Bruno.',
        },
      ],
      skillsTitle: 'Habilidades técnicas',
    },
    contact: {
      title: 'Contáctame',
      subtitle: 'Envíame un mensaje y te responderé lo antes posible.',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tucorreo@ejemplo.com',
      placeholderSubject: 'Motivo del mensaje',
      placeholderMessage: 'Escribe tu mensaje aquí...',
      errName: 'Por favor ingresa tu nombre (mínimo 3 caracteres).',
      errEmail: 'Ingresa un correo electrónico válido.',
      errSubject: 'El asunto es obligatorio.',
      errMessage: 'El mensaje debe tener al menos 10 caracteres.',
      success: '¡Gracias! Tu mensaje se ha enviado correctamente.',
      infoTitle: 'Información de contacto',
    },
    footer: {
      tagline: 'Ingeniera de Software · Technical Support Engineer · CENFOTEC',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con React',
      social: 'Espacios digitales',
    },
    switch: {
      label: 'Cambiar idioma',
    },
    whatsapp: {
      label: 'Chatea por WhatsApp',
      message: 'Hola Alison, vi tu portafolio y me gustaría contactarte.',
    },
    scrolltop: 'Volver al inicio',
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      gallery: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Alison Yeung',
      role: 'Software Engineer & Technical Support Engineer',
      tagline:
        'Bilingual (Spanish native, English fluent) with nearly 4 years of experience resolving critical incidents for enterprise and SaaS customers, and continuously growing as a software developer.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      scroll: 'Scroll to explore',
    },
    about: {
      title: 'Who am I?',
      subtitle: 'My professional and academic background.',
      lead: 'Technical Support Engineer at ServiceNow · Bachelor\'s in Software Engineering, CENFOTEC.',
      p1: 'I have nearly 4 years of experience owning end-to-end resolution of major and critical incidents (P1–P3) for enterprise and cloud/SaaS customers. I maintain a 9.75 average CSAT (target: 9.0), including a perfect 10.0 in Q1. Previously I worked as a Production Support Engineer at Equifax and as an Executive Assistant at McKinsey.',
      p2: 'Academically, I combine my Software Engineering studies at CENFOTEC with certifications including ServiceNow Certified System Administrator, AWS CloudOps (in progress) and Scrum Fundamentals. I am passionate about building robust solutions, learning new technologies and solving problems at their root.',
      statsProjects: 'Projects',
      statsTech: 'Technologies',
      statsYears: 'Years of experience',
      downloadCv: 'Download résumé',
    },
    gallery: {
      title: 'Work gallery',
      subtitle:
        'Individual and group projects built with the technologies learned at university.',
      viewProject: 'View project',
      filters: {
        all: 'All',
        individual: 'Individual',
        group: 'Group',
      },
      items: [
        {
          title: 'CarbonHub (Pied Piper)',
          type: 'group',
          tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT', 'Spring AI'],
          desc: 'Full-stack group platform for carbon footprint management spanning 22 tables across 13 domains with multiple user roles. Angular frontend (TypeScript + SCSS), Spring Boot 3.5 backend with PostgreSQL, JWT auth, AI features via Spring AI + Google Gemini, and Docker. Contributions: full data dictionary, SRS user profiles for 5 system actors, requirements catalog for the auditor directory epic, and Angular PR code reviews catching authentication and data-binding bugs.',
          links: [
            { label: 'Frontend', url: 'https://github.com/Alli293/piedpiper-frontend' },
            { label: 'Backend', url: 'https://github.com/Alli293/piedpiper-backend' },
          ],
        },
        {
          title: 'Personal Finance App',
          type: 'individual',
          tags: ['React', 'Chart.js', 'JavaScript'],
          desc: 'Individual app to track expenses and income with dynamic interactive charts. Achievement: real-time dashboard with trend visualization.',
        },
        {
          title: 'Inventory REST API',
          type: 'individual',
          tags: ['Java', 'Spring Boot', 'MySQL'],
          desc: 'Back-end service for inventory control with JWT authentication and documented endpoints. Achievement: full endpoint coverage with Postman.',
        },
        {
          title: 'Responsive Landing Page',
          type: 'individual',
          tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
          desc: 'Fully responsive one-page site with CSS animations and mobile-first design. Achievement: 95+ Lighthouse score.',
        },
        {
          title: 'Support Ticket System',
          type: 'group',
          tags: ['Angular', 'Node.js', 'MongoDB'],
          desc: 'Group help-desk app with role management, notifications and real-time ticket tracking. Achievement: full incident escalation workflow.',
        },
        {
          title: 'JavaFX Desktop Application',
          type: 'individual',
          tags: ['Java', 'JavaFX', 'SQLite'],
          desc: 'Desktop application with JavaFX GUI and SQLite persistence. Achievement: full CRUD with validations and exception handling.',
        },
      ],
    },
    services: {
      title: 'Services & skills',
      subtitle: 'What I can bring to a development or support team.',
      items: [
        {
          title: 'Technical Support & Incidents',
          desc: 'End-to-end P1–P3 incident resolution, Splunk log analysis, runbooks and post-incident documentation.',
        },
        {
          title: 'Back-End Development',
          desc: 'REST APIs with Java, Spring Boot, Node.js and SQL/NoSQL databases.',
        },
        {
          title: 'Front-End Development',
          desc: 'Modern responsive interfaces with Angular, React, HTML5, CSS3 and Bootstrap.',
        },
        {
          title: 'DevOps & Tooling',
          desc: 'Git, Azure DevOps, Docker, Jenkins, GCP, Jira, Postman and Bruno.',
        },
      ],
      skillsTitle: 'Technical skills',
    },
    contact: {
      title: 'Contact me',
      subtitle: 'Send me a message and I will reply as soon as possible.',
      name: 'Full name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      placeholderName: 'Your name',
      placeholderEmail: 'youremail@example.com',
      placeholderSubject: 'Reason for your message',
      placeholderMessage: 'Write your message here...',
      errName: 'Please enter your name (at least 3 characters).',
      errEmail: 'Enter a valid email address.',
      errSubject: 'Subject is required.',
      errMessage: 'The message must have at least 10 characters.',
      success: 'Thank you! Your message has been sent successfully.',
      infoTitle: 'Contact information',
    },
    footer: {
      tagline: 'Software Engineer · Technical Support Engineer · CENFOTEC',
      rights: 'All rights reserved.',
      madeWith: 'Made with React',
      social: 'Digital spaces',
    },
    switch: {
      label: 'Change language',
    },
    whatsapp: {
      label: 'Chat on WhatsApp',
      message: "Hi Alison, I saw your portfolio and I'd like to contact you.",
    },
    scrolltop: 'Back to top',
  },
}
