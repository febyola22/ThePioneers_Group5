/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inknut Antiqua', 'sans-serif'],
      'serif': ['Inria Serif', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

