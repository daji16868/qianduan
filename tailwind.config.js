/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00704a',
        secondary: '#333333',
        accent: '#f7b633',
        'light-gray': '#f5f5f5',
        'dark-gray': '#666666'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
};
