module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'tiny': '.65rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
