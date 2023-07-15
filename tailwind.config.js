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

      colors: {
        primary_800: '#1B1B1B',
        primary_600: '#26293A',
        primary_400: '#373B55',
        secondary_400: '#90909C',
        secondary_300: '#C9C9C9',
        secondary_200: '#EAEAEA',
        accent_600: '#3A5DE3',
        accent_400: '#5175FF',
        navGradientEnd: '#171D37',
        navGradientStart: '#23283D',
        heroGradientStart: '#A5AFE9',
        heroGradientEnd: '#222E73',
        skillsGradientStart: '#23283D',
        skillsGradientEnd: '#171D37',
        skillBarGradientStart: '#373B55',
        skillBarGradientEnd: '#242841',
        skillBarActiveGradientStart: '#CBD6FF',
        skillBarActiveGradientEnd: '#2A50E1',
      },

      keyframes: {
        wiggle: {
          '0%, 12.5%, 25%, 37.5%, 50%, 100%': { transform: 'rotate(-5deg)' },
          '6.25%, 18.75%, 31.25%, 43.75% ': {
            transform: 'rotate(45deg) scale(1.02)',
          },
        },

        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },

          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },

      boxShadow: {
        cardShadow: '10px 10px 18px 0px rgba(0, 0, 0, 0.25)',
        btnShadow: '3px 6px 4px 0px rgba(0, 0, 0, 0.25), inset 0 0 0 0 #3A5DE3',
        btnShadowHover:
          '3px 6px 4px 0px rgba(0, 0, 0, 0.25), inset 15em 0 5em 0 #3A5DE3',
        skillsMenuShadow:
          '10px 10px 20px 0 rgba(0, 0, 0, 0.50), -8px -13px 20px 0 rgba(255, 255, 255, 0.05)',
        aboutPhotoShadow: '-5px 5px 4px 0 rgba(0, 0, 0, 0.25)',
        inputShadow: '3px 3px 4px 0px rgba(0, 0, 0, 0.5)',
      },

      dropShadow: {
        textShadow: '4px 4px 3px rgba(0, 0, 0, 0.50)',
      },

      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
