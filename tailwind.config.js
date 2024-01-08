/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C2B7F",
        blue: {
          500: "#0A1933" 
        },
        red: {
          500: "#FF3656"
        }
      }
    },
  },
  plugins: [],
}