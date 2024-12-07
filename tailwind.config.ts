import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',  
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        'tech-primary': {
          50: '#e6f1ff',   
          100: '#b3d7ff',  
          200: '#23a6d5',  
          500: '#0077be',  
          700: '#005a8e',  
        },
        'tech-accent': {
          50: '#f0e6ff',   
          100: '#d1b3ff',  
          200: '#e73c7e',  
          500: '#9c27b0',  
          700: '#6a1b9a',  
        },
        'tech-neutral': {
          50: '#f5f7fa',   
          100: '#e1e5eb',  
          200: '#cbd2d9',  
          500: '#5e6673',  
          700: '#3c4149',  
        },
        'dark-tech-primary': {
          50: '#0a2342',   
          100: '#1f4068',  
          200: '#23a6d5',  
          500: '#2c7bb6',  
          700: '#3c96d1',  
        },
        'dark-tech-accent': {
          50: '#4a1c5c',   
          100: '#6a1b9a',  
          200: '#e73c7e',  
          500: '#c2185b',  
          700: '#d81b60',  
        },
        'dark-tech-neutral': {
          50: '#121212',   
          100: '#1e1e1e',  
          200: '#2c2c2c',  
          500: '#a0a0a0',  
          700: '#e0e0e0',  
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor: {
        'dark-bg-primary': '#121212',
        'dark-bg-secondary': '#1e1e1e',
      },
      textColor: {
        'dark-text-primary': '#e0e0e0',
        'dark-text-secondary': '#a0a0a0',
      },
      borderColor: {
        'dark-border': '#2c2c2c',
      },
      letterSpacing: {
        'tech-wide': '0.05em',   
        'tech-wider': '0.1em'    
      },
      fontSize: {
        'tech-xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
        'tech-sm': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'tech-base': ['1rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'tech-lg': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'tech-xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.05em' }],
        'tech-2xl': ['2rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
        'tech-3xl': ['2.5rem', { lineHeight: '1.1', letterSpacing: '0.05em' }],
        'tech-4xl': ['3rem', { lineHeight: '1', letterSpacing: '0.05em' }]
      },
      boxShadow: {
        'tech-sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'tech-md': '0 4px 8px rgba(0, 0, 0, 0.08)',
        'tech-lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'tech-xl': '0 12px 24px rgba(0, 0, 0, 0.12)',
        'dark-tech-sm': '0 2px 4px rgba(255, 255, 255, 0.05)',
        'dark-tech-md': '0 4px 8px rgba(255, 255, 255, 0.08)',
      },
      backgroundSize: {
        'size-200': '200% 100%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 0%',
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
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        customPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient": "gradient 15s ease infinite",
        "gradient-x": "gradientX 10s ease infinite",
        "gradient-flow": "gradientFlow 5s ease infinite",
        customPulse: 'customPulse 1s ease-in-out infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
