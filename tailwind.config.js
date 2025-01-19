/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "Space"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(22,121,171,1) 35%, rgba(9,17,121,1) 100%, rgba(93,235,215,1) 100%);",
      },
      // backgroundImage: {
      //   "custom-bg": "url('/img/gambar.png')",
      // },
    },
  },
  plugins: [],
};
