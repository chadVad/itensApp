/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
      extend: {},
      fontFamily: {
          serif: ["Lobster Display", ...defaultTheme.fontFamily.sans],
      },
  },
  plugins: [],
}

