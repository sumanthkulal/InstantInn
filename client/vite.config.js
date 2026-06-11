import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 Added back

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // 👈 Added back
  ],
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})