/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1E1F2B',
        primary: {
          green: '#2BA386'
        }
      },
      fontFamily: {
        inter: 'Inter, sans-serif'
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '2.5rem' }]
      }
    }
  },
  plugins: []
}
