/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          900: "#0f172a"
        }
      }
    },
  },
  plugins: [],
}