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
        vector269: "url('./assets/Vector269.png')",
        arrow: "url('./assets/arrow.png')",
        ellipse: "url('./assets/Ellipse7.png')",
      },
      colors: {
        grayText: "#979797",
        whiteText: "#f1f1f1",
        lineColor: "#4d4b4b",
        primaryBg: "#292929",
        secondaryBg: "#161815",
        green: "#1FCC70",
        black: "#000000",
      },
      fontFamily: {
        secondary: "roboto-light",
      },
      screens: {
        "3xl": "1650px",
        hd: "1750px",
      },
      zIndex: {
        5: "5",
        4: "4",
      },
    },
  },
  plugins: [],
};
