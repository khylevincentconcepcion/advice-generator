/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    colors: {
      primaryLightCyan: "hsl(193, 38%, 86%)",
      primaryNeonGreen: "hsl(150, 100%, 66%)",
      neutralGrayishBlue: "hsl(217, 19%, 38%)",
      neutralDarkGrayishBlue: "hsl(217, 19%, 24%)",
      neutralDarkBlue: "hsl(218, 23%, 16%)",
    },
    extend: {
      boxShadow: {
        fullShadow: "0 0 10px 10px",
      },
    },
  },
  plugins: [],
};
