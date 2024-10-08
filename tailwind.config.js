/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080708',
        blueCrayola: '#3772FF',
        poppy: '#DF2935',
        sunglow: '#FDCA40',
        platinum: '#E6E8E6',
      },
      fontFamily: {
        sansCondensed: ['"Open Sans Condensed"', 'sans-serif'],
        taviraj: ['"Taviraj"', 'serif'],
        heebo: ['"Heebo"', 'sans-serif'],
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-200%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(200%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-out',
        slideRight: 'slideRight 1s ease-out',
      },
    },
  },
  plugins: [],
}