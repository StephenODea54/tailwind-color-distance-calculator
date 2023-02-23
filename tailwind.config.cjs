/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova-regular': ['ProximaNovaRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
