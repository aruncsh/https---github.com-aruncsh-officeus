/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'card1': '#0097B2',
        'card2': '#FF5757',
        'card3': '#FF914D',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

