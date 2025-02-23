import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      animation: {
        'custom-bounce': 'customBounce 2s ease-in-out infinite',
      },
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateX(-2px)' },
          '90%': { transform: 'translateX(2px)' },
        },
      },
      colors: {
        'bg_dark': "#121212",
        'error': "#e63946",
        'text_color': '#2a2a2a',
        'text_color_muted': '#bdbdbd',
        'link_color': '#3a86ff',
        'hover_link_color': '#3366cc',
        'background_ec': '#f0ece2',
        'background_ec_hover': '#d6d2c4',
        'border_color': '#4a4a4a',
        'bg_table_header': '#505050',
        'bg_table_row_odd': 'rgba(80, 80, 80, 0.65)',
        'bg_table_row_even': '#404040',
        'component_background': '#eaeaea',
        'lesson-blue': '#1d4ed8',
        'lesson-blue-hover': '#1e40af',
        'lesson-green': '#10b981',
        'lesson-green-hover': '#047857',
        'lesson-teal': '#14b8a6',
        'lesson-teal-hover': '#0d9488',
        'lesson-yellow': '#fbbf24',
        'lesson-yellow-hover': '#d97706',
        'lesson-red': '#ef4444',
        'lesson-red-hover': '#dc2626',
        'lesson-purple': '#8b5cf6',
        'lesson-purple-hover': '#6d28d9',
        'lesson-pink': '#ec4899',
        'lesson-pink-hover': '#db2777',
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        dark: {
          component_background: '#111827',
          background_hover: '#222222',
          background_ec: '#1f2937',
          background_ec_hover: '#2e2e2e',
          border_color: '#666666',
          dark_error: "#c53030",
          foreground: '#202020',
          card: '#292929',
          text_color: '#f1f1f1',
          text_color_muted: '#9e9e9e',
          accent: '#4f46e5',
          highlight: '#2563eb',
          border: '#444',
          overlay: 'rgba(0, 0, 0, 0.5)',
          focus: '#facc15',
          shadow: 'rgba(0, 0, 0, 0.6)',
          hover_text: '#ffffff',
          hover_bg: '#383838',
          disabled: '#7a7a7a',
          selection: '#4f46e5',
          gradient_start: '#252525',
          gradient_end: '#353535',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
