import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors:{
        'container-color': 'rgb(17,116,171)',
        'btn-color-contact': 'rgb(255,122,0)',
        '1st-footer-color': 'rgb(49,47,47)',
        '2nd-footer-color': 'rgb(20,20,20)',
        'color-news': 'rgb(231,231,231)',
        'color-contactus': 'rgb(89,130,168)',
        'color-service': 'rgb(250,243,237)',
        'color-bg-general': 'rgb(255,255,255)'
      }

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
