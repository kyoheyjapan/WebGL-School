/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // デフォルトの色

        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",

        pri: {
          DEFAULT: "hsl(236 100% 50%)",
          d: "hsl(236 100% 33%)",
          l: "hsl(236 100% 66%)",
        },
        primary: {
          DEFAULT: "hsl(236 100% 50%)",
          foreground: "hsl(var(--foreground))",
        },
        sec: {
          DEFAULT: "hsl(108 100% 38%)",
          l: "hsl(108 100% 57%)",
          d: "hsl(108 100% 19%)",
        },
        secondary: {
          DEFAULT: "hsl(108 100% 38%)",
          foreground: "var(--foreground)",
        },
        ter: {
          DEFAULT: "hsl(14 100% 40%)",
          l: "hsl(14 100% 20%)",
          d: "hsl(14 100% 60%)",
        },
        tertiary: {
          DEFAULT: "hsl(14 100% 40%)",
          foreground: "var(--foreground)",
        },
        qua: {
          DEFAULT: "hsl(221 29% 28%)",
          l: "hsl(221 29% 14%)",
          d: "hsl(221 29% 42%)",
        },
        quaternary: {
          DEFAULT: "hsl(221 29% 28%)",
          foreground: "var(--foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /*

        パーツの色

        */
        border: {
          DEFAULT: "hsl(0 0% 89%)",
        },
        bd: {
          DEFAULT: "hsl(0 0% 89%)",
          l: "hsl(0 0% 77%)",
          d: "hsl(0 0% 97%)",
          b: "var(--black)",
          w: "var(--white)",
          a: "var(--primary)",
          e: "var(--border-error)",
          input: "var(--border-input)",
        },
        background: "hsl(38 44% 96%)",
        bg: {
          DEFAULT: "hsl(38 44% 96%)",
          l: "hsl(300 100% 99%)",
          d: "hsl(197 64% 98%)",
          b: "var(--black)",
          w: "var(--white)",
          a: "var(--primary)",
          e: "var(--background-error)",
          input: "var(--background-input-error)",
        },
        tx: {
          DEFAULT: "hsl(221 29% 28%)",
          l: "hsl(221 29% 19%)",
          d: "hsl(221 29% 37%)",
          b: "var(--black)",
          w: "var(--white)",
          a: "var(--primary)",
          h: "hsl(14 100% 72%)",
          e: "var(--text-error)",
        },
        ic: {
          DEFAULT: "hsl(34 10% 88%)",
          a: "var(--primary)",
        },
        negative: {
          DEFAULT: "var(--negative)",
          foreground: "var(--negative-foreground)",
        },
        positive: {
          DEFAULT: "var(--positive)",
          foreground: "var(--positive-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        attention: {
          DEFAULT: "var(--attention)",
          foreground: "var(--attention-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        error: {
          DEFAULT: "var(--error)",
          foreground: "var(--error-foreground)",
        },
        info: {
          DEFAULT: "var(--info)",
          foreground: "var(--info-info-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--info-destructive)",
        },
        required: {
          DEFAULT: "var(--required)",
          foreground: "var(--info-required)",
        },
        hover: {
          DEFAULT: "var(--hover)",
          foreground: "var(--hover-foreground)",
          l: "var(--hover-border)",
          b: "var(--hover-border)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
