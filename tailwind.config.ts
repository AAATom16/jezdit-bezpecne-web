import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        border: "var(--border)",
        surface: "var(--surface)",
        // Perqo brand — teal primary (#00A79D). Tints/shades derived from it.
        brand: {
          50: "#E6F6F5",
          100: "#C2EAE7",
          200: "#8FDAD4",
          300: "#5BC8C0",
          400: "#33B5AC",
          500: "#00A79D",
          600: "#00897F",
          700: "#006D65",
          800: "#0B1D3A",
          900: "#0B1D3A",
        },
        // Perqo accent — slate (secondary / muted). No yellow.
        accent: {
          50: "#EEF2F6",
          100: "#DDE6EE",
          200: "#C0D2E0",
          300: "#9FBAD0",
          400: "#86A7C2",
          500: "#6D8FAE",
          600: "#577693",
          700: "#445C74",
        },
        // Perqo ink — navy used for headings / header text.
        navy: {
          DEFAULT: "#0B1D3A",
          500: "#0B1D3A",
          700: "#081428",
        },
        // Perqo surface — light.
        cream: { DEFAULT: "#F2F5F7", 50: "#F8FAFB", 100: "#F2F5F7" },
        charity: { 100: "#FCE7F3", 500: "#EC4899", 700: "#BE185D" },
        warn: { 100: "#FEF3C7", 500: "#F59E0B", 700: "#B45309" },
        danger: { 100: "#FEE2E2", 500: "#EF4444", 700: "#B91C1C" },
        info: { 100: "#DBEAFE", 500: "#3B82F6", 700: "#1D4ED8" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 4px 12px -2px rgba(15, 23, 42, 0.08)",
        lift: "0 10px 30px -10px rgba(0, 167, 157, 0.35)",
        focus: "0 0 0 4px rgba(0, 167, 157, 0.2)",
      },
      transitionDuration: {
        quick: "150ms",
        DEFAULT: "250ms",
        slow: "400ms",
        paced: "600ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00A79D 0%, #33B5AC 50%, #6D8FAE 100%)",
        "hero-radial":
          "radial-gradient(ellipse at top right, rgba(0,167,157,0.15), transparent 60%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.25)" },
        },
      },
      animation: {
        "fade-in": "fade-in 400ms cubic-bezier(0,0,0.2,1) both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
