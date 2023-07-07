/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-montserrat)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },

      colors: {
        primary_800: '#1B1B1B',
        primary_600: '#26293A',
        primary_400: '#373B55',
        secondary_400: '#90909C',
        secondary_300: '#C9C9C9',
        accent_600: '#3A5DE3',
        accent_400: '#5175FF',
        navGradientEnd: '#171D37',
        navGradientStart: '#23283D',
        heroGradientStart: '#A5AFE9',
        heroGradientEnd: '#222E73',
      },

      keyframes: {
        wiggle: {
          '0%, 12.5%, 25%, 100%': { transform: 'rotate(-5deg)' },
          '6.25%, 18.75% ': { transform: 'rotate(25deg)' },
        },
      },

      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
