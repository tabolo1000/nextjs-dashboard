import {setRequestLocale} from "next-intl/server";




async function getMessages(locale: string) {
    try {
        return (await import(`./assets/lang/Layout.${locale}.tsx`)).default;
    } catch (error) {
        return new Error("n18n " + error); // Возвращаем пустой объект в случае ошибки
    }
}

export default async function Layout ({
                                           children,
                                           params: {locale}
                                       }: LayoutProps) {
    setRequestLocale(locale);

    const LayoutLang = await getMessages(locale);
    return (
        <LayoutLang children={children}/>
    );
};




//--------------------------Types--------------------------------

interface LayoutProps {
    children: React.ReactNode;
    params: {locale: string}
}