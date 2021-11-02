module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        special: '#160351 ',
        bdazzled: '#235789'
      },
      yellow: {
        special: '#f49f1c'
      },
      gray: {
        special: 	'#cccccc',
        special2: '#bbbbbb'
      },
      red: {
        fireEngine: '#C1292E'
      },
      black: {
        black: '#020100',
        raisin: '#252627'
      },
      white: {
        babyPowder: '#FDFFFC'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
