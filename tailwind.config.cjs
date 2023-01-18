/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [require("daisyui")],
};
