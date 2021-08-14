module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': `"Inter", Helvetica, Arial, sans-serif`,
      'sub-heading': `"Space Grotesk", "Inter", Helvetica, Arial, sans-serif`
    },
    extend: {
      colors: {
        'primary': '#FA8C4C',
        'dark': '#151518',
        'light': '#fffbf9',
      }
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
    plugins: [],
  }
}
