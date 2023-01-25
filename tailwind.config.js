/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "dist/script.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
