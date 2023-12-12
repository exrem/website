import type { Config } from 'tailwindcss'

export default {
  content: [
    './assets/css/tailwind.css',
    './comopnents/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      boxShadow: {
        button: '4px 4px black',
        card: '12px 12px black'
      }
    }
  },
  plugins: [],
} satisfies Config

