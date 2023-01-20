/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oxygen: "Oxygen",
                georgia: "Georgia",
                openSans: "Open Sans",
                moon: "Moon Dance",
            },
        },
    },
    plugins: [],
};
