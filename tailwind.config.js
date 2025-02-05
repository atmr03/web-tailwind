/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "Space"],
      },
      screens: {
        mx: "300px",
      },
    },
  },
  plugins: [],
};
