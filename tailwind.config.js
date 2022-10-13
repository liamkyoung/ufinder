/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['dark'],
  },

  theme: {
    extend: {
      colors: {
        pageDefault: '#edf6ff',
        pageLightBlue: '#6daffe',
        pageBlue: '#437fc7',
        pageGray: '#424c55',
        pageOrange: '#f7a278',
        pageGreen: '#419D78',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
}
