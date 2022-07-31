/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-russian': '#090b13',
        'body-bg': '#040714'
      },
      backgroundImage: {
        'home-bg': "url('/images/home-background.png')"
      }
    },
  },
  plugins: [],
}
