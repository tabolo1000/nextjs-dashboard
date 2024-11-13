import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link, routing } from '@/i18n/routing';

// Генерация статических параметров для каждой локали
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// Функция для загрузки переводов
async function getMessages(locale: string) {
    try {
        const common = (await import(`./assets/lang/${locale}.json`)).default;
        return common;
    } catch (error) {

        return {}; // Возвращаем пустой объект в случае ошибки
    }
}

// Компонент страницы
export default async function Page({
                                       params: { locale }
                                   }: {
    params: { locale: string };
}) {
    // Устанавливаем локаль для запроса
    setRequestLocale(locale);

    // Загружаем переводы
    const messages = await getMessages(locale);
    debugger
    // Получаем переводы с пространства имён 'ServerComponent'
    const t = await getTranslations({ locale, namespace: 'ServerComponent' });

    return (
        <div>
            <h1>{messages.AboutPage.title}</h1> {/* Выводим заголовок из JSON */}
            <Link href="/about" locale={locale === "en" ? "ru" : "en"}>
                Go!
            </Link>
            <h1>{t('title')}</h1> {/* Выводим перевод из 'ServerComponent' */}
            <p>{t('description')}</p>
        </div>
    );
}