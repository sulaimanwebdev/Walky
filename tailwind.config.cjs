/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Roboto: ["Roboto", "cursive"],
      },

      colors:{
        walkkyBlue: "#2367B8",
        prussian: "#083251",
        yale: "#0A4E92",
        walkyOrange: "#E17918",
        steel: "#4683B6",
        hospitalGreen: "#1A998E",
        lightTeal: "#2CC3C4",
      }
    },
  },

  plugins: [],
}
