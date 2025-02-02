import {getLocalizedText} from "@/app/lib/utils";


export const localizedText = (lang: string) =>  ({
    title: getLocalizedText(lang, {
        ru: "Настройки слайдера",
        en: "Slider Settings",
    }),
    loop: getLocalizedText(lang, {
        ru: "Цикличность",
        en: "Loop",
    }),
    loopEnabled: getLocalizedText(lang, {
        ru: "Включена",
        en: "Enabled",
    }),
    loopDisabled: getLocalizedText(lang, {
        ru: "Отключена",
        en: "Disabled",
    }),
    scrollSpeed: getLocalizedText(lang, {
        ru: "Скорость прокрутки (мс)",
        en: "Scroll Speed (ms)",
    }),
    slidesPerView: getLocalizedText(lang, {
        ru: "Количество слайдов на экране",
        en: "Number of slides on screen",
    }),
    autoplay: getLocalizedText(lang, {
        ru: "Автопрокрутка",
        en: "Autoplay",
    }),
    autoplayEnabled: getLocalizedText(lang, {
        ru: "Включена",
        en: "Enabled",
    }),
    autoplayDisabled: getLocalizedText(lang, {
        ru: "Отключена",
        en: "Disabled",
    }),
});


export type LocalizedText = ReturnType<typeof localizedText>;