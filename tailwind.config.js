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
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F78F42",
          50: "#FEF7F2",
          100: "#FEECDF",
          200: "#FCD5B7",
          300: "#FABD90",
          400: "#F9A669",
          500: "#F78F42",
          600: "#F56F0C",
          700: "#C15708",
          800: "#8B3E06",
          900: "#552604",
          950: "#3A1A02",
        },
        "primary-focus": {
          DEFAULT: "#EA7C2B",
          50: "#FBE3D2",
          100: "#F9D8BF",
          200: "#F5C19A",
          300: "#F1AA75",
          400: "#EE9350",
          500: "#EA7C2B",
          600: "#C96114",
          700: "#96480F",
          800: "#63300A",
          900: "#301705",
          950: "#160B02",
        },
        secondary: {
          DEFAULT: "#020617",
          50: "#1132C0",
          100: "#0F2DAD",
          200: "#0C2388",
          300: "#091A62",
          400: "#05103D",
          500: "#020617",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        "secondary-focus": {
          DEFAULT: "#3B3C4A",
          50: "#9395A9",
          100: "#888AA0",
          200: "#71738E",
          300: "#5F6177",
          400: "#4D4E61",
          500: "#3B3C4A",
          600: "#22232B",
          700: "#09090C",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        accent: {
          DEFAULT: "#3CC288",
          50: "#C8EEDD",
          100: "#B8E9D4",
          200: "#99DFC1",
          300: "#7AD6AE",
          400: "#5BCC9B",
          500: "#3CC288",
          600: "#2F976A",
          700: "#216C4C",
          800: "#14412E",
          900: "#071710",
          950: "#000101",
        },
        "accent-focus": {
          DEFAULT: "#33A574",
          50: "#ABE5CC",
          100: "#9BE0C2",
          200: "#7CD6B0",
          300: "#5DCD9D",
          400: "#3EC38A",
          500: "#33A574",
          600: "#267A56",
          700: "#194F38",
          800: "#0B241A",
          900: "#000000",
          950: "#000000",
        },
        neutral: {
          DEFAULT: "#020617",
          50: "#1132C0",
          100: "#0F2DAD",
          200: "#0C2388",
          300: "#091A62",
          400: "#05103D",
          500: "#020617",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        "neutral-focus": {
          DEFAULT: "#141624",
          50: "#565E9A",
          100: "#4E568D",
          200: "#404673",
          300: "#313658",
          400: "#23263E",
          500: "#141624",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        base: {
          DEFAULT: "#F6F6F7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F6F6F7",
          300: "#D8D8DD",
          400: "#BBBBC2",
          500: "#9D9DA8",
          600: "#7F7F8D",
          700: "#646471",
          800: "#4A4A53",
          900: "#2F2F35",
          950: "#222226",
        },
        "base-content": {
          DEFAULT: "#181A2A",
          50: "#1132C0",
          100: "#0F2DAD",
          200: "#0C2388",
          300: "#091A62",
          400: "#05103D",
          500: "#181A2A",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
};
