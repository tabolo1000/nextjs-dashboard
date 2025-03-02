import {render} from "@testing-library/react";
import ControlPanelHeader from "@/app/@ui/components/controlPanelHeader/ControlPanelHeader";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";

/**
 * Мок для иконки Person2TwoTone из Material UI.
 * Создает SVG элемент с атрибутом data-testid для простого поиска в тестах.
 * Сохраняет className для проверки стилевых правил.
 */
jest.mock('@mui/icons-material/Person2TwoTone', () =>
    function MockPerson2TwoTone(props: {
        "aria-hidden": string,
        "className": string,
    }) {
        return (
            <svg
                data-testid="person-icon"
                // aria-hidden={props['aria-hidden']}
                className={props.className}
            >
                Mock Icon
            </svg>
        );
    }
);

/**
 * Мок для компонента LanguageSwitcher.
 * Имитирует переключатель языков, отображая переданные локали.
 * Выводит данные о локали и содержимом для проверки в тестах.
 */
jest.mock('@/app/@ui/components/languageSwitcher/LanguageSwitcher', () => ({
    __esModule: true,
    default: ({locales}: { locales: Array<Language> }) => {
        return (<div data-testid="language-switcher">
            <p>locale:{locales[0].locale}</p>
            <p>content:{locales[0].content}</p>
            {
                locales.map((locale) => (
                    locale.locale
                )).join(',')
            }
        </div>)
    }
}))

/**
 * Мок для компонента ThemeToggle.
 * Имитирует переключатель темы с чекбоксом, установленным в checked=true.
 * Включает обработчик onChange для предотвращения предупреждений React
 * о непреднамеренном использовании неконтролируемого компонента.
 */
jest.mock('@/app/ui/math/components/ThemeToggle', () => ({
    __esModule: true,
    default: () => {
        return (
            <div data-testid="theme-toggle">
                <p>ThemeToggle</p>
                <input
                    data-testid="theme-toggle-true"
                    checked={true}
                    type="checkbox"
                    onChange={() => {
                    }}
                />
            </div>
        )
    }
}))

/**
 * Тестовый набор для компонента ControlPanelHeader.
 * Проверяет корректное отображение, стилизацию и функциональность компонента.
 */
describe('ControlPanelHeader', () => {
    /**
     * Тестовые данные для языков, используемые по умолчанию в большинстве тестов.
     */
    const languages: Array<Language> = [
        {locale: 'en', content: 'English'},
        {locale: 'ru', content: 'Русский'},
    ]

    /**
     * Проверяет, что все дочерние компоненты корректно отображаются в ControlPanelHeader.
     * Тест проверяет наличие в DOM LanguageSwitcher, ThemeToggle, Link и иконки Person2TwoTone.
     */
    test('Renders all components correctly', () => {
        const {getByTestId} = render(<ControlPanelHeader languages={languages}/>);

        // Check if all components are rendered
        expect(getByTestId('language-switcher')).toBeInTheDocument();
        expect(getByTestId('theme-toggle')).toBeInTheDocument();
        expect(getByTestId('language-link')).toBeInTheDocument();
        expect(getByTestId('person-icon')).toBeInTheDocument();
    });

    /**
     * Проверяет корректное применение пользовательского класса к контейнеру.
     * Убеждается, что:
     * 1. Переданный пользовательский класс применяется к контейнеру
     * 2. Значение по умолчанию не применяется при передаче собственного класса
     */
    test('Applies custom className correctly', () => {
        const customClass = "test-custom-flex-class";
        const {container} = render(
            <ControlPanelHeader
                languages={languages}
                className={customClass}
            />
        );

        const navElement = container.querySelector(`[role="navigation"]`);
        expect(navElement).toHaveClass(customClass);
        expect(navElement).not.toHaveClass("flex items-center gap-4");
    });

    /**
     * Проверяет, что компонент LanguageSwitcher получает правильные данные о локалях.
     * Тест создает специальный набор локалей и проверяет, что их значения
     * корректно отображаются в замоканном компоненте LanguageSwitcher.
     */
    test('Language switcher receives correct locales', () => {
        const testLanguages = [
            {locale: 'en-test', content: 'English Test'}
        ];

        const {getByText} = render(
            <ControlPanelHeader languages={testLanguages}/>
        );

        expect(getByText("locale:en-test")).toBeInTheDocument();
        expect(getByText("content:English Test")).toBeInTheDocument();
    });

    /**
     * Проверяет, что переключатель темы корректно отображается и
     * находится в правильном состоянии.
     * Тест подтверждает, что чекбокс с атрибутом checked=true
     * присутствует в DOM.
     */
    test('Switcher toggle theme', () => {
        const {getByTestId} = render(
            <ControlPanelHeader
                languages={languages}
            />
        );

        expect(getByTestId("theme-toggle-true")).toBeInTheDocument()
    })

    /**
     * Проверяет, что ссылка авторизации корректно отображается и содержит
     * требуемый атрибут href.
     * Тест подтверждает, что ссылка действительно является интерактивным элементом
     * с указанным URL-адресом.
     */
    test('Link is active and work', () => {
        const {getByTestId} = render(
            <ControlPanelHeader
                languages={languages}
            />
        );

        expect(getByTestId("language-link")).toHaveAttribute('href');
    });
})