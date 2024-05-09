/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        toggleMenu: {
          "0%": {
            transform: "rotateX(-100deg)",
            "transform-origin": "top",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0deg)",
            "transform-origin": "top",
            opacity: "1",
          },
        },
        rotateLeaf: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(-360deg)",
          },
        },
      },
      animation: {
        toggleMenu: "toggleMenu 0.3s ease-in",
        rotateLeaf: "rotateLeaf 3s linear infinite ",
      },
      colors: {
        orange: "#F48148",
        green: "#809D79",
        cream: "#F9ECDD",
        black: "#3D3D3D",
        gray: "#6F6E73",
        success: "#00C566",
        error: "#FF4747",
        warning: "#FACC15",
        white: "#ffffff",
        green2: "#B8F8AD",
        green3: "#63AC51",
      },
      fontFamily: {
        Nazanin: "Nazanin",
        YeKAN: "YeKAN",
        KoodakBold: "KoodakBold",
        Gandom: "Gandom",
      },
    },
    // plugins: [
    //   function ({ addVariant }) {
    //     addVariant("child", "& > *");
    //     addVariant("child-hover", "& > *:hover");
    //   },
    // ],
  },
};
