/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'dark-grey': '#1f2937', // dark grey color
        orange: '#ff5722', // orange accent color
      },
    },
  },
  variants: {
    extend: {
      // Include dark mode variants for background and text colors
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};