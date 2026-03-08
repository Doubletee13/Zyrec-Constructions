/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FBBF24", // Modern Vibrant Amber
        dark: "#0A0A0A",    // Deep Sleek Black
        light: "#FAFAFA",   // Crisp Off-White
        gray: "#64748B",    // Modern Slate Gray
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        display: ['"Outfit"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
