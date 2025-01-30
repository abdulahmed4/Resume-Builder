import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated colors to match the logo
        background: "hsl(218, 47%, 17%)", // Navy blue background
        foreground: "hsl(210, 100%, 98%)", // Light text
        card: {
          DEFAULT: "hsl(218, 47%, 20%)", // Slightly lighter navy blue
          foreground: "hsl(210, 100%, 98%)", // Light text
        },
        popover: {
          DEFAULT: "hsl(218, 47%, 20%)", // Match card color
          foreground: "hsl(210, 100%, 98%)", // Match text
        },
        primary: {
          DEFAULT: "hsl(220, 80%, 55%)", // Blue gradient start
          foreground: "hsl(210, 40%, 98%)", // Light text
        },
        secondary: {
          DEFAULT: "hsl(190, 90%, 65%)", // Cyan gradient end
          foreground: "hsl(210, 40%, 98%)", // Light text
        },
        muted: {
          DEFAULT: "hsl(218, 30%, 25%)", // Muted navy
          foreground: "hsl(210, 40%, 80%)", // Muted light text
        },
        accent: {
          DEFAULT: "hsl(220, 80%, 55%)", // Accent matches primary
          foreground: "hsl(210, 40%, 98%)", // Light text
        },
        destructive: {
          DEFAULT: "hsl(0, 65%, 50%)", // Red for destructive actions
          foreground: "hsl(210, 40%, 98%)", // Light text
        },
        border: "hsl(218, 30%, 25%)", // Muted navy for borders
        input: "hsl(218, 30%, 20%)", // Slightly darker for inputs
        ring: "hsl(220, 80%, 55%)", // Blue for focus rings
        chart: {
          "1": "hsl(220, 70%, 50%)", // Blue for chart
          "2": "hsl(190, 80%, 50%)", // Cyan for chart
          "3": "hsl(280, 70%, 50%)", // Purple for chart
          "4": "hsl(50, 80%, 60%)", // Yellow for chart
          "5": "hsl(340, 70%, 50%)", // Pink for chart
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Use existing radius
        md: "calc(var(--radius) - 2px)", // Adjusted radius
        sm: "calc(var(--radius) - 4px)", // Adjusted radius
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
