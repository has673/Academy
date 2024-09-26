import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        F5F9FF: "#F5F9FF",
        text: "#004AAD",
        bg: "#2266C0",
        border: "#004AAD",
      },
      width: {
        card: "15vw",
        img: "1278px",
        "20vw": "13vw",
        "100%": "100%",
      },
      height: {
        card: "15vh",
        img: "908px",
      },
      fontSize: {
        "34px": "34px",
      },
    },
  },
  plugins: [],
};
export default config;
