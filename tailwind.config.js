module.exports = {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {},
      colors: {
        primary: '#f8f8f8',
        highlight: '#79E1AB',
        desc: '#91DD78',
        logoBg: '6919ff',
        caption1: '#F7C95F',
        caption2: '#91DD78',
      },
      fontFamily: {
        godo: ['GodoM', 'sans-serif'],
      },
      fontSize: {
        mainTitle: '2.7vmax',
        subTitle: '2.4vmax',
        primaryTitle: '2.2vmax',
        descSize: '1.75vmax',
        extraDesc: '1.5vmax',
      },
    },
  },
  plugins: [],
};
