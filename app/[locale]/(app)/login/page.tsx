'use client'
import React from 'react';
import {Form, Formik, FormikProps} from 'formik';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import SocialButton from './components/SocialButton';
import { schemaAuthForm } from './schema/schemaAuthForm';
import { useAuthStore } from './state/useAuthStore';
import {useRouter} from "next/navigation";

const AuthForm: React.FC = () => {
    const { isLogin, toggleMode, submitForm } = useAuthStore(); // Zustand стейт и методы
  /*  const router = useRouter()
    if(!isLogin) {
        router.push("/profile");
        return
    }*/

    // Типизация значений формы
    interface AuthFormValues {
        username: string;
        password: string;
    }

    const initialValues: AuthFormValues = { username: '', password: '' };

    return (
        <div className="h-3/5 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 dark:text-gray-800">
            <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-2xl shadow-2xl w-full max-w-sm transform transition duration-500 hover:scale-[1.00001]">
                {/* Заголовок */}
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                    {isLogin ? 'Добро пожаловать!' : 'Создайте аккаунт'}
                </h2>

                {/* Форма */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={schemaAuthForm}
                    onSubmit={(values, actions) => submitForm(values, actions)} // Используем Zustand
                >
                    {({ errors } : FormikProps<AuthFormValues>) => (
                        <Form>
                            {/* Поля формы */}
                            <InputField
                                label="Имя пользователя"
                                name="username"
                                type="text"
                                placeholder="Введите ваше имя"
                            />
                            <InputField
                                label="Пароль"
                                name="password"
                                type="password"
                                placeholder="Введите ваш пароль"
                            />

                            {/* Сообщение об ошибке сервера */}
                            {errors.server && (
                                <div className="text-red-500 text-sm mt-2 text-center">{errors.server}</div>
                            )}

                            {/* Кнопка отправки */}
                            <SubmitButton>{isLogin ? 'Войти' : 'Зарегистрироваться'}</SubmitButton>
                        </Form>
                    )}
                </Formik>

                {/* Переключение между режимами */}
                <p className="mt-2 text-sm text-center text-gray-400 dark:text-gray-600">
                    {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
                    <button
                        onClick={toggleMode}
                        className="text-blue-400 hover:text-blue-500 underline transition"
                    >
                        {isLogin ? 'Регистрация' : 'Вход'}
                    </button>
                </p>

                {/* Разделитель */}
                <div className="mt-2 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-600">или</span>
                </div>

                {/* Кнопки социальных сетей */}
                <div className="mt-4 flex gap-4 justify-center">
                    <SocialButton title="Войти через Google" icon="google" />
                    <SocialButton title="Войти через GitHub" icon="github" />
                </div>
            </div>
        </div>
    );
};

export default AuthForm;