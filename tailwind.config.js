/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        Rajdhani: ["Rajdhani", "sans-serif"],
      },
      colors: {
        footer: "#2E2C73",
      },
    },
  },
  plugins: [],
};
