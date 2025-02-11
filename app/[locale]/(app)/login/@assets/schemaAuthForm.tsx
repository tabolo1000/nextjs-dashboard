import * as Yup from "yup";

export const schemaAuthForm =
    Yup.object({
        username: Yup.string().required('Обязательное поле'),
        password: Yup.string()
            .min(6, 'Пароль должен содержать минимум 6 символов')
            .required('Обязательное поле'),
    })