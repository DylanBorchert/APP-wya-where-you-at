// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
      screens: {
        sm: '380px',
        md: '420px',
        lg: '680px',
        // or maybe name them after devices for `tablet:flex-row`
        tablet: '1024px',
      },
      extend: {
        colors: {
            'primary': '#6d91d9',
        },
      },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                'centre-item': {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                'debug': {
                    'box-shadow': 'inset 0px 0px 0px 1px #f00',
                },

            });
        }),
    ],
  };