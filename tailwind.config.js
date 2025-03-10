/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'message-appear': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px) scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        }
      },
      animation: {
        'message-appear': 'message-appear 0.3s ease-out forwards'
      }
    },
  },
  plugins: [],
} 