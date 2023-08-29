/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE24B",
        "yellow-p": "#EDD741"
      },
      backgroundImage: {
        secondary: "linear-gradient(145deg, #886AE2 45.75%, #A284F6 100%)",
        "purple-gradient": "linear-gradient(135deg, rgba(61, 46, 149, 0.35) 0%, #3D2E95 100%)"
      },
    },
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
};
