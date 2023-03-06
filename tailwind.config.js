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
    fontFamily: {
      title: ['"Bakbak One"', 'sans-serif'],
      body: ['"Quicksand"', 'sans-serif'],

    },

    extend: {
      dropShadow: {
        'none': '0 0 0 rgba(22, 22, 29, 1)',
        'solid': '.8rem .8rem 0 rgba(22, 22, 29, 1)',
        'sand': '.25rem .25rem 0 rgba(243, 243, 247, 1)',
        'button': '.25rem .25rem 0 rgba(22, 22, 29, 1)',
        '4xl': [
            '0 35px 35px rgba(22, 22, 29, 0.25)',
            '0 45px 65px rgba(22, 22, 29, 0.15)'
        ]
      },
      colors: {
        'sand': '#F3F3F7',
        'sand-dark': '#E7E7EA',
        'light-blue': '#02B0F3',
        'dark': '#16161d',
        'dark-blue': '#1D91BD',
      }

    },
 
  },
  plugins: [],
}