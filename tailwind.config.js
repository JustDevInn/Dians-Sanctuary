/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dogscage-img': "url('./assets/dogs.jpg')",
        'savelivesdog1-img': "url('./assets/savelivesdog1.jpg')",
        'adoptlinkimg-img': "url('./assets/adoptlinkimg.jpg')",
        'changecourseimg-img': "url('./assets/changecourseimg.jpg')",
        'puppycare-img': "url('./assets/puppycare.jpg')",
        'aboutdog-img': "url('./assets/aboutdogimg.jpg')",
      }
    },
  },
  plugins: [],
}