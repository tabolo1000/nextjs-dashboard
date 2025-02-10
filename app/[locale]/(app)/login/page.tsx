'use client'

import React, {useCallback, useState} from 'react';
import {Form, Formik, FormikHelpers, FormikProps} from 'formik';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import SocialButton from './components/SocialButton';
import { schemaAuthForm } from './schema/schemaAuthForm';
import {useAppDispatch} from "@/app/store/hooks";
import {AuthFormValues} from "@/app/api/user.api";
import {userSliceThunks} from "@/app/store/slices/userSlice/userSliceThunks";
import {useRouter} from "@/i18n/routing";


const AuthForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(true); // Переключение между режимами входа и регистрации

    const initialValues: AuthFormValues = {
        username: "",
        password: "",
    };

    /**
     * Sending a request through the login form
     * @param values { username: '', password: ''}
     * @param actions
     */
    const handleSubmit = useCallback(
        async (values: AuthFormValues, actions: FormikHelpers<AuthFormValues>) => {
            const { setSubmitting, setErrors } = actions;
            const { loginUser, registerUser } = userSliceThunks;
            debugger
            try {
                const resultAction = await dispatch(isLogin ? loginUser(values) : registerUser(values));

                if (loginUser.fulfilled.match(resultAction)) {
                    router.push("/profile"); // Редирект после успешного входа
                } else if (resultAction.payload) {
                    setErrors({ server: resultAction.payload });
                }
            }catch (error){
                debugger
            }

            finally {
                setSubmitting(false);
            }
        },
        [dispatch, isLogin, router]
    );

    return (
        <div className="h-3/5 flex items-center justify-center bg-gradient-to-br dark:from-gray-900 via-white to-blue-100 dark:text-dark-text_color px-4 from-blue-100 dark:via-gray-600 dark:to-gray-700 text-text_color transition-all">
            <div className="dark:bg-dark-component_background bg-component_background m-2 p-8 rounded-2xl shadow-2xl w-full max-w-sm transform transition duration-500 hover:scale-[1.00001] border-2 border-border_color dark:border-dark-border_color">
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                    {isLogin ? "Вход в аккаунт" : "Регистрация"}
                </h2>

                <Formik initialValues={initialValues} validationSchema={schemaAuthForm} onSubmit={handleSubmit}>
                    {({ errors }: FormikProps<AuthFormValues>) => (
                        <Form>
                            {/* Form fields */}
                            <InputField label="Имя пользователя" name="username" type="text" placeholder="Введите ваше имя" />
                            <InputField label="Пароль" name="password" type="password" placeholder="Введите ваш пароль" />
                            {/* Server error message */}
                            {errors.server && <div className="text-error dark:text-dark_error text-sm mt-2 text-center">{errors.server}</div>}
                            {/* Send button */}
                            <SubmitButton>{isLogin ? "Войти" : "Зарегистрироваться"}</SubmitButton>
                        </Form>
                    )}
                </Formik>
                {/* Switching between modes */}
                <p className="mt-2 text-sm text-center dark:text-dark-text_color_muted text-text_color">
                    {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
                    <button onClick={() => setIsLogin(!isLogin)} className="text-link_color hover:text-hover_link_color underline transition">
                        {isLogin ? "Регистрация" : "Вход"}
                    </button>
                </p>
                {/* Third party authentication services */}
                <div className="mt-4 flex gap-4 justify-center">
                    <SocialButton title="Login with Google" icon="google" />
                    <SocialButton title="Login with Github" icon="github" />
                </div>
            </div>
        </div>
    );
};

export default AuthForm;


//---------------------------------------------------Types-------------------------------------------


