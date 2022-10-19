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
        pageDarkBlue: '#11546A',
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#f7a278', opacity: '100%' },
          '50%': { color: '#6daffe', opacity: '100%' },
        },
      },
      animation: {
        colorChange: 'colorChange 10s linear infinite',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      cartoon: ['Lilita One', 'cursive'],
    },
  },
  plugins: [require('daisyui')],
}
