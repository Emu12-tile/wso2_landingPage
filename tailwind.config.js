/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#010851",
        "secondary":"#FB6C10",
        "tartiary":"#707070",
        "pink":"#EE9AE5",

      },
      boxShadow: {
        'regal-blue': '#243c5a',
      },
      
    },
  },
  plugins: [],
}

