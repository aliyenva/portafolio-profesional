import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: cambia 'portafolio-profesional' por el nombre EXACTO de tu repositorio de GitHub
// para que GitHub Pages resuelva bien las rutas. Ej: si tu repo es "mi-portafolio",
// pon base: '/mi-portafolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portafolio-profesional/',
})
