import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#070709",
          900: "#0c0d10",
          800: "#13151a",
          700: "#1c1f26",
          600: "#262a33",
          500: "#373c47",
        },
        electric: {
          400: "#5cd6ff",
          500: "#22b8ff",
          600: "#0095e6",
        },
        cyan: {
          glow: "#7df9ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(7,7,9,0) 0%, rgba(7,7,9,1) 100%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(34,184,255,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,184,255,0.25)",
        "glow-strong": "0 0 80px rgba(34,184,255,0.45)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        streak: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100vw)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        streak: "streak 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
