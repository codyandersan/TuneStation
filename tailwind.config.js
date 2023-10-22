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
          900: "#180d3d"
        },
        light: {
          100: "#e6e6e6",
          200: "#c7c7c7"
        }
      }
    },
  },
  daisyui: {
    themes: ["night", "emerald"],
  },
  plugins: [require("daisyui")],
}