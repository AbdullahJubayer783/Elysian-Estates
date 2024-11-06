/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silverx': '#F5F5F5',
        'goldx': '#D4AF37',
        'whitex': '#FFFFFF',
        'blackx': '#000000',
        'lightgldx': '#fbf1d2',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["luxury"],
  },
}

