'use client'

import React, {useCallback, useState} from 'react';
import {Form, Formik, FormikHelpers, FormikProps} from 'formik';
import InputField from './@components/InputField';
import SubmitButton from './@components/SubmitButton';
import SocialButton from './@components/SocialButton';
import {schemaAuthForm} from './@assets/schemaAuthForm';
import {useRouter} from "@/i18n/routing";
import {usePathname} from "next/navigation";
import {localizedAuthFormText, LocalizedAuthFormText} from "@/app/[locale]/(app)/login/@assets/language";
import {AuthFormValues, useLoginMutation} from "@/app/store/slices/userSlice/userSliceQuery";

/**
 * Responsible for the login page that is
 * displayed if the token is not present
 * @constructor
 */
const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginUser] = useLoginMutation()
    const lang = usePathname().split("/")[1];
    const authFormText: LocalizedAuthFormText = localizedAuthFormText(lang)
    const router = useRouter();

    const initialValues: AuthFormValues = {
        username: "",
        password: "",
        server: ""
    };

    /**
     * Sending a request through the login form
     * @param values { username: '', password: ''}
     * @param actions
     */
    const handleSubmit = useCallback(
        async (values: AuthFormValues, actions: FormikHelpers<AuthFormValues>) => {
            const {setSubmitting, setErrors} = actions;

            try {
                await loginUser(values);
                router.push("/profile");
            } catch (error) {
                if (typeof error === "string") {
                    setErrors({server: error});
                } else {
                    console.error("Ошибка входа/регистрации:", error);
                }
            } finally {
                setSubmitting(false);
            }
        },
        [loginUser, router]
    );

    return (
        <div
            className="h-3/5 flex items-center justify-center bg-gradient-to-br dark:from-gray-900 via-white to-blue-100 dark:text-dark-text_color px-4 from-blue-100 dark:via-gray-600 dark:to-gray-700 text-text_color transition-all">
            <div
                className="dark:bg-dark-component_background bg-component_background m-2 p-8 rounded-2xl shadow-2xl w-full max-w-sm transform transition duration-500 hover:scale-[1.00001] border-2 border-border_color dark:border-dark-border_color">
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                    {isLogin ? authFormText.submitLogin : authFormText.submitRegister}
                </h2>

                <Formik initialValues={initialValues} validationSchema={schemaAuthForm} onSubmit={handleSubmit}>
                    {({errors}: FormikProps<AuthFormValues>) => (
                        <Form>
                            {/* Form fields */}
                            <InputField label={authFormText.usernameLabel} name="username" type="text"
                                        placeholder={authFormText.usernamePlaceholder}/>
                            <InputField label={authFormText.passwordLabel} name="password" type="password"
                                        placeholder={authFormText.passwordPlaceholder}/>
                            {/* Server error message */}
                            {errors.server && <div
                                className="text-error dark:text-dark_error text-sm mt-2 text-center">{errors.server}</div>}
                            {/* Send button */}
                            <SubmitButton>{isLogin ? authFormText.submitLogin : authFormText.submitRegister}</SubmitButton>
                        </Form>
                    )}
                </Formik>
                {/* Switching between modes */}
                <p className="mt-2 text-sm text-center dark:text-dark-text_color_muted text-text_color">
                    {isLogin ? authFormText.switchToRegister : authFormText.switchToLogin}{" "}
                    <button onClick={() => setIsLogin(!isLogin)}
                            className="text-link_color hover:text-hover_link_color underline transition">
                        {isLogin ? authFormText.registerLink : authFormText.loginLink}
                    </button>
                </p>
                {/* Third party authentication services */}
                <div className="mt-4 flex gap-3 justify-center">
                    <SocialButton title={authFormText.loginWithGoogle} icon="google"/>
                    <SocialButton title={authFormText.loginWithGithub} icon="github"/>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;



