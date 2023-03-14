/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          
          900: "#2d1b69"
        }
      }
    },
  },
  plugins: [],
}