/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#205A28",
        danger: "#C72B32",
        light: "#FFFFFF",
      }
    },
  },
  plugins: [],
}

