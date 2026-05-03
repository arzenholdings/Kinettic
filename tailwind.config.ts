// tailwind.config.ts
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
        base: {
          DEFAULT: "#000000",
          surface: "#0a0a0a",
          elevated: "#141414",
          border: "#1f1f1f",
        },
        ink: {
          DEFAULT: "#ffffff",
          muted: "#a3a3a3",
          subtle: "#6b6b6b",
        },
        accent: {
          DEFAULT: "#c9a24b",
          hover: "#d9b566",
          active: "#b48c34",
          contrast: "#000000",
        },
        brand: {
          black: "#000000",
          gold: "#c9a24b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.25", fontWeight: "700" }],
        "heading-md": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "eyebrow": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.18em", fontWeight: "600" }],
      },
      spacing: {
        "section-y": "6rem",
        "section-y-lg": "9rem",
        "container-x": "1.5rem",
      },
      maxWidth: {
        container: "1280px",
        prose: "65ch",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201, 162, 75, 0.4), 0 8px 32px -8px rgba(201, 162, 75, 0.25)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;