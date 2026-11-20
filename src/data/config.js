// ============================================================
// CONFIGURACIÓN PERSONAL - edita estos valores con tus datos
// ============================================================
export const config = {
  nombre: 'Alison',
  apellido: '',
  // Correo donde llegarán los mensajes del formulario de contacto
  email: 'ayeungv@ucenfotec.ac.cr',
  // Número de WhatsApp en formato internacional SIN + ni espacios (ej: 50688887777)
  whatsapp: '50686644448',
  // Redes / espacios digitales
  github: 'https://github.com/aliyenva',
  linkedin: 'https://www.linkedin.com/in/aliyenva/',
  // Habilidades técnicas (nivel 0-100) — basadas en el CV
  skills: [
    { name: 'Java / Spring Boot', level: 85, category: 'backend', icon: '☕' },
    { name: 'Node.js', level: 78, category: 'backend', icon: '🟢' },
    { name: 'C# / .NET', level: 70, category: 'backend', icon: '🔷' },
    { name: 'SQL (MySQL / PostgreSQL / SQLite)', level: 85, category: 'backend', icon: '🗄️' },
    { name: 'JavaScript / TypeScript', level: 88, category: 'frontend', icon: '⚡' },
    { name: 'HTML & CSS / Bootstrap', level: 92, category: 'frontend', icon: '🎨' },
    { name: 'Angular / React', level: 82, category: 'frontend', icon: '⚛️' },
    { name: 'Git / Azure DevOps', level: 90, category: 'devops', icon: '🌿' },
    { name: 'Docker / Jenkins', level: 72, category: 'devops', icon: '🐳' },
    { name: 'GCP', level: 70, category: 'devops', icon: '☁️' },
    { name: 'ServiceNow / Jira', level: 90, category: 'support', icon: '🎫' },
    { name: 'Splunk / Citrix', level: 82, category: 'support', icon: '🔍' },
    { name: 'Postman / Bruno', level: 88, category: 'support', icon: '📮' },
  ],
  stats: {
    projects: 6,
    tech: 25,
    years: 4,
  },
  // Ruta del currículum dentro de /public
  cvFile: './Alison_Yeung_2026_updated.pdf',
}
