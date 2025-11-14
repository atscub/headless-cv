/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FA4032',
        secondary: '#FA812F',
        tertiary: '#FAB12F',
        background: '#FEF3E2',
        // light blue for accent
        accent: '#3B82F6',
        'text-dark': '#000000',
        'text-gray': '#666666',
        'text-medium': '#333333',
        'border-light': '#e0e0e0',
      },
      fontFamily: {
        sans: [
          'Segoe UI',
          'Tahoma',
          'Geneva',
          'Verdana',
          'sans-serif',
        ],
      },
      boxShadow: {
        cv: '0 0 20px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
