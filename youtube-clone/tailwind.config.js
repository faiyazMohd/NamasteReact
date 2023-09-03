/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
 
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md':'900px',
        'lg':'1024px',
        'xl':'1313px'
      },
    },
  },
  plugins: [],
}

