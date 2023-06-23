module.exports = {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {},
      colors: {
        primary: '#f8f8f8',
        highlight: '#79E1AB',
        desc: '#91DD78',
        logoBg: '#6919ff',
        caption1: '#F7C95F',
        caption2: '#91DD78',
        captionbg: '#232425',
      },
      fontFamily: {
        godo: ['GodoM', 'sans-serif'],
      },
      fontSize: {
        mainTitle: '3vh',
        subTitle: '2.4vh',
        primaryTitle: '2.2vh',
        descSize: '1.75vh',
        extraDesc: '1.5vh',
        stack: '1.3vh',
      },
    },
    keyframes: {
      fadein: {
        '0%': { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
        '100%': { opacity: 1, transform: 'translateZ(0)' },
      },
    },
  },
  plugins: [],
};
