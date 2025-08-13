/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "767px", // Mobile
      md: "768px", // Tablets
      lg: "1025px", // Laptops & Desktops
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
      },
      colors: {
        primary: "#ffc400",
        secondary: "#e52e06",
        dark: "#000",
        "dark-gray": "#333",
        blue: "#0886cf",
        body: "#999",
        "base-100": "#ffffff",
        "uren-border": "#ddd",
        "gray-bg": "#eee",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      uren: {
        "primary": "#ffc400",
        "secondary": "#e52e06",
        "accent": "#0886cf",
        "neutral": "#333",
        "base-100": "#ffffff",
        "info": "#0886cf",
        "success": "#10b981",
        "warning": "#fbbd23",
        "error": "#e52e06",
        "--body-text": "#999",
        "--uren-border": "#ddd",
        "--gray-bg": "#eee",
      }
    }],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
  }
};
