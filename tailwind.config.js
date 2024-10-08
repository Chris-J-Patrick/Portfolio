/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#4A5568",
        accent: "#FF6600",
        background: "#F7FAFC",
        text: "#2D3748",
      },
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        bounceIn: "bounceIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
