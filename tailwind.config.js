/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'green-900': '#29E189',
        'blue-100': '#CAF2FF',
        'blue-900': '#00A3FF',
        'purple-900': '#FFCCFD',
        'red-900': '#f24747',
        'grey-800': '#F9F9F9',
        'grey-900': '#D9D9D9',
      },
      backgroundImage: {
        hospitalBg: "url('./src/assets/images/hospital.png')",
      },
    },
  },
  plugins: [],
};
