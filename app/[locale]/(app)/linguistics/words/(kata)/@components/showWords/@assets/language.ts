import { getLocalizedText } from "@/app/lib/utils";

export const localizedShowWords = (lang: string) => ({
    enterText: getLocalizedText(lang, {
        ru: "Введите буквы или слово!",
        en: "Enter letters or a word!",
    }),
    notFound: getLocalizedText(lang, {
        ru: "Ничего не найдено",
        en: "Nothing found",
    }),
});

export type LocalizedShowWords = ReturnType<typeof localizedShowWords>;