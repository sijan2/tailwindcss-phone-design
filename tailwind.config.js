module.exports = {
  content: [
    "index.html"
    ],
  theme: {
    extend: {
      fontFamily: {
  choco: [
    'Chococooky'
  ],
},
    },
  },
  plugins: [
    require("@tailwindcss/typography")
    ],
}
