import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';

// Расширяем типы Jest для поддержки кастомных матчеров
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
            toHaveAttribute(attr: string, value?: string): R;
            toHaveClass(className: string): R;
        }
    }
}

// Мокируем зависимости
jest.mock('next-intl', () => ({
    useLocale: jest.fn(),
}));

jest.mock('@/i18n/routing', () => ({
    usePathname: jest.fn(),
}));

// Мокируем базовую кнопку
jest.mock('@/app/ui/math/components/Base_button', () => ({
    Base_button: ({ children, onClick, classStyle, ...props }: any) => (
        <button
            onClick={onClick}
            data-testid="base-button"
            className={classStyle}
            data-class-style={classStyle}
            {...props}
        >
            {children}
        </button>
    ),
}));

// Мокируем компонент FlagCountriesIcon
jest.mock('@/app/@ui/components/flagCountriesIcon/FlagCountriesIcon', () => ({
    __esModule: true,
    default: ({ locale }: { locale: string }) => (
        <div data-testid="flag-icon">{`Flag-${locale}`}</div>
    ),
}));

// Мокируем компонент LanguageMenuItems
jest.mock('@/app/@ui/components/languageMenuItems/LanguageMenuItems', () => ({
    __esModule: true,
    default: ({
                  onClose,
                  locales,
                  currentPath,
                  currentLanguage
              }: {
        onClose: () => void,
        locales: Array<{ locale: string, content: string }>,
        currentPath: string,
        currentLanguage: string
    }) => (
        <div data-testid="language-menu-items">
            {locales.map((loc) => (
                <div key={loc.locale} data-locale={loc.locale} data-content={loc.content} data-path={currentPath} data-current={currentLanguage}>
                    {loc.content}
                </div>
            ))}
            <button onClick={onClose} data-testid="close-button">Close</button>
        </div>
    ),
}));

// Мокируем Material UI компоненты
jest.mock('@mui/material', () => {
    return {
        Fade: ({ children }: { children: React.ReactNode }) => <div data-testid="fade-transition">{children}</div>,
        Popover: (props: {
            open: boolean,
            children: React.ReactNode,
            onClose: () => void,
            anchorEl: HTMLElement | null,
            TransitionComponent?: React.ComponentType<any>,
            anchorOrigin?: {
                vertical: string,
                horizontal: string
            },
            transformOrigin?: {
                vertical: string,
                horizontal: string
            },
            disableScrollLock?: boolean,
            id?: string
        }) => {
            const {
                open,
                children,
                anchorEl,
                disableScrollLock,
                id,
                // Деструктурируем остальные пропсы
                ...otherProps
            } = props;

            // Возвращаем Popover контент только если открыт и есть anchorEl
            return open && anchorEl ? (
                <div data-testid="popover" id={id} data-disable-scroll-lock={disableScrollLock ? 'true' : 'false'}>
                    {children}
                </div>
            ) : null;
        }
    };
});

describe('LanguageSwitcher Component', () => {
    const mockLocales = [
        { locale: 'en', content: 'English' },
        { locale: 'ru', content: 'Русский' },
        { locale: 'de', content: 'Deutsch' },
    ];

    beforeEach(() => {
        // Устанавливаем значения моков по умолчанию перед каждым тестом
        (useLocale as jest.Mock).mockReturnValue('en');
        (usePathname as jest.Mock).mockReturnValue('/');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders correctly with default locale', () => {
        render(<LanguageSwitcher locales={mockLocales} />);

        // Проверяем, что компоненты отрендерились
        expect(screen.getByTestId('base-button')).toBeInTheDocument();
        expect(screen.getByTestId('flag-icon')).toBeInTheDocument();
        expect(screen.getByText('Flag-en')).toBeInTheDocument();

        // Проверяем, что меню изначально закрыто
        expect(screen.queryByTestId('popover')).not.toBeInTheDocument();
    });

    test('opens language menu on button click', () => {
        render(<LanguageSwitcher locales={mockLocales} />);

        // Кликаем по кнопке переключения языка
        fireEvent.click(screen.getByTestId('base-button'));

        // Проверяем, что меню открылось
        expect(screen.getByTestId('popover')).toBeInTheDocument();
        expect(screen.getByTestId('language-menu-items')).toBeInTheDocument();
    });

    test('closes language menu when close handler is called', () => {
        render(<LanguageSwitcher locales={mockLocales} />);

        // Открываем меню
        fireEvent.click(screen.getByTestId('base-button'));
        expect(screen.getByTestId('popover')).toBeInTheDocument();

        // Закрываем меню через кнопку закрытия
        fireEvent.click(screen.getByTestId('close-button'));

        // Проверяем, что меню закрылось
        expect(screen.queryByTestId('popover')).not.toBeInTheDocument();
    });

    test('passes correct props to LanguageMenuItems', () => {
        (useLocale as jest.Mock).mockReturnValue('ru');
        (usePathname as jest.Mock).mockReturnValue('/about');

        render(<LanguageSwitcher locales={mockLocales} />);

        // Открываем меню
        fireEvent.click(screen.getByTestId('base-button'));

        // Проверяем, что компонент LanguageMenuItems получил правильные props
        const menuItems = screen.getAllByText(/(English|Русский|Deutsch)/);
        expect(menuItems).toHaveLength(3);

        // Проверка корректных данных у элементов меню
        const englishItem = screen.getByText('English').closest('div');
        if (englishItem) {
            expect(englishItem).toHaveAttribute('data-locale', 'en');
            expect(englishItem).toHaveAttribute('data-content', 'English');
            expect(englishItem).toHaveAttribute('data-path', '/about');
            expect(englishItem).toHaveAttribute('data-current', 'ru');
        }
    });

    test('renders with different locale', () => {
        (useLocale as jest.Mock).mockReturnValue('de');

        render(<LanguageSwitcher locales={mockLocales} />);

        // Проверяем, что флаг соответствует установленной локали
        expect(screen.getByText('Flag-de')).toBeInTheDocument();
    });

    test('accessibility attributes are set correctly', () => {
        render(<LanguageSwitcher locales={mockLocales} />);

        const button = screen.getByTestId('base-button');
        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(button).toHaveAttribute('aria-haspopup', 'menu');
        expect(button).toHaveAttribute('aria-label', 'Select language');

        // Открываем меню и проверяем, что атрибут aria-expanded изменился
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    test('applies correct CSS classes', () => {
        render(<LanguageSwitcher locales={mockLocales} />);

        // Проверка наличия CSS классов
        const container = screen.getByTestId('base-button').closest('div');
        if (container) {
            expect(container).toHaveClass('relative inline-block text-left');
        }

        // Проверяем, что правильный класс был передан в Base_button через атрибут data-class-style
        const button = screen.getByTestId('base-button');
        expect(button).toHaveAttribute('data-class-style', 'button_to px-2');
    });

    test('passes disableScrollLock prop to Popover', () => {
        render(<LanguageSwitcher locales={mockLocales} />);

        // Открываем меню
        fireEvent.click(screen.getByTestId('base-button'));

        // Проверяем, что Popover получил disableScrollLock
        const popover = screen.getByTestId('popover');
        expect(popover).toHaveAttribute('data-disable-scroll-lock', 'true');
    });
});