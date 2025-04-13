/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'error-dark': '#1a0805', // Darker red tone
        'error-light': '#ff2d2d', // Brighter red
        'error-medium': '#d32f2f', // Medium red
        'error-accent': '#ff6b6b', // Accent red
        'error-warn': '#ffcc00', // Warning yellow
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 45, 45, 0.5), 0 0 10px rgba(255, 45, 45, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(255, 45, 45, 0.8), 0 0 20px rgba(255, 45, 45, 0.4), 0 0 30px rgba(255, 45, 45, 0.2)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
};