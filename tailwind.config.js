/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: { max: "1023px" }, // Large screens
        md: { max: "769px" }, // Medium screens
        sm: { max: "639px" }, // Small screens
      },
      colors: {
        "regal-blue": "#013F6A",
        "light-grey": "#a2a1a1",
        "dark-blue": "#00356",
      },
      fontFamily: { body: ["Roboto"] },
    },
  },
  plugins: [],
};
