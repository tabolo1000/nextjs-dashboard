// jest.setup.js
require('@testing-library/jest-dom');

// Мокирование next/navigation
jest.mock('next/navigation', () => ({
    useRouter: () => ({
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

// Подавление предупреждений React в тестах
const originalConsoleError = console.error;
console.error = (...args) => {
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
    })
);