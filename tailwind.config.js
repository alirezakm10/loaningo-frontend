
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        darkloan: "#000000",
        blueloan: "#18BBC0",
        whiteloan: "#FFF",
        dimloan: "#637381",
      },
    },
    fontFamily: {
      ageo: ["ageoregular", "ageobold", "ageolight"],
    },
  },
  plugins: [],
};

