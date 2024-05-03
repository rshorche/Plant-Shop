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
      },
      animation: {
        toggleMenu: "toggleMenu 0.3s ease-in",
      },
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
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

// animation: {
//   opanMenu: "openMenu 1.2s ease 0s 1 normal none",
// },
// keyframes: {
//   opanMenu: {
//     "0%": {
//       transform: "rotateX(-100deg)",
//       transformOrigin: "top",
//       opacity: "0",
//     },
//     "100%": {
//       transform: "rotateX(0deg",
//       transformOrigin: top,
//       opacity: 1,
//     },
//   },
