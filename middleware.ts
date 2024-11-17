// Импортируем middleware для обработки интернационализации
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Создаём middleware с использованием локализационных данных
export default createMiddleware(routing);

export const config = {
  // Подробнее про matcher:
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

  // Исключаем API маршруты, статические файлы и изображения из обработки middleware
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|public|dh).*)',
  ],

};

//matcher: ['/((?!ru|en).*)'],