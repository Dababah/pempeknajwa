/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./menu.html",
    "./cart.html",
    "./admin/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#c5a059',
        'gold-dark': '#a6843e',
        'charcoal': '#0a0a0a',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
