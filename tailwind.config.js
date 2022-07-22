/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '576px',
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      'smxl': '1200px',
      "xl": "1280px",
      "2xl": "1536px",
      "md-2x": "991px",
      "lg-2x": "1199px",
      "xl-2x": "1400px",
      "xxl-2x": "1600px",
    },
  },
  plugins: [],
};
