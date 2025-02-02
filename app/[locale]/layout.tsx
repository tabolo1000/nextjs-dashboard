import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing} from '@/i18n/routing';
import {Providers} from "@/app/[locale]/@assets/providers";
import {Language} from "@/i18n/languages";

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: {locale: string}
}) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as (Language.En | Language.Ru))) {
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
                <Providers>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
}