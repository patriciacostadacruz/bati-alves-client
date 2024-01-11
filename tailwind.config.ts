import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainRed: '#9B0000',
        'mainRed-light': '#C41D1D',
        'mainRed-lighter': '#E34141',
        'mainRed-lightest': '#F56C6C',
      },
    },
  },
  plugins: [],
};
export default config
