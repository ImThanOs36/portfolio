/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#9c1bf2",

        }
      },
      fontFamily: {
        panchang: ["Panchang", "sans-serif"]
      },

    },
    plugins: [],
  }
}