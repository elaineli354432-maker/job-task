/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5efe3',
        ink: '#2f2a24',
        border: '#d8c7a3',
        accent: '#9a4f2f',
        mutedGold: '#b08a3c',
        slateInk: '#3f4b53'
      }
    }
  },
  plugins: []
};
