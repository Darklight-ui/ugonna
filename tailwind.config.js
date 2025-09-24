// tailwind.config.js
module.exports = {
  darkMode: "class", // 👈 important for manual toggling via class
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
