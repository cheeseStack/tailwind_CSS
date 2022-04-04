module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./index.html.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
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
  },
  plugins: [],
}
