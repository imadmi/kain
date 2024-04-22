/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        Kodchasan: ['"Kodchasan"', 'sans-serif'],
      },
      fontSize: {
        'base': 'clamp(14px, 4vw, 32px)',
      },
    },
  },
  plugins: [],
}

