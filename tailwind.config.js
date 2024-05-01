/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        light: "#f5f8ff",
        dark: "#141c30",
      },
      colors: {
        container: {
          DEFAULT: "#fefefe",
          dark: "#1f2a48",
        },
        primary: "#0079ff",
      },
    },
  },
  plugins: [],
};
