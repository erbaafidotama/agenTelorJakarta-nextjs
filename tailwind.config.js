module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        telor: "url('~/static/telor.jpg')",
        "agen-telor": "url('~/static/agen-telur-jakarta.jpg')",
      }),
      colors: {
        "green-tk": "#03ac0e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
