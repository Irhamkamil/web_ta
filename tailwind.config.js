/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "quick-sand": ["Quicksand"]
      },
      colors: {
        white1: "#F2FDFF",
        black: "#04323A",
        primer: "#076E80",
        primer2: "#188EA3",
        secondary: "#DC6E1F"
      },
      backgroundImage: {
        home: "url('/src/assets/bg-home.svg')",
        pds: "url('/src/assets/bg-productdetails.svg')"
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("rippleui"), require("flowbite/plugin")]
};
