/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b1224",
        secondary: "#111a2e",
        accent: "#e6edf8",
        cta: "#f4f6ff",
        glow: "#f25fa3",
        ink: "#1c2541",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
