/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B60F1",
        lgPrimary: "#8CA5FF",
        aliceblue: "#f0f7fc",
        footerColor: "#00000033",
      },
      backgroundImage: {
        dashboardBG: "url('../public/images/BG.svg')",
        BG2: "url('../public/images/BG2.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
