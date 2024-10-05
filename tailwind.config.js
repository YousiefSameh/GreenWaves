/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/Components/Pages/*.{js,jsx,ts,tsx}",
    "./src/Components/UI/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF00",
        secondary: "#32CD32",
        bodyColor: "#111111"
      }
    },
  },
  plugins: [],
}

