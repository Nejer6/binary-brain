/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '428px',
      'md': '744px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'full': '25px 25px 50px -12px rgb(0 0 0 / 0.25), -25px -25px 50px -12px rgb(0 0 0 / 0.25), 25px -25px 50px -12px rgb(0 0 0 / 0.25), -25px 25px 50px -12px rgb(0 0 0 / 0.25)'
      }
    },
  },
  plugins: [],
}
