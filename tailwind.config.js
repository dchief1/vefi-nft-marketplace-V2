/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './styles/**/*.css', './hooks/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradiented: 'linear-gradient(0deg, #020117, #020117), linear-gradient(0deg, #121212, #121212), #03015A;'
      }
    },
    fontFamily: {
      outfit: ['Outfit'],
      monumentExtended: ['Monument Extended']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true
  }
};
