/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'brand-color':  '#E07B67',
      'dark-10': '#121214',
      'dark-20': '#17171A',
      'dark-30': '#202024',
      'dark-40': '#252529',
      'dark-50': '#AFABB6',
      'dark-60': '#FFFFFF'
    },
    fontFamily: {
      spaceGrotesk: ['Space Grotesk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}