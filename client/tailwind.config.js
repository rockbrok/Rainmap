module.exports = {

  content: [
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screen: {
      'sm': '428px',
      'md': '640px',
      'lg': '768px',
      'xl': '976px',
    },
    fontFamily: {
      mono: ['Courier New'],
      sans: ['Montserrat']
    },
    extend: {
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}