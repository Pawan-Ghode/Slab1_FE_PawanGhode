// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Slab1_FE_PawanGhode/',  // <-- use your repo name here
  plugins: [react()],
})
