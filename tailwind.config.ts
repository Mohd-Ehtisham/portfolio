/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        site_width: "1440px",
      },
      colors: {
        site_color: "#23253a",
      },
    },
  },
  plugins: [],
};
