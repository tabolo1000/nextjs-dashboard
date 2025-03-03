import {render} from "@testing-library/react";
import {NextIntlClientProvider} from "next-intl";
import {ReactNode} from "react";
import FlagAndLanguageElement from "@/app/@ui/components/display/flagAndLanguageElement/FlagAndLanguageElement";

/**
 *  Почему используем мок вместо реального компонента:
 *      Упрощение, Изоляция, Контроль, Скорость
 *  Jest перехватывает этот импорт используемой компоненты
 *  flagCountriesIcon и вместо реального компонента
 *  подставляет мок-версию(т.е div)
 */
jest.mock('@/app/@ui/components/flagCountriesIcon/FlagCountriesIcon', () => ({
    /**
     * true - указывает Jest, что мокаемый модуль использует
     * ES модули (export/import синтаксис). Это важно, так
     * как модули ES имеют иную структуру,
     * чем обычные модули CommonJS.
     */
    __esModule: true,
    /**
     * Создает 'мок' для компонента, экспортируемого по умолчанию (export default).
     * Функция принимает те же пропсы, что и оригинальный компонент.
     * @param locale
     */
    default: ({locale}: { locale: string }) => (
        <div data-testid="flag-icon" data-locale={locale}>
            {`Flag-${locale}`}
        </div>
    ),
}));

/**
 *      Jest вместо обычного импортирование Link из библиотеки i18n
 *  расположенную по адресу @/i18n/routing именованной компоненты
 *  Link подставляет мою JSX ссылку <a></a>.
 */
jest.mock('@/i18n/routing', () => ({
    __esModule: true,
    Link: ({href, locale, children}: { href: string, locale: string, children: ReactNode }) => (
        <a href={href} data-locale={locale} data-testid="language-link">
            {children}
        </a>
    ),
}));

describe('FlagAndLanguageElement', () => {
    // Базовые пропсы для тестов
    const defaultProps = {
        currentPath: '/dashboard',
        locale: 'en',
        content: 'English',
        currentLanguage: 'en',
    };

    /**
     * Общая логика в основном провайдеры и то что передается
     * через контекст или пропсы из далека выносится в отдельную
     * функции так как она может использоваться во всех тестах
     * @param ui
     * @param locale
     */
    function renderWithIntl(ui: ReactNode, locale = 'en') {
        return render(
            <NextIntlClientProvider locale={locale} messages={{}}>
                {ui}
            </NextIntlClientProvider>
        );
    }

    /**
     * Что тестируем:
     *      Проверяем, что компонент правильно
     *  отображает флаг и текст языка.
     *
     * Зачем:
     *      Это базовая функция компонента -
     *  визуально представлять язык пользователю.
     *  Если что-то сломается в отображении,
     *  пользователь не сможет идентифицировать язык.
     */
    /**
     *  Присутствует в документе с корректными параметрами
     * FlagCountriesIcon
     */
    test('Renders flag icon and language text correctly.', async () => {
        /**
         *  Деструктурируем результат render для
         * получения необходимых функций
         */
        const {getByTestId, getByText} = renderWithIntl(
            <FlagAndLanguageElement {...defaultProps} />
        );

        // ID указывается из мок
        const flagIcon = getByTestId('flag-icon');
        // Он есть в DOM
        expect(flagIcon).toBeInTheDocument();
        // Атрибут data-locale === 'en'
        expect(flagIcon).toHaveAttribute('data-locale', 'en');

        // Проверяем, что текст языка отображается
        expect(getByText('English')).toBeInTheDocument();
    });
    /**
     *  При совпадении текущей локали(currentLanguage) и локали из
     * моего списка(locale) будут применены особые стили(bg-background_ec).
     */
    test('Does not apply active class class when currentLanguage does not match locale.', async () => {
        const props = {
            ...defaultProps,
            currentLanguage: 'fr',
        };

        const {getByRole} = render(
            <FlagAndLanguageElement {...props} />
        );

        const linkElement = getByRole('menuitem');
        expect(linkElement).not.toHaveClass('bg-background_ec');
    });
    /**
     * Один из компонентов Link будет иметь атрибуты:
     * href - ссылку
     * data-locale - локаль
     */
    test('Sets correct locale and href on Link.', async () => {
        const {getByRole} = render(
            <FlagAndLanguageElement {...defaultProps} />
        );
        const link = getByRole('link');

        expect(link).toHaveAttribute('href', '/dashboard');
        expect(link).toHaveAttribute('data-locale', 'en');
    });
    /**
     * Что переданный мой content доходит до DOM
     */
    test('Displays correct content text.', async () => {
        const props = {
            ...defaultProps,
            content: 'France',
            locale: 'fr',
        };

        const {getByText} = render(
            <FlagAndLanguageElement {...props}/>
        )

        expect(getByText('France')).toBeInTheDocument();
    });
    /**
     * Проверка на способность передавать пропсы в 'мок'.
     */
     test('Passes local prop to FlagCountriesIcon.', async () => {
        const props = {
            ...defaultProps,
            locale: 'de'
        }

        const {getByTestId} = renderWithIntl(
            <FlagAndLanguageElement {...props}/>
        );

        const flagIcon = getByTestId("flag-icon")

        expect(flagIcon).toHaveAttribute('data-locale', 'de');

    })
})