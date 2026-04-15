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
        'off-white': '#f0ede8',
        'site-bg': '#080808',
        'green': '#00ff7f',
      },
      fontFamily: {
        'bebas': ['var(--font-bebas)', 'sans-serif'],
        'mono': ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
