/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softcyan: "hsl(174, 77%, 80%)",
          strongcyan: "hsl(174, 86%, 45%)",
          lgrayishred: "hsl(14, 92%, 95%)",
          lightred: "hsl(15, 100%, 70%)",
          paleblue: "hsl(226, 100%, 87%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          vpaleblue: "hsl(230, 100%, 99%)",
          lgrayishblue: "hsl(224, 65%, 95%)",
          lgrayishbluetbg: "hsl(223, 50%, 87%)",
          grayishblue: "hsl(225, 20%, 60%)",
          dsaturatedblue: "hsl(227, 35%, 25%)",
        }
      },

      fontFamily: {
        body: ["Manrope"]
      },

      backgroundImage: {
        'back-image': `url(${path.resolve(__dirname, 'src/assets/images/bg-pattern.svg')})`,
      }
    },
  },
  plugins: [],
}