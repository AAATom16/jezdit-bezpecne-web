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
        // Perqo brand — teal primary. Tints/shades derived from #2D9EAA.
        brand: {
          50: "#EAF6F7",
          100: "#CDEAEC",
          200: "#A6DBDE",
          300: "#74C5CB",
          400: "#4DB2BA",
          500: "#2D9EAA",
          600: "#247F89",
          700: "#1D6770",
          800: "#1F4E55",
          900: "#1F3A4A",
        },
        // Perqo accent — warm yellow / gold.
        accent: {
          50: "#FFF7E6",
          100: "#FFEFC2",
          200: "#FFE299",
          300: "#FFD470",
          400: "#FFCB62",
          500: "#FFC857",
          600: "#E6AC3A",
          700: "#B8862A",
        },
        // Perqo ink — navy used for headings / header text.
        navy: {
          DEFAULT: "#1F3A4A",
          500: "#1F3A4A",
          700: "#162935",
        },
        // Perqo surface — cream.
        cream: { DEFAULT: "#FFF7E6", 50: "#FFFBF2", 100: "#FFF7E6" },
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
        lift: "0 10px 30px -10px rgba(45, 158, 170, 0.35)",
        focus: "0 0 0 4px rgba(45, 158, 170, 0.2)",
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
        "brand-gradient": "linear-gradient(135deg, #2D9EAA 0%, #4DB2BA 50%, #74C5CB 100%)",
        "hero-radial":
          "radial-gradient(ellipse at top right, rgba(45,158,170,0.15), transparent 60%)",
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
