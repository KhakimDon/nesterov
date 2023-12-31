/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
