/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        primary: {
          50: '#e6fff5',
          100: '#b3ffe0',
          200: '#80ffcc',
          300: '#4dffb8',
          400: '#1affa3',
          500: '#0fc26d', // Main brand color
          600: '#0ca85d',
          700: '#098d4d',
          800: '#07733d',
          900: '#04592e',
        },
        dark: {
          50: '#4a4a4a',
          100: '#3a3a3a',
          200: '#2a2a2a',
          300: '#1a1a1a',
          400: '#141414',
          500: '#0c0c0c', // Main dark background
          600: '#0a0a0a',
          700: '#080808',
          800: '#060606',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Mont', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0fc26d, 0 0 10px #0fc26d' },
          '100%': { boxShadow: '0 0 10px #0fc26d, 0 0 20px #0fc26d, 0 0 30px #0fc26d' },
        },
      },
    },
  },
  plugins: [],
}

