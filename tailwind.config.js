/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-main-1": "#00204b",
        white: "#fff",
        gainsboro: "#e5e5e5",
        red: "#ff2c00",
      },
      spacing: {},
      fontFamily: {
        "roboto-mono": "'Roboto Mono'",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      "31xl": "3.13rem",
      "11xl": "1.88rem",
      "21xl": "2.5rem",
      "5xl": "1.5rem",
      "13xl": "2rem",
      "8xl": "1.69rem",
      "26xl": "2.81rem",
      "70xl-4": "5.59rem",
      "71xl": "5.63rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
