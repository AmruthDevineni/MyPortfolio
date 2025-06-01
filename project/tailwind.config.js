/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff', // Primary color
          600: '#005cbf',
          700: '#004999',
          800: '#003366',
          900: '#001a33',
        },
        secondary: {
          50: '#e6fff5',
          100: '#ccffeb',
          200: '#99ffd7',
          300: '#66ffc2',
          400: '#33ffae',
          500: '#00ff9a', // Secondary color
          600: '#00cc7a',
          700: '#00995b',
          800: '#00663d',
          900: '#00331e',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffe0cc',
          200: '#ffc299',
          300: '#ffa366',
          400: '#ff8533',
          500: '#ff6600', // Accent color
          600: '#cc5200',
          700: '#993d00',
          800: '#662900',
          900: '#331400',
        },
        success: {
          500: '#10b981', // Success color
        },
        warning: {
          500: '#f59e0b', // Warning color
        },
        error: {
          500: '#ef4444', // Error color
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};