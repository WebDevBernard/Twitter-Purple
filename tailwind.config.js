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
        primary_text: "#334155", // slate-700
        secondary_text: "#7e22ce", // purple-700
        primary_light_text: "#a78bfa", // violet-400
        primary_dark_text: "#64748b", // slate-500
        bg: "#ede9fe", // violet-100
        border: "#8b5cf6", // violet-50
        hover: "#ddd6fe", // violet-200
        hover_border: "#cbd5e1", // slate-300
      },
    },
  },

  plugins: [],
};
