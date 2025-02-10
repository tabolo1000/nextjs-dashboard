import { getLocalizedText } from "@/app/lib/utils";

export const localizedAuthFormText = (lang: string) => ({
    loginTitle: getLocalizedText(lang, {
        ru: "Вход в аккаунт",
        en: "Sign In",
    }),
    registerTitle: getLocalizedText(lang, {
        ru: "Регистрация",
        en: "Sign Up",
    }),
    usernameLabel: getLocalizedText(lang, {
        ru: "Имя пользователя",
        en: "Username",
    }),
    passwordLabel: getLocalizedText(lang, {
        ru: "Пароль",
        en: "Password",
    }),
    usernamePlaceholder: getLocalizedText(lang, {
        ru: "Введите ваше имя",
        en: "Enter your username",
    }),
    passwordPlaceholder: getLocalizedText(lang, {
        ru: "Введите ваш пароль",
        en: "Enter your password",
    }),
    submitLogin: getLocalizedText(lang, {
        ru: "Войти",
        en: "Sign In",
    }),
    submitRegister: getLocalizedText(lang, {
        ru: "Зарегистрироваться",
        en: "Sign Up",
    }),
    switchToRegister: getLocalizedText(lang, {
        ru: "Нет аккаунта?",
        en: "Don't have an account?",
    }),
    switchToLogin: getLocalizedText(lang, {
        ru: "Уже есть аккаунт?",
        en: "Already have an account?",
    }),
    registerLink: getLocalizedText(lang, {
        ru: "Регистрация",
        en: "Sign Up",
    }),
    loginLink: getLocalizedText(lang, {
        ru: "Вход",
        en: "Sign In",
    }),
    loginWithGoogle: getLocalizedText(lang, {
        ru: "Войти через Google",
        en: "Login with Google",
    }),
    loginWithGithub: getLocalizedText(lang, {
        ru: "Войти через Github",
        en: "Login with Github",
    }),
    serverError: getLocalizedText(lang, {
        ru: "Ошибка сервера. Попробуйте снова.",
        en: "Server error. Please try again.",
    }),
});

export type LocalizedAuthFormText = ReturnType<typeof localizedAuthFormText>;