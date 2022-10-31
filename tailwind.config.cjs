/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ash-22": " #E5E5E5",
        "ash-3": "#ABABAB",
        primary: "#00717D",
        ash23: "#FFFFFF80",
        white1: "#F5F5F5",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter"],
        futura: ["Futura"],
      },

      backgroundColor: {
        "ahs-22": "rgba(255, 255, 255, 0.2)",
      },
      borderColor: {
        "ash-22": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};


