import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
      Abril: ['Abril Fatface', 'serif'],
      graphik: ['Graphik', 'sans-serif'],
      Serif: ['PT Serif', 'serif'],
    },
    extend: {
      colors: {
        primary: '#CCCEFF',

        secondary: '#181B68',
        success: '#575757',
        box_color: '#1A293E',
      },
    },
  },
  plugins: [],
};
export default config;
