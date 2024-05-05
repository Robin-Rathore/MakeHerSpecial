/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#fff4e6", // A subtle peach tone for warmth
        SecondaryColor: "#ffd699", // A light golden shade for elegance
        DarkColor: "#cc7a00", // A deeper, warm brown for contrast
        ExtraDarkColor: "#996300", // A rich, earthy tone for emphasis
      },
      
    },
  },
  plugins: [],
};
