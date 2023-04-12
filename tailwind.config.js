/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9600',
        'accent-1': '#000000',
        'accent-2': '#000822',
        'paragraph': '#848B90',
      }
    },
  },
  plugins: [],
}

