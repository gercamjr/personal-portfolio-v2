/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Futuristic palette based on your reference image
        background: '#0a1015',
        accent: '#19e6ff',
        cyan: '#00f6ff',
        teal: '#00bfae',
        card: '#151c23',
        text: '#eaf6fb',
        subtext: '#6be6ff',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'Exo', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        futuristic: '0 0 24px 0 #19e6ff, 0 0 2px 0 #00f6ff',
      },
      borderRadius: {
        futuristic: '0.75rem',
      },
    },
  },
  plugins: [],
}
