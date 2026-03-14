/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#165DFF',
          dark: '#4080FF',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        text: {
          primary: {
            light: '#1D2129',
            dark: '#E5E6EB',
          },
          secondary: {
            light: '#86909C',
            dark: '#86909C',
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
