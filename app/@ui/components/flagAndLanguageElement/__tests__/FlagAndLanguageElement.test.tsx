import {render} from "@testing-library/react";
import FlagAndLanguageElement from "@/app/@ui/components/flagAndLanguageElement/FlagAndLanguageElement";
import {NextIntlClientProvider} from "next-intl";

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
     * Cоздает мок для компонента, экспортируемого по умолчанию (export default).
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
    Link: ({href, locale, children}: { href: string, locale: string, children: React.ReactNode }) => (
        <a href={href} data-locale={locale} data-testid="language-link">
            {children}
        </a>
    ),
}));

/**
 * Общая логика в основном провайдеры и то что передается
 * через контекст или пропсы из далека выносится в отдельную
 * функции так как она может использоваться во всех тестах
 * @param ui
 * @param locale
 */
function renderWithIntl(ui: React.ReactNode, locale = 'en') {
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

test('renders flag icon and language text correctly', () => {
    /**
     *  Деструктурируем результат render для
     * получения необходимых функций
     */
    const {getByTestId, getByText} = renderWithIntl(
        <FlagAndLanguageElement
            currentPath="/about"
            locale="en"
            content="English"
            currentLanguage="ru"
        />
    );

    // Используем полученные функции вместо screen
    const flagIcon = getByTestId('flag-icon');
    expect(flagIcon).toBeInTheDocument();
    expect(flagIcon).toHaveAttribute('data-locale', 'en');

    // Проверяем, что текст языка отображается
    expect(getByText('English')).toBeInTheDocument();
});
