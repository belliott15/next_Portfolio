/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wheat: "rgb(242, 218, 172)",
        sandyBrown: "rgb(241, 166, 101)",
        orange: "rgb(240, 108, 50)",
        cambridgeBlue: "rgb(134, 173, 165)",
        darkCyan: "rgb(39, 140, 151)",
        cerulean: "rgb(22, 109, 143)",
        oxfordBlue: "rgb(2, 36, 82)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
