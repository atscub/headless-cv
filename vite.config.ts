import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set the base so assets resolve correctly when the site is served from /headless-cv
  base: '/headless-cv/',
  plugins: [react()],
})
