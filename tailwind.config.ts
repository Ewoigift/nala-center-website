// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quick-silver': '#A7A7A5', // Hex code for Quick Silver
        'chinese-white': '#EDEDDE', // Hex code for CHINESE WHITE
        'baby-powder': '#FCFEFD',   // Hex code for BABY POWDER
        'black-olive': '#3C3C3A',   // Hex code for BLACK OLIVE
      },
      fontFamily: { // Add this new section
        'serif': ['var(--font-cormorant-garamond)', 'serif'],
        'sans': ['var(--font-source-sans-pro)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config