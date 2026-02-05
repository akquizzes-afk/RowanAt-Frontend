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
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'move-horizontal': 'moveHorizontal 3s linear infinite',
        'move-horizontal-reverse': 'moveHorizontalReverse 3s linear infinite',
        'move-vertical': 'moveVertical 3s linear infinite 0.75s',
        'move-vertical-delayed': 'moveVertical 3s linear infinite 1.5s',
        'move-vertical-reverse': 'moveVerticalReverse 3s linear infinite 0.75s',
        'move-vertical-reverse-delayed': 'moveVerticalReverse 3s linear infinite 1.5s',
      },
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveHorizontalReverse: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        moveVerticalReverse: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      }
    },
  },
  plugins: [],
}