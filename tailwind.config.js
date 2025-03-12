/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silverx': '#000000',
        'goldx': '#000000',
        'whitex': '#FFFFFF',
        'blackx': '#000000',
        'lightgldx': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["corporate"],
  },
}

