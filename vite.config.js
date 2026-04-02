import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        cart: resolve(__dirname, 'cart.html'),
        admin_dashboard: resolve(__dirname, 'admin/dashboard.html'),
        admin_login: resolve(__dirname, 'admin/login.html'),
      },
    },
  },
})
