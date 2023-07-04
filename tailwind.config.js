/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        "black1": "#282D35",
        "black2": "#21222A",
        "white1": "#FFFFFF",
        "darkblue": "#0f48dc",
        "lightblue": "#61DAFB"
      },
      animation : {
        "showdown": "showdown 0.5s linear",
        "fadein" : "fadein 2s linear",
      },
      keyframes : {
        "showdown": {
          "0%": { transform: "translateY(-4rem)" },
        },
        "fadein": {
          "0%": { opacity: "0" }
        }
      }
    },
  },
  plugins: [],
}
