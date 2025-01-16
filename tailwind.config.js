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
        page: "33vw",
        tab: "calc(6.2vw - 1ch)",
        "tab-small": "calc(4.2vw - 1ch)"
      },
    },
  },
  plugins: [],
};
