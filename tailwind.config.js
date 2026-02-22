/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dce4ef',
          200: '#b8c8dc',
          300: '#87a3c4',
          400: '#547ba8',
          500: '#35608d',
          600: '#284d73',
          700: '#23405f',
          800: '#1e364f',
          900: '#1a2d42',
          950: '#0f1929',
        },
        gold: {
          50: '#f0f7f6',
          100: '#d9ebe8',
          200: '#b3d7d1',
          300: '#7ebcb2',
          400: '#5a9d92',
          500: '#45857a',
          600: '#3a6d64',
          700: '#335953',
          800: '#2d4a45',
          900: '#293f3b',
        },
        accent: {
          50: '#f0f7f6',
          100: '#d9ebe8',
          200: '#b3d7d1',
          300: '#7ebcb2',
          400: '#5a9d92',
          500: '#45857a',
          600: '#3a6d64',
          700: '#335953',
          800: '#2d4a45',
          900: '#293f3b',
        },
        cream: '#faf9f6',
        warmWhite: '#fefdfb',
        goldLight: '#ffe600',
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(10, 18, 30, 0.75) 0%, rgba(15, 25, 42, 0.6) 40%, rgba(20, 35, 55, 0.5) 100%)',
        'hero-vignette': 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(10, 18, 30, 0.4) 70%, rgba(8, 14, 24, 0.85) 100%)',
        'section-gradient': 'linear-gradient(180deg, #faf9f6 0%, #f2efe8 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(15, 25, 42, 0.12)',
        'card': '0 4px 20px rgba(15, 25, 42, 0.06)',
        'gold': '0 4px 14px rgba(69, 133, 122, 0.28)',
        'accent': '0 4px 14px rgba(69, 133, 122, 0.28)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
