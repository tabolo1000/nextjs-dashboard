import {getLocalizedText} from "@/app/lib/utils";

export const DerivativesText = (lang: string) => {
    return {
        title: getLocalizedText(lang, {
            en: "Derivatives:",
            ru: "Производные:",
        }),
        placeholder: getLocalizedText(lang, {
            en: "Enter a derivative.",
            ru: "Введите производное.",
        }),
        addButton: getLocalizedText(lang, {
            en: "Add derivative",
            ru: "Добавить производное",
        }),
    };
};

export type DerivativesText = ReturnType<typeof DerivativesText>;
