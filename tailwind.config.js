/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'senac-yellow-40': 'rgba(253, 193, 128, 0.4)',
        'senac-yellow': 'rgba(247, 148, 29)',
        'senac-blue': '#004C94',
      },
      backgroundColor: {
        'senac-yellow-40': 'rgba(253, 193, 128, 0.4)',
        'senac-yellow-70': 'rgba(247, 148, 29, 0.7)',
        'senac-blue': '#004C94',
        'modal-shadow': 'rgba(0, 0, 0, 0.2)',
        
      },
      fontSize: {
        'pp': '10px',
      }
    },
  },
  plugins: [],
}
