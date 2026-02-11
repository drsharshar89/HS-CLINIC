import { type Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#020617', // Main background (Deep Void)
                    900: '#0f172a', // Secondary background
                    800: '#1e293b', // Card background
                },
                neon: {
                    cyan: '#06b6d4', // Primary accent (Clinical precision)
                    blue: '#3b82f6', // Secondary accent (Trust)
                    purple: '#8b5cf6', // Tertiary accent (Future/AI)
                },
                glass: {
                    DEFAULT: 'rgba(255, 255, 255, 0.05)',
                    border: 'rgba(255, 255, 255, 0.1)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'], // Cinematic headings
                mono: ['JetBrains Mono', 'monospace'], // Technical data
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
