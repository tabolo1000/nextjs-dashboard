import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {cookies, headers} from "next/headers";

export default getRequestConfig(async ({requestLocale}) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Получаем заголовки
    const requestHeaders = headers();


    const cookieStore = cookies();
    const currentPath = cookieStore.get('currentPath'); // Предположим, вы сохранили путь в куках
    // Извлекаем путь текущего маршрута из заголовка 'referer'
    const referer = requestHeaders.get('referer');
    console.log('Referer:', referer); // В referer будет полный URL страницы

    const host = requestHeaders.get('path');
    console.log('Host:', host);
    //debugger
    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    let messages= {};

    if(referer?.split("/").at(-1) === "about"){
        messages = {...(await import(`../messages/about/${locale}.json`)).default,}
    }
    if(referer?.split("/").at(-1) === ""){
        messages = {
            ...(await import(`../messages/${locale}.json`)).default,
            // ...(await import(`../app/${locale}/about/assets/lang/${locale}.json`)).default,
        };
    }

    return {
        locale,
        messages: messages
    };
});