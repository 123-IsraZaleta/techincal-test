/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '1k': '640px',
      '2k': '1080px',
      'qhd': '1440px',
    },
  },
  plugins: [],
}
