const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4343",
        base: colors.gray[900],
        component: colors.gray[800],
      },
    },
  },
  plugins: [],
};
