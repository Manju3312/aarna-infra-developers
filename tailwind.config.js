/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          primary: '#800000',
          hover: '#600000',
          dark: '#350000',
          tint: 'rgba(128, 0, 0, 0.08)',
        },
        pine: {
          deep: '#183323',
          moss: '#355442',
          sage: '#55715E',
          badge: '#D9FBE0',
          text: '#0D5C2C',
        },
        gold: {
          champagne: '#D4AF37',
          light: '#F4E0A5',
          vibrant: '#FFFF00',
          border: 'rgba(212, 175, 55, 0.3)',
        },
        obsidian: {
          DEFAULT: '#070709',
          dark: '#050507',
          black: '#070709',
        },
        surface: {
          card: '#0E0E12',
          'card-hover': '#15151C',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Sora', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.15)',
        'maroon-glow': '0 0 35px rgba(128, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

