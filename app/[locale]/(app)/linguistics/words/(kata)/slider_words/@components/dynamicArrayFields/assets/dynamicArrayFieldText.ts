import {getLocalizedText} from "@/app/lib/utils";

export const dynamicArrayFieldText = (lang: string) => {
    return {
        addButton: getLocalizedText(lang, {
            en: "Add",
            ru: "Добавить",
        }),
        deleteButton: getLocalizedText(lang, {
            en: "Delete",
            ru: "Удалить",
        })
    };
};

export type DynamicArrayFieldText = ReturnType<typeof dynamicArrayFieldText>;


