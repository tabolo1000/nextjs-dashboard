import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing} from '@/i18n/routing';
//import styles from "@auth/core/src/lib/pages/styles";
//import {param} from "ts-interface-checker";

/*
export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}
*/

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: {locale: string}
}) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as ("en" | "ru"))) {
        notFound();
    }

    //debugger
    setRequestLocale(locale);
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}