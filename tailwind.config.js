module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.js', './src/**/*.jsx'],
  },
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      borderRadius: {
        lg: '10px',
        xl: '20px',
      },
      width: {
        7: '1.75rem',
      },
      colors: {
        'green-dark': '#00E7C0',
        'green-light': '#00B492',
        'black-75': 'rgba(0, 0, 0, 0.75)',
        'white-75': 'rgba(255, 255, 255, 0.75)',
        gray: {
          50: '#FAFAFA',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#101010',
        },
      },
      inset: {
        '4': '1rem',
      },
    },
  },
  variants: {
    textColor: ['group-hover', 'responsive', 'hover', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    display: ['responsive', 'hover', 'group-hover'],
    transform: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
