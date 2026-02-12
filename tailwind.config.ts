import { type Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#050505', // Deepest black
                    900: '#0A0A0A', // Card background
                    800: '#141414', // Elevated surfaces
                },
                gold: {
                    200: '#F0E4B8', // Lightest champagne
                    300: '#E8D48B', // Highlight glow
                    400: '#D4AF37', // Primary accent
                    500: '#C5A55A', // Logo gold (anchor)
                    600: '#A68B3E', // Pressed / darker
                    700: '#8B7332', // Deep antique
                },
                glass: {
                    DEFAULT: 'rgba(255, 255, 255, 0.04)',
                    border: 'rgba(255, 255, 255, 0.08)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
