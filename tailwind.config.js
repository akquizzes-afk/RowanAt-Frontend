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
        blue: {
          500: '#3b82f6',
          400: '#60a5fa',
        },
        cyan: {
          500: '#06b6d4',
          400: '#22d3ee',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'cursor-blink': 'cursor-blink 1s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}