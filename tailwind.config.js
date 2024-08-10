/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que isso esteja presente
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#151414",
      }
    },
  },
  plugins: [],
}
