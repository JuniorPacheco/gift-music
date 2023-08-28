/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE24B",
      },
      backgroundImage: {
        secondary: "linear-gradient(145deg, #886AE2 45.75%, #A284F6 100%)",
      },
    },
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
};
