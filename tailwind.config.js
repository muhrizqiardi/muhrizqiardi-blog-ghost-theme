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
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#FA8C4C',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }
        }
      }
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
