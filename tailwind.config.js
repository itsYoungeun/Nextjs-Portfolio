/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage: {
        'light-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(217, 217, 217, 0) 100%)',
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgbm(254, 254, 91, 0.05)',
        'glass-sm': '5px 5px 20px 0 rgbm(254, 254, 91, 0.3)',
      },
      keyframes:{
        'spin-reverse':{
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'}
        },
        'fadeInOut': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        'flash': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation:{
        'spin-slow': 'spin 60s linear infinite',
        'spin-slow-reverse': 'spin-reverse 60s linear infinite',
        'flash-light': 'flash 3s ease-in-out infinite',
      },
      screens:{
        xs: '480px'
      }
    },
  },
  plugins: [],
};
