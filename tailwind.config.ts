import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Устанавливаем поддержку темной темы через класс
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
        'font': '#101010',
        'bg_table_header': '#f6d73b',
        'bg_table_row_odd': 'rgba(246,215,59,0.65)',
        'bg_table_row_even': '#f6d73b',
        'background': 'rgb(30,1,1)',
        'lesson-blue': '#3b82f6',
        'lesson-blue-hover': '#2563eb',
        'lesson-green': '#10b981',
        'lesson-green-hover': '#059669',
        'lesson-teal': '#14b8a6',
        'lesson-teal-hover': '#0d9488',
        'lesson-yellow': '#facc15',
        'lesson-yellow-hover': '#eab308',
        'lesson-red': '#ef4444',
        'lesson-red-hover': '#dc2626',
        'lesson-purple': '#a855f7',
        'lesson-purple-hover': '#9333ea',
        'lesson-pink': '#ec4899',
        'lesson-pink-hover': '#db2777',
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        // Добавляем цвета для темной темы
        dark: {
          background: '#121212',
          foreground: '#1e1e1e',
          card: '#1f2937',
          text: '#ffffff',
          muted: '#a3a3a3',
          accent: '#3b82f6',
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