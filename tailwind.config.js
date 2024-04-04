/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
      },
    },
    extend: {
      colors: {
        ThemBlack: "rgb(57,57,57);",
      },
    },
  },
  plugins: [],
};
