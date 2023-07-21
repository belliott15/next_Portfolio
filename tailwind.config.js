/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-image": "url('/images/card.png')",
      },
      colors: {
        primary: "330066",
        font: "D2B48C",
        secondary: "660066",
      },
    },
  },
  plugins: [],
};
