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
          DEFAULT: "#272727",
          50: "#494949",
          100: "#828282",
          200: "#2D2D2D",
          300: "#4F4F4F",
          400: "#BDBDBD"
        },
        danger: {
          DEFAULT: "#272727",
          50: "#70FF00",
          200: "#161616",
          300: "rgba(112, 255, 0, 0.55)",
         
        },
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  plugins: [],
};
