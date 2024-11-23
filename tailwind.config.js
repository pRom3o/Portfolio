/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-ash': '#dee2e6',
        'custom-ash-2': '#343a40',
      },
      backgroundImage: {
        about:
          'linear-gradient(450deg, rgb(245, 245, 245) 20%, rgb(0, 26, 67, 0.1) 40%, rgb(0, 26, 67, 0.2) 20%, rgb(245, 245, 245) 75%, rgb(245, 245, 245) 100%)',
      },
      height: {
        main: '60vh',
        last: '100px',
      },
      width: {
        main: '80vw',
      },
      fontFamily: {
        // Add your custom font here
        'playwrite-NL': ['"Playwrite NL"', 'cursive'],
        sans: ['Raleway', 'sans-serif'],
        edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
