// lib/theme/tokens.ts
export const tokens = {
  color: {
    base: "#000000",
    baseSurface: "#0a0a0a",
    baseElevated: "#141414",
    baseBorder: "#1f1f1f",
    ink: "#ffffff",
    inkMuted: "#a3a3a3",
    inkSubtle: "#6b6b6b",
    accent: "#c9a24b",
    accentHover: "#d9b566",
    accentActive: "#b48c34",
    accentContrast: "#000000",
  },
  spacing: {
    sectionY: "6rem",
    sectionYLg: "9rem",
    containerX: "1.5rem",
  },
  maxWidth: {
    container: "1280px",
    prose: "65ch",
  },
  radius: {
    sm: "2px",
    md: "4px",
    lg: "8px",
  },
  motion: {
    ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    durationFast: "150ms",
    durationBase: "200ms",
    durationSlow: "320ms",
  },
} as const;

export type Tokens = typeof tokens;