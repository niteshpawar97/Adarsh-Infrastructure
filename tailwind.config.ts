import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0A0F2D",
        foreground: "#EAEAEA",
        primary: "#FFD700",
        "primary-dark": "#B8860B",
        secondary: "#161B40",
        accent: "#1E90FF",
        highlight: "#FF4500",
        "footer-bg": "#060A1E",
        "footer-text": "#B3B3B3",
        "footer-hover": "#FFD700",
        "text-main": "#EAEAEA",
        "text-secondary": "#A8A8A8",
        "card-bg": "#0E1438",
        "card-border": "#1E2555",
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(135deg, #0A0F2D 0%, #161B40 50%, #0A0F2D 100%)",
        "hero-gradient": "linear-gradient(135deg, #0A0F2D 0%, #161B40 40%, #1a2050 100%)",
        "section-gradient": "linear-gradient(180deg, #0A0F2D 0%, #161B40 100%)",
        "card-gradient": "linear-gradient(145deg, #0E1438 0%, #161B40 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        "footer-gradient": "linear-gradient(180deg, #0A0F2D 0%, #060A1E 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "count-up": "fadeUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 215, 0, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" },
        },
      },
      boxShadow: {
        "gold": "0 4px 20px rgba(255, 215, 0, 0.15)",
        "gold-lg": "0 8px 30px rgba(255, 215, 0, 0.25)",
        "card": "0 4px 20px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.4)",
      },
    },
  },

  plugins: [],
} satisfies Config;
