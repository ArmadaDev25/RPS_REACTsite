/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': '#48494a',
      'Green': '#00df9a',
      'Green-dark': '#02996a',

    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // plugin for animating buttons
  ],
}
