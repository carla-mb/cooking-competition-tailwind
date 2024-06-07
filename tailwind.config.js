/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        'fluid': 'calc(1.325rem + .9vw)',
      },
      colors: {
        'light-green': {
          base: 'hsl(156 60% 59%)',
          light: 'hsl(156, 60%, 65%)',
        },
        'beige': 'rgb(255 247 236)',
        'main-bg': 'hwb(337 66% 22%)',
        'red1': {
          base: 'rgb(235 138 159)',
          light: '	hsl(348, 71%, 93%)',
        },
        'red2': {
          base: 'hsl(337 41% 40%)',
          dark: '	hsl(337 41% 30%)',
        },
        'gold': 'hwb(54 11% 17%)',
        'silver': 'hwb(0 74% 26%)',
        'bronze': 'hwb(32 10% 50%)',
        'dark-blue': 'hsl(193 100% 16%)',
        'salmon': {
          base: 'hsl(359 96% 76%)', 
          dark: 'hsl(359 96% 68%)',   
        },
      },
      fontFamily: {
        ropa: ['Ropa Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

