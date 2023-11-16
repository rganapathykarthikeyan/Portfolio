/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      BlackOps: ['Black Ops One', 'sans-serif'],
      Oswald: ['Oswald', 'sans-serif'],
      Pacifico: ['Pacifico', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "BlueBg" : "url('/src/assets/Bg_blue.jpg')"
      }
    },
  },
  plugins: [],
}
