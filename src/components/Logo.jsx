// Logo personal: monograma "AY" con estrella de 4 puntas (kawaii + profesional)
// Colores derivados de la paleta 60-30-10:
//   fondo: #1E3A5F (secundario/azul marino)
//   estrella + detalles: #F472B6 (acento/rosa)
//   letras: #FAFAFC (canvas/blanco limpieza)
export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Logotipo de Alison Yeung — estrella de cuatro puntas con monograma AY"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lgPink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="lgNavy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2C5282" />
          <stop offset="100%" stopColor="#1E3A5F" />
        </linearGradient>
      </defs>

      {/* Fondo circular azul marino (secundario 30%) */}
      <circle cx="32" cy="32" r="30" fill="url(#lgNavy)" />

      {/* Estrella de 4 puntas kawaii (acento 10%) */}
      <path
        d="M32 8
           C32 8 33.5 20 36 24
           C40 28 52 32 52 32
           C52 32 40 36 36 40
           C33.5 44 32 56 32 56
           C32 56 30.5 44 28 40
           C24 36 12 32 12 32
           C12 32 24 28 28 24
           C30.5 20 32 8 32 8Z"
        fill="url(#lgPink)"
        opacity="0.95"
      />

      {/* Monograma "A" — trazo delgado blanco */}
      <path
        d="M24 42 L32 20 L40 42 M27 35 L37 35"
        fill="none"
        stroke="#FAFAFC"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pequeños puntos decorativos kawaii */}
      <circle cx="14" cy="14" r="2" fill="#F472B6" opacity="0.6" />
      <circle cx="50" cy="14" r="2" fill="#F472B6" opacity="0.6" />
      <circle cx="14" cy="50" r="2" fill="#F472B6" opacity="0.6" />
      <circle cx="50" cy="50" r="2" fill="#F472B6" opacity="0.6" />
    </svg>
  )
}
