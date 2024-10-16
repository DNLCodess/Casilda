/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"], // Use Poppins for sans-serif
        lora: ["Lora", "serif"], // Use Lora for serif
      },
      colors: {
        primary: "#0E1B3B",
      },
    },
  },
  plugins: [],
};
