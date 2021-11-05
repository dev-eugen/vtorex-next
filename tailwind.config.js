const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: { 
        colors: {
            primary: colors.indigo,
            secondary: colors.coolGray,
            success: colors.green,
            warning: colors.orange,
            danger: colors.red,
            gray: colors.gray,
            blue: colors.blue,
            orange: colors.orange,
            warmGray: colors.warmGray,
            pink: colors.pink,
            purpule: colors.purpule,
            green: colors.emerald,
            black: colors.black,
            white: colors.white,
            indigo: colors.indigo,
            red: colors.red,
            yellow: colors.yellow,

        },
        extend: {
            fontFamily: {
                body: ['Montserrat']
            },
            width: {
                'fixed': 'calc(100% - 240px)'
            }
        },
    },
    variants: {
        extend: { 
            zIndex: ["responsive", "hover"],
            position: ["responsive", "hover"],
            padding: ["responsive", "last"],
            margin: ["responsive", "last"],
            borderWidth: ["responsive", "last"],
            backgroundColor: ["last", "first", "odd", "responsive", "hover", "dark"],
            borderColor: ["last", "first", "odd", "responsive", "hover", "dark"],
            textColor: ["last", "first", "odd", "responsive", "hover", "dark"],
            boxShadow: ["last", "first", "odd", "responsive", "hover", "dark"],
            borderOpacity: ["last", "first", "odd", "responsive", "hover", "dark"],
            backgroundOpacity: ["last", "first", "odd", "responsive", "hover", "dark"]
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}