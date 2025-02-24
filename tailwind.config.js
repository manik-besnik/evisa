import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"sans-serif"', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                'text-primary': '#314252',
                't-secondary': '#556575',
                't-disabled': '#B1B5B8',
                'card-and-hover': '#E1D9C6',
                'main-and-focus': '#F7F4ED',
                'side-and-button': '#EFE9DB',
                'focus-outline': '#E4DECC',
                'main-outline': '#C7BDA8',
                'primary': '#B48723',
                'primary-dark': '#9A741A',
                'warning': '#EE2F2E',
                'success': '#00B47D',
            },
            keyframes: {
                bubble: {
                    "0%, 80%, 100%": { transform: "scale(0.6)", opacity: 0.6 },
                    "40%": { transform: "scale(1)", opacity: 1 },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                bubble: "bubble 1.4s infinite ease-in-out",
                "fade-in": "fadeIn 0.3s ease-out",
            },

        },
    },

    plugins: [forms],
};
