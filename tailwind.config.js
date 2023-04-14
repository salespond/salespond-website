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
      },
      fontSize: {
        'heading-xs': '1.125rem', // 18px
        'heading-sm': '1.25rem', // 20px
        'heading-md': '2rem', // 32px
        'heading-lg': '2.8125rem', // 45px
        'heading-xl': '3.875rem', // 62px

        // Pixels
        'custom-xs': '18px',
        'custom-sm': '20px',
        'custom-md': '32px',
        'custom-lg': '45px',
        'custom-xl': '62px',
      },
    },
  },
  plugins: [],
}

