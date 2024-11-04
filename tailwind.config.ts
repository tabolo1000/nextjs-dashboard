import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        'lesson-blue': '#3b82f6',       // Синий цвет для урока первого
        'lesson-blue-hover': '#2563eb', // Темнее на два тона

        'lesson-green': '#10b981',      // Зеленый цвет для урока второго
        'lesson-green-hover': '#059669', // Темнее на два тона

        'lesson-teal': '#14b8a6',       // Бирюзовый цвет для урока третьего
        'lesson-teal-hover': '#0d9488', // Темнее на два тона

        'lesson-yellow': '#facc15',     // Желтый цвет для урока четвертого
        'lesson-yellow-hover': '#eab308', // Темнее на два тона

        'lesson-red': '#ef4444',        // Красный цвет для урока пятого
        'lesson-red-hover': '#dc2626',  // Темнее на два тона

        'lesson-purple': '#a855f7',     // Фиолетовый цвет для урока шестого
        'lesson-purple-hover': '#9333ea', // Темнее на два тона

        'lesson-pink': '#ec4899',       // Розовый цвет для урока седьмого
        'lesson-pink-hover': '#db2777', // Темнее на два тона
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
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
