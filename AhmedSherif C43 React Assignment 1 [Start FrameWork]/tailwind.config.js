/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./index.html"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontSize: {
                '2xl': '1.75rem',
                '3xl': '2rem',
                '4xl': '2.5rem',
            },
            colors: {
                "main": "var(--main)",
                "dark-main": "var(--dark-main)",
                "accent": "var(--accent)",
                "sec": "var(--sec)",
            },
            minHeight: {
                '3/5': '80vh',
            },
        },
    },
    plugins: [],
}

