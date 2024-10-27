/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "blue-violet": {
          50: "#f1f1fc",
          100: "#e5e6fa",
          200: "#d0d0f5",
          300: "#b4b3ee",
          400: "#9d94e5",
          500: "#8979db",
          600: "#7a5fcc",
          700: "#6e54b5",
          800: "#564291",
          900: "#483b74",
          950: "#2b2343",
        },
        "steel-gray": {
          50: "#f3f3fa",
          100: "#ebeaf5",
          200: "#d9d8ed",
          300: "#c2c0e1",
          400: "#aca6d3",
          500: "#9b8fc5",
          600: "#8977b4",
          700: "#76659d",
          800: "#60547f",
          900: "#504867",
          950: "#2c2738",
        },
        martinique: {
          50: "#f5f5f9",
          100: "#e7e7f2",
          200: "#d6d5e8",
          300: "#b8b8d8",
          400: "#9696c4",
          500: "#817db4",
          600: "#736ba5",
          700: "#6a5f96",
          800: "#5b517c",
          900: "#4b4464",
          950: "#3b364c",
        },
      },
    },
  },
  plugins: [],
};