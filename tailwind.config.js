/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure Black & White Only - Ultimate Minimalism
        black: {
          DEFAULT: '#000000',
          50: 'rgba(0, 0, 0, 0.05)',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)',
          950: '#000000',
        },
        white: {
          DEFAULT: '#ffffff',
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
          950: '#ffffff',
        },
        
        // Legacy aliases (all black/white)
        primary: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
          950: '#000000',
        },
        charcoal: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
          950: '#000000',
        },
        platinum: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: '#ffffff',
          600: 'rgba(255, 255, 255, 0.9)',
          700: 'rgba(255, 255, 255, 0.8)',
          800: 'rgba(255, 255, 255, 0.7)',
          900: 'rgba(255, 255, 255, 0.6)',
          950: 'rgba(255, 255, 255, 0.5)',
        },
        steel: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
          950: '#000000',
        },
        
        // Status colors (black/white only)
        success: {
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
        },
        warning: {
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
        },
        error: {
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
        },
        
        // Glass effects
        'glass-light': 'rgba(255, 255, 255, 0.02)',
        'glass-dark': 'rgba(0, 0, 0, 0.8)',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-black': 'rgba(0, 0, 0, 0.5)',
        
        // Simple aliases
        accent: '#ffffff',
        'accent-dark': 'rgba(255, 255, 255, 0.8)',
        background: '#000000',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'primary-dark': '#000000',
        'secondary-dark': '#000000',
        'corporate-primary': '#000000',
        'corporate-secondary': '#ffffff',
        'corporate-accent': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 12s ease-in-out infinite',
        'glow': 'glow 6s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'fade': 'fade 3s ease-in-out infinite alternate',
        'minimal': 'minimal 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.1), 0 0 10px rgba(255, 255, 255, 0.05)' },
          '100%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fade: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        minimal: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.02) rotate(1deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'black-gradient': 'linear-gradient(135deg, #000000 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.7) 100%)',
        'white-gradient': 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)',
        'minimal-gradient': 'linear-gradient(135deg, #000000 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.6) 100%)',
        'contrast-gradient': 'linear-gradient(90deg, #000000 0%, #ffffff 50%, #000000 100%)',
      },
    },
  },
  plugins: [],
} 