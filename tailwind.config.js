/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--text-accent)",
        normal: "var(--text-normal)",
        muted: "var(--text-muted)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 100ms ease-in",
      },
    },
  },
  plugins: [],
};
