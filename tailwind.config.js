/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080708',
        blueCrayola: '#6049F8',
        poppy: '#DF2935',
        sunglow: '#FDCA40',
        platinum: '#FFFFFF',
      },
      fontFamily: {
        sansCondensed: ['"Open Sans Condensed"', 'sans-serif'],
        taviraj: ['"Taviraj"', 'serif'],
        heebo: ['"Heebo"', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDiagonally: {
          '0%': { transform: 'translate(-100%, -100%)', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '1' },
        },
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
        slideTop: 'slideTop 0.6s ease-in-out forwards',
        slideBottom: 'slideBottom 0.6s ease-in-out forwards',
        slideDiagonally: 'slideDiagonally 0.6s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}