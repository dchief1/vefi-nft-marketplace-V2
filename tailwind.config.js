/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './styles/**/*.css'],
  theme: {
    backgroundImage: {
      gradiented: 'linear-gradient(120deg, rgba(198, 250, 88, .52), #03015A 16.3777452416%)'
    },
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true
  }
};
