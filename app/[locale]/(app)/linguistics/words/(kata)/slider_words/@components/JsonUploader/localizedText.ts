import {getLocalizedText} from "@/app/lib/utils";

export const localizedText = (lang: string, placeholder: string) => {
    return (
        {
            title: getLocalizedText(lang, {
                en: "Upload Data (JSON):",
                ru: "Загрузить данные (JSON):",
            }),
            invalidJson: getLocalizedText(lang, {
                en: "Invalid JSON format. Make sure you enter a valid object.",
                ru: "Некорректный формат JSON. Убедитесь, что вы вводите валидный объект.",
            }),
            parseError: getLocalizedText(lang, {
                en: "Error parsing JSON: ",
                ru: "Ошибка парсинга JSON: ",
            }),
            success: getLocalizedText(lang, {
                en: "JSON successfully uploaded!",
                ru: "JSON успешно загружен!",
            }),
            placeholder: placeholder || getLocalizedText(lang, {
                en: "Enter JSON here...",
                ru: "Введите JSON сюда...",
            }),
        }
    )
}

export type LocalizedText = ReturnType<typeof localizedText>
