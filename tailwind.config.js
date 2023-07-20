/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,js}"
  ],
  theme: {
    extend: {
      color:{
        primary:{
          100: 'hsl(0, 0%, 98%)',
          200: 'hsl(0, 0%, 41%)',
          300: 'hsl(0, 0%, 8%)'
        }
      }
    },
  },
  plugins: [],
}

