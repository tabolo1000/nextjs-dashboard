// jest.setup.ts
import '@testing-library/jest-dom';
import React from 'react';

/**
 * Файл используется для описания компонент библиотек
 * так-как они будут использоваться во всех тестах
 */

// Определение типов для моков
type RouterMock = {
    push: jest.Mock;
    replace: jest.Mock;
    prefetch: jest.Mock;
    back: jest.Mock;
    forward: jest.Mock;
};

type LinkProps = {
    href: string;
    locale: string;
    children: React.ReactNode;
};

// Мокирование next/navigation
jest.mock('next/navigation', () => ({
        useRouter: (): RouterMock => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
    }),
    usePathname: () => '/',
    useParams: () => ({}),
    useSearchParams: () => new URLSearchParams(),
    useLocale: () => 'ru',
}));

// Мокирование i18n/routing
jest.mock('@/i18n/routing', () => ({
    __esModule: true,
    Link: ({ href, locale, children }: LinkProps) => (
        <a href={href} data-locale={locale} data-testid="language-link">
            {children}
        </a>
    ),
}));

// Подавление предупреждений React в тестах
const originalConsoleError = console.error;
console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && /Warning.*not wrapped in act/.test(args[0])) {
        return;
    }
    originalConsoleError(...args);
};

// Мокирование fetch для тестов
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
        text: () => Promise.resolve(''),
        ok: true,
        status: 200,
        headers: new Headers(),
    } as Response)
);