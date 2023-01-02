/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        screens: {
          xsm: '375px'
        },
        primary: {
          100: 'hsl(193, 38%, 86%)',
          200: 'hsl(150, 100%, 66%)'
        },
        neutral: {
          100: 'hsl(217, 19%, 38%)',
          200: 'hsl(217, 19%, 24%)',
          300: 'hsl(218, 23%, 16%)'
        }
      },
      fontFamily: {
        body: ['Manrope']
      },
      borderRadius: { 
        full: '9999vmax' 
      },
      boxShadow: {
        '3xl': '0 0 25px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
