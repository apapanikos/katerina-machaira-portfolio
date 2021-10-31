const colors = require("tailwindcss/colors")
module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
    letterSpacing: {
      tightest: '-0.075em',
      tighter: '-0.05em',
      notmal: '0em',
      wide: '0.05em',
      wider: '0.25em',
      widest: '0.5em'
    }
  },
  important: true,
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
}