// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Ensure this line covers your src directory
  ],
  theme: {
    extend: {
      colors: {
        'nala-blue': '#B3D9E0', // Your custom color
        // You might have other custom colors or definitions here, ensure they are correct
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'primary': 'var(--primary)', 
        'primary-foreground': 'var(--primary-foreground)',
        // ... all your other custom colors using CSS variables
      },
      fontFamily: {
        // Ensure these match your layout.tsx variable names
        sans: ['var(--font-source-sans-pro)'], // If Source Sans 3 is your sans font
        serif: ['var(--font-cormorant-garamond)'], // If Cormorant Garamond is your serif font
      },
      // ... any other theme extensions
    },
  },
  plugins: [],
}
export default config