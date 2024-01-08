/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        "-1": "-1",
      },
      keyframes: {
        TextPop: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        TextLeave: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100px)" },
        },
        TextSlide: {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        InfoSlide: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "50%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(50%)" },
        },
        SlideLeft: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        SlideRight: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        TextLeave: "TextLeave 0.1s ease-out forwards",
        TextPop: "TextPop 0.5s ease-out forwards",
        TextSlide: "TextSlide 1s ease-out forwards",
        InfoSlide: "InfoSlide 5s linear infinite",
        SlideRight: "SlideRight 0.5s ease-out forwards",
        SlideLeft: "SlideLeft 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
        ".flex-between": {
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        },
        ".border-dark": {
          border: "1px solid #282828",
        },
        ".border-light": {
          border: "1px solid #69696951",
        },
        ".flex-col": {
          display: "flex",
          "flex-direction": "column",
        },

        ".flex-row": {
          display: "flex",
          "flex-direction": "row",
        },
        ".button-hover": {
          color: "rgb(34 197 94)",
          "border-radius": "8px",
          "transition-property": "all",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "150ms",
          background: "rgb(38 38 38)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        "col-gap": (value) => {
          return {
            display: "flex",
            "flex-direction": "column",
            gap: value,
          };
        },
      });
    }),
  ],
};
