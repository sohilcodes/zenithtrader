import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#161616",
        "surface-3": "#1A1A1A",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0C040",
          dark: "#B8960C",
          muted: "#8B7316",
        },
        emerald: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
          muted: "#064E3B",
          glow: "#10B98133",
        },
        border: "#1F1F1F",
        "border-gold": "#D4AF3730",
        muted: "#6B7280",
        subtle: "#374151",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":
          "linear-gradient(135deg, #D4AF37 0%, #F0C040 50%, #B8960C 100%)",
        "gradient-emerald":
          "linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
        "hero-grid":
          "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
        "card-shimmer":
          "linear-gradient(105deg, transparent 40%, rgba(212,175,55,0.08) 50%, transparent 60%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.15), 0 0 60px rgba(212,175,55,0.05)",
        "gold-sm": "0 0 15px rgba(212,175,55,0.2)",
        emerald:
          "0 0 30px rgba(16,185,129,0.15), 0 0 60px rgba(16,185,129,0.05)",
        "emerald-sm": "0 0 15px rgba(16,185,129,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-hover":
          "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        card: "0 4px 24px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-up-delay": "fadeUp 0.6s ease-out 0.2s forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        shimmer: "shimmer 2.5s infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "glow-gold": "glowGold 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "ticker-scroll": "tickerScroll 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(16,185,129,0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(16,185,129,0.3)" },
        },
        glowGold: {
          "0%": { boxShadow: "0 0 20px rgba(212,175,55,0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(212,175,55,0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        tickerScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        borderGlow: {
          "0%": { borderColor: "rgba(212,175,55,0.2)" },
          "100%": { borderColor: "rgba(212,175,55,0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
