/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        base: "var(--base)",
        muted: "var(--muted)",
        offWhite: "var(--off-white)",
        dark: "var(--dark)",
        offDark: "var(--off-dark)"
      },
    },
  },
  plugins: [],
};
