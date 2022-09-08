/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DarkPrimary: "#0D0D0D",
        DarkSecondary: "#222222",
        DarkTertiary: "#1E1E1E",
        primary: "#FEFCFB",
        secondary: "#EAEAEA",
        tertiary: "#D3D3D3",
      }
    },
  },
  plugins: [],
}