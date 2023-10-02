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
        'cagingorchaining-img': "url('./assets/cagingorchaining.jpg')",
        'backyardbreeders-img': "url('./assets/backyardbreeders.jpg')",
        'dogmeattrade-img': "url('./assets/dogmeattrade.jpg')",
        'responsibletourism-img': "url('./assets/responsibletourism.jpg')",
        'donatedog1-img': "url('./assets/donatedog1.jpg')",
        'donatedog2-img': "url('./assets/donatedog2.jpg')",
        'compassiondog1-img': "url('./assets/compassiondog1.jpg')",
        'rabies-img': "url('./assets/rabies.jpg')",
      }
    },
  },
  plugins: [],
}