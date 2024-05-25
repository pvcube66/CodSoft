/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
      anta: ["Anta", "sans-serif"],
      anton:["Anton","sans-serif"]
    },
    colors: {
      ptext:"#C7CFF0",
      darkbus:"#05102D",
      textBlue:"#8AB7EB",
      customDark:"#000315",
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
    },},
  },
  plugins: [],
}