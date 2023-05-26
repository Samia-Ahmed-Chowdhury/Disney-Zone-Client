/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#B677DC',
        secondaryColor: '#FFB922',
        nuturalColor:'#E6ADD8',
        paragraphColor: '#5C5C5C',
        littleBlackColor: '#454545',
        btnColor:'#B050EA',
        hoverBtnColor:'#960DE9',
      },
    },
  },
  plugins: [require("daisyui")],
}

