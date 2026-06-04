/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        'darkroom': '#0A0A0A',
        'darkroom-card': '#141414',
        'champagne': '#D4A574',
        'warm-white': '#F5F5F0',
        'mid-gray': '#888888',
        'dim-gray': '#444444',
      },
      fontFamily: {
        'serif-tc': ['Noto Serif TC', 'serif'],
        'sans-tc': ['Noto Sans TC', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'caveat': ['Caveat', 'cursive'],
      },
      letterSpacing: {
        'wide-cinema': '0.15em',
        'wider-cinema': '0.25em',
      },
    },
  },
  plugins: [],
};