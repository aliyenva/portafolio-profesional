import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: nombre del repositorio, necesario para las rutas en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/portafolio-profesional/',
})
