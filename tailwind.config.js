const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Sofia Pro", ...defaultTheme.fontFamily.sans],
        sans: ["Neucha", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#F1F1FD",
      },
    },
  },

  plugins: [],
};
