/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "./public/images/twitter.jpg",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
