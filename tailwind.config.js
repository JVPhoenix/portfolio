/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors  : {
        "black1": "#282D35",
        "black2": "#21222A",
        "white1": "#FFFFFF",
        "darkblue": "#0f48dc",
        "lightblue": "#61DAFB"
      }
    },
  },
  plugins: [],
}
