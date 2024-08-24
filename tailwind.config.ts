import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xl: "1200px",
      md: "768px",
    },
    colors: {
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        28: "#282828",
        36: "#363636",
      },
      red: {
        DEFAULT: "#DE2E2D",
        hover: "#C91508",
      },
      gray: {
        f7: "#F7F7F7",
        a9: "#A9A9A9",
        65: "#656565",
        fc: "#FCFCFC",
      },
    },
    boxShadow: {
      button: "0px 4px 6px 0px #00000040",
      aboutCard: "0px 0px 8px 0px #0000001A",
      input: "0px 0px 3px 0px #0000001A",
      header: "0px 4px 4px 0px #0000001A",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
