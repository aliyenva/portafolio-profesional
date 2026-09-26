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
      name: 'Alison',
      role: 'Ingeniera de Software',
      tagline:
        'Desarrolladora enfocada en crear experiencias web modernas, accesibles y responsivas.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      scroll: 'Desliza para explorar',
    },
    about: {
      title: '¿Quién soy?',
      subtitle: 'Un poco sobre mi trayectoria y lo que me apasiona.',
      lead: 'Estudiante de Ingeniería de Software en la Universidad CENFOTEC.',
      p1: 'Me especializo en el desarrollo web front-end y back-end, construyendo aplicaciones limpias, mantenibles y centradas en la persona usuaria. Me gusta transformar ideas en productos reales.',
      p2: 'Durante mi formación he trabajado con distintas tecnologías, desde HTML, CSS y JavaScript hasta frameworks modernos como React, siempre cuidando la accesibilidad y el diseño responsivo.',
      statsProjects: 'Proyectos',
      statsTech: 'Tecnologías',
      statsYears: 'Años estudiando',
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
          title: 'Pied Piper',
          type: 'group',
          tags: ['React', 'Node.js', 'API REST'],
          desc: 'Proyecto grupal full-stack con frontend en React y backend con API REST. Logro: arquitectura separada cliente-servidor totalmente integrada.',
          links: [
            { label: 'Frontend', url: 'https://github.com/Alli293/piedpiper-frontend' },
            { label: 'Backend', url: 'https://github.com/Alli293/piedpiper-backend' },
          ],
        },
        {
          title: 'App de Finanzas Personales',
          type: 'individual',
          tags: ['React', 'Chart.js'],
          desc: 'Aplicación individual para controlar gastos e ingresos con gráficos dinámicos. Logro: dashboard interactivo en tiempo real.',
        },
        {
          title: 'API REST de Inventario',
          type: 'individual',
          tags: ['Java', 'Spring Boot'],
          desc: 'Servicio back-end para control de inventario con autenticación JWT. Logro: 100% de endpoints documentados.',
        },
        {
          title: 'Landing Page Responsiva',
          type: 'individual',
          tags: ['HTML', 'CSS', 'JS'],
          desc: 'Sitio one-page totalmente responsivo con animaciones. Logro: puntuación 95+ en Lighthouse.',
        },
        {
          title: 'Sistema de Tickets de Soporte',
          type: 'group',
          tags: ['Angular', 'Express', 'MongoDB'],
          desc: 'Proyecto grupal de mesa de ayuda con roles y notificaciones. Logro: gestión de tickets en tiempo real.',
        },
        {
          title: 'Juego Educativo Web',
          type: 'group',
          tags: ['JavaScript', 'Canvas'],
          desc: 'Videojuego grupal para reforzar lógica de programación. Logro: más de 10 niveles jugables.',
        },
      ],
    },
    services: {
      title: 'Servicios y habilidades',
      subtitle: 'Lo que puedo aportar en un equipo de desarrollo.',
      items: [
        {
          title: 'Desarrollo Front-End',
          desc: 'Interfaces modernas y responsivas con React, HTML5 y CSS3.',
        },
        {
          title: 'Desarrollo Back-End',
          desc: 'APIs REST seguras y escalables con Node.js, Java y bases de datos.',
        },
        {
          title: 'Diseño UI/UX',
          desc: 'Diseño limpio, minimalista y accesible siguiendo buenas prácticas.',
        },
        {
          title: 'Diseño Responsivo',
          desc: 'Sitios que se adaptan a móvil, tablet y escritorio.',
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
      tagline: 'Ingeniera de Software · Construyendo la web con propósito.',
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
      name: 'Alison',
      role: 'Software Engineer',
      tagline:
        'Developer focused on building modern, accessible and responsive web experiences.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      scroll: 'Scroll to explore',
    },
    about: {
      title: 'Who am I?',
      subtitle: 'A bit about my background and what I am passionate about.',
      lead: 'Software Engineering student at Universidad CENFOTEC.',
      p1: 'I specialize in front-end and back-end web development, building clean, maintainable and user-centered applications. I love turning ideas into real products.',
      p2: 'Throughout my studies I have worked with different technologies, from HTML, CSS and JavaScript to modern frameworks like React, always caring about accessibility and responsive design.',
      statsProjects: 'Projects',
      statsTech: 'Technologies',
      statsYears: 'Years studying',
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
          title: 'Pied Piper',
          type: 'group',
          tags: ['React', 'Node.js', 'REST API'],
          desc: 'Full-stack group project with a React frontend and a REST API backend. Achievement: fully integrated client-server architecture.',
          links: [
            { label: 'Frontend', url: 'https://github.com/Alli293/piedpiper-frontend' },
            { label: 'Backend', url: 'https://github.com/Alli293/piedpiper-backend' },
          ],
        },
        {
          title: 'Personal Finance App',
          type: 'individual',
          tags: ['React', 'Chart.js'],
          desc: 'Individual app to track expenses and income with dynamic charts. Achievement: real-time interactive dashboard.',
        },
        {
          title: 'Inventory REST API',
          type: 'individual',
          tags: ['Java', 'Spring Boot'],
          desc: 'Back-end service for inventory control with JWT auth. Achievement: 100% documented endpoints.',
        },
        {
          title: 'Responsive Landing Page',
          type: 'individual',
          tags: ['HTML', 'CSS', 'JS'],
          desc: 'Fully responsive one-page site with animations. Achievement: 95+ Lighthouse score.',
        },
        {
          title: 'Support Ticket System',
          type: 'group',
          tags: ['Angular', 'Express', 'MongoDB'],
          desc: 'Group help-desk project with roles and notifications. Achievement: real-time ticket management.',
        },
        {
          title: 'Educational Web Game',
          type: 'group',
          tags: ['JavaScript', 'Canvas'],
          desc: 'Group video game to reinforce programming logic. Achievement: more than 10 playable levels.',
        },
      ],
    },
    services: {
      title: 'Services & skills',
      subtitle: 'What I can bring to a development team.',
      items: [
        {
          title: 'Front-End Development',
          desc: 'Modern responsive interfaces with React, HTML5 and CSS3.',
        },
        {
          title: 'Back-End Development',
          desc: 'Secure and scalable REST APIs with Node.js, Java and databases.',
        },
        {
          title: 'UI/UX Design',
          desc: 'Clean, minimalist and accessible design following best practices.',
        },
        {
          title: 'Responsive Design',
          desc: 'Sites that adapt to mobile, tablet and desktop.',
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
      tagline: 'Software Engineer · Building the web with purpose.',
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
