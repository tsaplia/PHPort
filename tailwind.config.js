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
      width: {
        tab: "calc(90px - 1ch)",
        smtab: "calc(54px - 1ch);",
      },
    },
  },
  plugins: [],
};
