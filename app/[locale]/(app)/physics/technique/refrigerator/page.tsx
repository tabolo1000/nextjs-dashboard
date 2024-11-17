import {setRequestLocale} from "next-intl/server";


export async function getMessages(locale: string) {
    try {
        return (await import(`./assets/lang/${locale}.tsx`)).default;
    } catch (error) {
        return new Error("n18n " + error); // Возвращаем пустой объект в случае ошибки
    }
}

export default async function Refrigerator_info({
                                                 params: { locale }
                                             }: {
    params: { locale: string };
}) {
    setRequestLocale(locale);

    const Refrigerator = await getMessages(locale);
    return (
        <div><Refrigerator /></div>
    );
}


