// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        secondary: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.gray-20'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.gray-20'),
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.gray-20'),
              fontWeight: '700',
            },
            h4: {
              color: theme('colors.gray-20'),
              fontWeight: '700',
            },
            p: {
              color: theme('colors.gray-20'),
              fontSize: theme('fontSize.base')
            },
          },
        },
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      primary: '#99cc33',
      'gray-93' : '#ededed',
      'gray-86' : '#dbdbdb',
      'gray-26' : '#424242',
      'gray-20' : '#333333',
      'gray-16' : '#292929',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
