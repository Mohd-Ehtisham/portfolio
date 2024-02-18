/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondary-light)",
        secondaryDark: "var(--color-secondary-dark)",
      },
      fontFamily: {
        custom_font_light: ["custom_font_light"],
        custom_font_regular: ["custom_font_regular"],
        custom_font_medium: ["custom_font_medium"],
        custom_font_bold: ["custom_font_bold"],
      },
      maxWidth: {
        site_width: "1440px",
      },
    },
  },
  plugins: [],
};
