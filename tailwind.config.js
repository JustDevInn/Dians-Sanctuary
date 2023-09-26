/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dogscage-img': "url('./assets/dogs.jpg')",
      }
    },
  },
  plugins: [],
}