/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'navbar-open': {min: '1070px'},
        'navbar-closed': {max: '1070px'},
        'footer-closed': {max: '700px'},
        'card-slider-open': {max: '700px'},
        'mob-card': {max: '700px'},
      }
    },
  },
  plugins: [],
}

