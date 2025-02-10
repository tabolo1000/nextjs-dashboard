import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const {pathname}  = request.nextUrl;
  const token = request.cookies.get("access_token")?.value; // 🔥 Читаем токен из cookies

  debugger
  // ✅ Если пользователь НЕ авторизован и пытается зайти на `/profile` → редирект на `/login`
  if (!token && pathname.endsWith("/profile")) {
    debugger
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Если пользователь авторизован и пытается зайти на `/login` → редирект на `/profile`
  if (token && pathname.endsWith("/login")) {
    debugger
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // 📌 Продолжаем обработку локализации через `next-intl/middleware`
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // 🔥 Middleware работает на страницах `/login` и `/profile`
    "/login",
    "/profile",

    // 🔥 Поддержка локализации (исключаем API, статику и системные файлы)
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|public|dh).*)",
  ],
};