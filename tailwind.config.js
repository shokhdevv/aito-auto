/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      },
    },
    extend: {
      animation: {
        'spin-reverse': 'spinReverse 1.5s linear infinite',
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        spinReverse: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        }
      },
      fontFamily: {
        futura: 'var(--font-futura)',
        conquera: 'var(--font-conquera)', 
        goodTiming: 'var(--font-goodTiming)', 
      },
      colors: {
        'currentDark': '#151515',
        'labelText': '#999999',

      },
      screens: {
        '3xl': '1680px',
        "xs": "460px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
