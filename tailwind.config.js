/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: "DM Sans",
      secondary: "GT Eesti Display Trial",
      tertiary: "Graphik",
    },
    extend: {
      colors: {
        primary: "#2C2C2C",
        secondary: "#F0F0F0",
        tertiary: "#F9FBFC",
        this: "#192832",
        that: "#6E818E",
        well: "#8d8d8d",
      },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary: "#FFC700",
        tertiary: "#192832",
        box: "#E9E2CC",
      },
      backgroundImage: {
        site: "url('./assets/food.png')",
        about: "url('./assets/about.png')",
      },
    },
  },
  plugins: [],
};
