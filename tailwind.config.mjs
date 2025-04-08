/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "767px", // Mobile
        md: "768px", // Tablets
        lg: "1025px", // Laptops & Desktops
      },
      colors: {
        primary: "#ffc400",
        secondary: "#e52e06",
        dark: "#000",
        "dark-gray":"#333",
        blue: "#0886cf",
        "body": "#999",
        "base-100": "#ffffff",
        "uren-border": "#ddd",
        "gray-bg": "#eee",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes:
      [
        {
          urenTheme: {
            primary: "#ffc400",
            secondary: "#e52e06",
            dark: "#000",
            blue: "#0886cf",
            "body": "#999",
            "base-100": "#ffffff",
            "uren-border": "#ddd",
            "gary-bg": "#eee",
          },
        },
      "light"]
  },
};
