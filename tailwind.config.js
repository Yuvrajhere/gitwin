module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#080E0B",
        snow: "#FAFAFA",
        dark_slate_gray: "#2B5A2A",
        dark_gray: "#A3A69E",
        dim_gray: "#5A605B",
        silver: "#BBD4A7",
        medium_sea_green: "#48AE4B",
        dark_sea_green: "#88B47B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
