/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0a0a0f',
          900: '#111118',
          800: '#1a1a24',
          700: '#2a2a36',
          600: '#3a3a4a',
          500: '#5a5a6e',
          400: '#8a8a9e',
          300: '#c0c0d0',
          200: '#e0e0ea',
          100: '#f0f0f5',
        },
      },
      animation: {
        'slide-in-from-top-5': 'slideInFromTop 0.2s ease-out',
        'slide-in-from-right-5': 'slideInFromRight 0.2s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'move-left-right': 'moveLeftRight 3s linear infinite',
        'move-right-left': 'moveRightLeft 3s linear infinite',
        'move-top-bottom': 'moveTopBottom 3s linear infinite',
        'move-bottom-top': 'moveBottomTop 3s linear infinite',
      },
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        moveLeftRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveRightLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveTopBottom: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        moveBottomTop: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      }
    },
  },
  plugins: [],
}