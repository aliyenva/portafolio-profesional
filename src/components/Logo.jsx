// Logo personal en SVG (identidad visual del portafolio)
export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Logotipo de Alison"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f9b17a" />
          <stop offset="1" stopColor="#e79868" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="16" fill="#1a2238" />
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="16"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
      />
      <path
        d="M20 44 L32 18 L44 44"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="25"
        y1="36"
        x2="39"
        y2="36"
        stroke="#f5f6fa"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
