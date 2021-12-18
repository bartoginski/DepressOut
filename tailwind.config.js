module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'sans-serif']
      },
      colors: {
        'primary': '#30E3CA',
        'secondary': '#595dd4',
        'dark-gray': '#2F2E41',
        'light-gray': '#727272',
        'dark-navy': '#302E45'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
