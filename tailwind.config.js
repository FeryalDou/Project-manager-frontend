/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          200: "#f5f5dc",
          300: "#ede9d4",
          400: "#e5e0cb",
        },
      },
    },
  },
  plugins: [],
};
