/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#F5252F',
        dark: '#030712',
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

