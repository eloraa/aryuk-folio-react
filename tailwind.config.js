/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      flex: {
        'fill': '1 0'
      },
      fontSize: {
        'small': '.65rem'
      },
      colors: {
        'accent': '#f93700',
        'secondary': '#f93700',
        'white': '#dbd5c9',
        'black': '#191919'
      },
      fontFamily: {
        'elegant': ['\'kudryashev-d-excontrast-sans\', sans-serif', { fontFeatureSettings: '\'swsh\'' }]
      }
    },
  },
  plugins: [],
}

