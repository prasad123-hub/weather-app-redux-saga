/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
        "gradient-radial-top":
          "radial-gradient(100% 60% at 100% 0%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
