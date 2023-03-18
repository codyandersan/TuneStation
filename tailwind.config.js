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
        },
        light: {
          100: "#e6e6e6",
          200: "#c7c7c7"
        }
      }
    },
  },
  plugins: [],
}