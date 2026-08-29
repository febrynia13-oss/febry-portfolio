/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080B10',        // page background
        surface: '#0F151E',    // card / panel background
        'surface-2': '#161E2A',// elevated panel background
        line: '#212B3A',       // hairline borders
        primary: '#6366F1',    // indigo — code keyword accent
        accent: '#22D3EE',     // cyan — code string/highlight accent
        amber: '#F5B049',      // warm accent — used sparingly (comments)
        text: '#E7ECF3',
        muted: '#8996A8',
        faint: '#4C5A6E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at top, rgba(99,102,241,0.14), transparent 60%)',
        'glow-cyan': 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 70%)',
      },
      boxShadow: {
        'soft': '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
        'glow-primary': '0 0 0 1px rgba(99,102,241,0.25), 0 0 32px rgba(99,102,241,0.20)',
        'glow-accent': '0 0 0 1px rgba(34,211,238,0.25), 0 0 32px rgba(34,211,238,0.18)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
