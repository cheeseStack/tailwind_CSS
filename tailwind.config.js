module.exports = {
  mode: 'jit',
  // purge: ['./*.html'],
  content: [
    "./dist/**/*.{html,js}",
    "./index.html.{html,js}",
    "./test.html.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        primary: '#ff6363',
        secondary: {
          100:'#e2e2d5',
          200: '#888883',
        }
      },
      fontFamily: {
      body: ['Nunito'],
      }
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
      '16': 'repeat(16, minmax(0, 1fr))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }
  },
  plugins: [],
}
