/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'solid': '8px 8px 0 rgba(0, 0, 0, 1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }

    },
    colors: {
      'gray': '#F3F3F7',
      'gray-dark': '#E7E7EA',
      'light-blue': '#02B0F3',
      'black-text': '#07031E',
      'dark-blue': '#1D91BD',
    },
  },
  plugins: [],
}