import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gads/nov25/delhi/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
  },
})