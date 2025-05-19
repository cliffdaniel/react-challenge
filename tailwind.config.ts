import { type Config } from 'tailwindcss';

const config: Config = {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                gradientBackground: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            animation: {
                'gradient-slow': 'gradientBackground 15s ease infinite',
            },
        },
    },
    plugins: [],
};

export default config;
