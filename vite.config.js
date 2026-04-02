import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Use relative paths for deployment on subpaths (like GitHub Pages)
  build: {
    outDir: 'dist',
  },
})
