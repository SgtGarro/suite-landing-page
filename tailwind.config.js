/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#172339",
        grey: "#49566D",
        cream: "#F3EDE7",
        creamWhite: "#FAF8F6",
        purple: "#A060FF",
        magenta: "#CB30E3",
        orange: "#FFA84E",
      },
      backgroundColor: {
        darkBlue: "#172339",
        grey: "#49566D",
        cream: "#F3EDE7",
        creamWhite: "#FAF8F6",
        purple: "#A060FF",
        magenta: "#CB30E3",
        orange: "#FFA84E",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      backgroundImage: {
        jeremy_small: "url('../assets/image-jeremy-small.webp')",
        pattern_blur: "url('../assets/pattern-blur.svg')",
        pattern_curved_1: "url('../assets/pattern-curved-line-1.svg')",
        pattern_curved_2: "url('../assets/pattern-curved-line-2.svg')",
        jeremy_large: "url('../assets/image-jeremy-large.webp')",
      },
    },
  },
  plugins: [],
};
