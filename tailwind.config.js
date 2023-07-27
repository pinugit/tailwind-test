/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181818',
        text_NS: '#ffffffb3'
      }
    },
  },
  plugins: [],
}

