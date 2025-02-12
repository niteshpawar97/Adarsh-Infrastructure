import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // // 🎨 Color Palette 2: Elegant & Premium (Dark Mode with Gold)
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "#121212", // Dark Mode Black
  //       foreground: "#EAEAEA", // Light Grey Text
  //       primary: "#FFC107", // Gold for Buttons
  //       "primary-dark": "#B8860B", // Dark Gold for Hover
  //       secondary: "#1E1E1E", // Dark Grey Section
  //       accent: "#8C52FF", // Purple Accent
  //       highlight: "#FF4500", // Orange-Red CTA
  
  //       // 🌟 Footer Colors
  //       "footer-bg": "#0F0F0F", // Deep Black for Footer Background
  //       "footer-text": "#B3B3B3", // Light Grey for Footer Text
  //       "footer-hover": "#FFC107", // Gold for Footer Hover Links
  
  //       // 📝 Text Colors
  //       "text-main": "#EAEAEA", // Main Text (White-Grey)
  //       "text-secondary": "#B3B3B3", // Secondary Text (Lighter Grey)
        
  //       // 📌 Header Background
  //       "header-bg": "#1A1A1A", // Almost Black Header
  //     },
  //     backgroundImage: {
  //       "header-gradient": "linear-gradient(to right, #1A1A1A, #B8860B)", // Dark to Gold Gradient
  //       "footer-gradient": "linear-gradient(to right, #0F0F0F, #1E1E1E)", // Dark Footer Gradient
  //     },
  //   },
  // },

  //🌟 Color Palette 1: Royal Blue & Gold (Dark Mode)
  theme: {
    extend: {
      colors: {
        background: "#0A0F2D", // Deep Navy Blue
        foreground: "#EAEAEA", // Light Grey Text
        primary: "#FFD700", // Gold for Buttons & Highlights
        "primary-dark": "#B8860B", // Dark Gold for Hover
        secondary: "#161B40", // Deep Blue for Sections
        accent: "#1E90FF", // Bright Blue Accent
        highlight: "#FF4500", // Orange-Red CTA
  
        // 🌟 Footer Colors
        "footer-bg": "#080C24", // Deep Blue-Black
        "footer-text": "#B3B3B3", // Light Grey
        "footer-hover": "#FFD700", // Gold for Hover Links
  
        // 📝 Text Colors
        "text-main": "#EAEAEA", // Main White-Grey Text
        "text-secondary": "#A8A8A8", // Secondary Light Grey
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to right, #0A0F2D, #FFD700)", // Navy to Gold
        "footer-gradient": "linear-gradient(to right, #080C24, #161B40)", // Dark Blue Gradient
      },
    },
  },

  // //🌟 Color Palette 2: Cyberpunk Purple & Teal (Modern Tech Look)
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "#1A1A1A", // Deep Black
  //       foreground: "#EAEAEA", // Light Grey
  //       primary: "#00E6E6", // Neon Teal
  //       "primary-dark": "#009999", // Darker Teal for Hover
  //       secondary: "#262626", // Dark Grey Sections
  //       accent: "#8C52FF", // Cyberpunk Purple
  //       highlight: "#FF007F", // Neon Pink for CTA
  
  //       // 🌟 Footer Colors
  //       "footer-bg": "#141414", // Dark Grey-Black
  //       "footer-text": "#B3B3B3", // Light Grey
  //       "footer-hover": "#00E6E6", // Neon Teal Hover
  
  //       // 📝 Text Colors
  //       "text-main": "#FFFFFF", // Main White Text
  //       "text-secondary": "#A8A8A8", // Light Grey Secondary Text
  //     },
  //     backgroundImage: {
  //       "header-gradient": "linear-gradient(to right, #1A1A1A, #00E6E6)", // Black to Teal
  //       "footer-gradient": "linear-gradient(to right, #141414, #262626)", // Dark Grey Gradient
  //     },
  //   },
  // },

  // //🌟 Color Palette 3: Earthy Orange & Deep Green (Eco-Friendly Theme)
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "#0D1B1E", // Deep Green-Black
  //       foreground: "#EAEAEA", // Light Grey Text
  //       primary: "#FF9800", // Bright Orange for Buttons
  //       "primary-dark": "#E65100", // Darker Orange for Hover
  //       secondary: "#183D3D", // Dark Green for Sections
  //       accent: "#4CAF50", // Vibrant Green Accent
  //       highlight: "#FDD835", // Yellow-Gold for CTA
  
  //       // 🌟 Footer Colors
  //       "footer-bg": "#0A2626", // Dark Green-Black
  //       "footer-text": "#B3B3B3", // Light Grey
  //       "footer-hover": "#FF9800", // Orange Hover
  
  //       // 📝 Text Colors
  //       "text-main": "#EAEAEA", // White-Grey Text
  //       "text-secondary": "#A8A8A8", // Secondary Grey
  //     },
  //     backgroundImage: {
  //       "header-gradient": "linear-gradient(to right, #0D1B1E, #FF9800)", // Green-Black to Orange
  //       "footer-gradient": "linear-gradient(to right, #0A2626, #183D3D)", // Dark Green Gradient
  //     },
  //   },
  // },
  

  plugins: [],
} satisfies Config;
