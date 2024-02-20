/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "540px",
      md: "704px",
      lg: "960px",
      xl: "1536px",
      "2xl": "1920px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {},
};
