import { getLocalizedText } from "@/app/lib/utils";

export const localizedProfileText = (lang: string) => ({
    phone: getLocalizedText(lang, {
        ru: "Телефон",
        en: "Phone",
    }),
    role: getLocalizedText(lang, {
        ru: "Роль",
        en: "Role",
    }),
    lastLogin: getLocalizedText(lang, {
        ru: "Последний вход",
        en: "Last Login",
    }),
    address: getLocalizedText(lang, {
        ru: "Адрес",
        en: "Address",
    }),
    editProfile: getLocalizedText(lang, {
        ru: "Редактировать профиль",
        en: "Edit Profile",
    }),
    logout: getLocalizedText(lang, {
        ru: "Выйти",
        en: "Logout",
    }),
    logoutConfirmation: getLocalizedText(lang, {
        ru: "Вы уверены, что хотите выйти?",
        en: "Are you sure you want to log out?",
    }),
    information : getLocalizedText(lang, {
        ru: "Информация",
        en: "Information",
    }),
    unspecified : getLocalizedText(lang, {
        ru: "Не указано",
        en: "not specified",
    }),
});

export type LocalizedProfileText = ReturnType<typeof localizedProfileText>;