/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'clay': 'inset 10px 10px 20px rgba(0, 0, 0, 0.25), inset -10px -10px 20px rgba(255, 255, 255, 0.1), 10px 20px 30px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
