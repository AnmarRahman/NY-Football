import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fce4b6',
          200: '#fad485',
          300: '#f8c454',
          400: '#f7b82f',
          500: '#f5ac0a',
          600: '#ea9d09',
          700: '#d88907',
          800: '#c77605',
          900: '#a75302',
        },
        secondary: {
          50: '#fff1f0',
          100: '#ffdbd8',
          200: '#ffc3bd',
          300: '#ffaaa2',
          400: '#ff968d',
          500: '#ff8278',
          600: '#f57a70',
          700: '#e66f65',
          800: '#d8655b',
          900: '#c15248',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
export default config